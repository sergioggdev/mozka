import path from 'path';
import { fork } from 'child_process'; 

export default () => {
    class Server {
        constructor() {
            this.serverPath = path.join(__dirname, '..', '..', '..', '..', 'server', 'bin', 'www');
            this.server = this.start();
        }

        start() {
            return fork(this.serverPath);
        }
        stop() {
            this.server.disconnect();
        }
        send(msg) {
            this.server.send(msg); 
        }
        on(callBack) {
            this.server.on('message', msg => { 
                callBack(msg); 
            });
        }
    }
    return new Server();
}
