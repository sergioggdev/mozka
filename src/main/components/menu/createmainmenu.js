// Falta por revision de codigo por Sergio
import { app, Menu } from 'electron';
import { createMainWindow } from '../../tools/index';

export default () => { 
    class Hola extends Menu {
        constructor() {
            super();
            this.mainMenu = [
                {
                    label: 'Archivo',
                    submenu: [
                        { label: 'Nuevo archivo', click() { this.load(); } },
                        { label: 'Nueva ventana', click() { createMainWindow(); } },
                        { type: 'separator' },
                        { label: 'Importar json...', click() { console.log('sdsf') } },
                        { type: 'separator' },
                        { label: 'Salir', role: 'close' },
                    ],
                },
                {
                    label: 'Editar',
                    submenu: [
                        { label: 'Deshacer', role: 'undo' },
                        { label: 'Rehacer', role: 'redo' },
                        { type: 'separator' },
                        { label: 'Cortar', role: 'cut' },
                        { label: 'Copiar', role: 'copy' },
                        { label: 'Pegar', role: 'paste' },
                        { label: 'Borrar', role: 'delete' },
                        { label: 'Seleccionar todo', role: 'selectall' },
                        { type: 'separator' },
                        {
                            label: 'Salir',
                            click() {
                                app.quit();
                            },
                        },
                    ],
                },
                {
                    label: 'Ventana',
                    submenu: [
                        { role: 'reload' },
                        { role: 'forcereload' },
                        { role: 'toggledevtools' },
                        { type: 'separator' },
                        { role: 'resetzoom' },
                        { role: 'zoomin' },
                        { role: 'zoomout' },
                        { type: 'separator' },
                        { role: 'togglefullscreen' },
                    ],
                },
            ];
        }
    };

    class MainMenu extends Hola {
        constructor() {
            super();
            this.Menu = Menu;
            this.load = this.load.bind(this);
            // this.load();
            this.build();
        }
        load() {
            console.log('asd');
    }
        build() {
            this.Menu.setApplicationMenu(this.Menu.buildFromTemplate(this.mainMenu));
        }
    }

    return new MainMenu()
}
