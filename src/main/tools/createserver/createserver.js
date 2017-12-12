import path from 'path';
import { fork } from 'child_process';
import { inspect } from 'util';

export default (() => {
    let instance;
    const createServer = () => {
        class Server {
            constructor() {
                this.serverPath = path.join(__dirname, '..', '..', '..', '..', 'server', 'app');
                this.server = null;
                this.onMsg = 'null';
            }
            isServerUp() {
                if (this.server) {
                    if (!this.server.killed) { return true; }
                }
                return false;
            }
            start() {
                if (!this.isServerUp()) {
                    this.server = fork(this.serverPath);
                    if (this.onMsg) {
                        this.server.on('message', (msg) => {
                            this.onMsg(msg);
                        });
                    }
                }
                return this;
            }
            stop() {
                if (this.isServerUp()) {
                    this.server.kill();
                }
                return this;
            }
            send(msg) {
                if (this.isServerUp()) {
                    this.server.send(msg);
                } else { throw new Error('You cant send msg with the server shutdown'); }
                return this;
            }
            on(callBack) {
                if (this.isServerUp()) {
                    this.server.on('message', (msg) => {
                        callBack(msg);
                    });
                } else {
                    // throw new Error('You cant linsten msg with the server shutdown');
                    this.onMsg = callBack;
                }
                return this;
            }
        }
        return new Server();
    };

    return () => {
        if (!instance) {
            instance = createServer();
        }
        return instance;
    };
})();
