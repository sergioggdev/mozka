
export function all(obj) {
    if (typeof null !== 'object') { throw 'La accion ROUTER_ALL solo admite objeto como parametro' }
    return {
        type: 'ROUTER_ALL',
        payload: obj,
    };
}

export function welcome(bolean) {
    if (typeof bolean !== 'boolean') { throw 'La accion ROUTER_WELCOME solo admite Boleanos como parametro' }
    return {
        type: 'ROUTER_WELCOME',
        payload: bolean,
    };
}

export function newProyect(bolean) {
    if (typeof bolean !== 'boolean') { throw 'La accion ROUTER_NEW_PROYECT solo admite Boleanos como parametro' }
    return {
        type: 'ROUTER_NEW_PROYECT',
        payload: bolean,
    };
}

export function popup(bolean) {
    if (typeof bolean !== 'boolean') { throw 'La accion ROUTER_POPUP solo admite Boleanos como parametro' }
    return {
        type: 'ROUTER_POPUP',
        payload: bolean,
    };
}
