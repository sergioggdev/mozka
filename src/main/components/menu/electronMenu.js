import { app, Menu } from 'electron';

const menuEjemplo = [
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
        label: 'View',
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
]

const createMenu = Menu.setApplicationMenu(Menu.buildFromTemplate(menuEjemplo));

export default createMenu;
