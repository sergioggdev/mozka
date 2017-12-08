
export function proyectName(string) {
    if (typeof string !== 'string') { throw new Error('La accion PPROYECT_PROYECT_NAME solo admite Strings como parametro'); }
    return {
        type: 'PROYECT_NAME',
        payload: string,
    };
}

export function nextAction(string) {
}
