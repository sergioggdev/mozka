export default function proyectReducer(state = {}, action) {
    switch (action.type) {
    case 'PROYECT_NAME': return {
        ...state,
        name: action.payload,
    };
    default: return state;
    }
}
