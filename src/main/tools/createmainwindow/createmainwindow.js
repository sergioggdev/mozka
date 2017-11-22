import path from 'path';
import { BrowserWindow } from 'electron';

export default () => {
    // Constructor de la ventana princpal
    const isDevelopment = process.env.NODE_ENV !== 'production';
    class MainWindows extends BrowserWindow {
        constructor(obj) {
            super(obj);
            this.url = isDevelopment ? `http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`: `file://${path.join(__dirname, '..', 'renderer', 'index.html')}`;
            this.initDevTools();
            this.loadURL(this.url);
            this.webContents.on('devtools-opened', () => {
                this.focus();
                setImmediate(() => {
                    this.focus();
                });
            });
        }
        initDevTools() {
            if (isDevelopment) { this.webContents.openDevTools(); }
        }
        send(typeMsg, msg) {
            this.webContents.send(typeMsg, msg);
            return this;
        }
    }

    return new MainWindows({
        width: 1000,
        height: 700,
        minWidth: 500,
        minHeight: 400,
        title: 'Mozka',
        icon: path.join(__dirname, 'img', 'Mozka-logo.png'),
        frame: true,
    });
};
