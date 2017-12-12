// Falta por revision de codigo por Sergio
import { app, Menu } from 'electron';

export default () => {
    class MainMenu extends Menu {
        constructor() {
            super();
            this.Menu = Menu;
            this.build();
        }
        build() {
            this.Menu.setApplicationMenu(this.Menu.buildFromTemplate(mainMenu));
        }
    }

    const mainMenu = [
        {
            label: 'Archivo',
            submenu: [
                { label: 'Nuevo proyecto', click() { app.quit(); } },
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
    return new MainMenu();
};
