
export function welcome(bolean) {
	if ( typeof bolean !== 'boolean') { throw 'La accion ROUTER_WELCOME solo admite Boleanos como parametro' }
  	return {
		type: 'ROUTER_WELCOME',
		payload: bolean
  	}
}

export function newProyect(bolean) {
	if ( typeof bolean !== 'boolean') { throw 'La accion ROUTER_NEW_PROYECT solo admite Boleanos como parametro' }
	return {	
		type: 'ROUTER_NEW_PROYECT',
		payload: bolean
	}
}
