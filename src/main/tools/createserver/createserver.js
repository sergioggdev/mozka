import path from 'path';
import { fork } from 'child_process';

export default () => {
    class Server {
        constructor() {
            this.serverPath = path.join(__dirname, '..', '..', '..', '..', 'server', 'app');
            this.server = this.start();
        }
        start() {
            return fork(this.serverPath);
        }
        stop() {
            this.server.disconnect();
            return this;
        }
        send(msg) {
            this.server.send(msg);
            return this;
        }
        on(callBack) {
            this.server.on('message', (msg) => {
                callBack(msg);
            });
            return this;
        }
    }
    return new Server();
};
