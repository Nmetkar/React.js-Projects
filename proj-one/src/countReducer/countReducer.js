export const intialState = {count:0}


export function reducer(state, action){
    switch (action) {
        case 'increament':
            return {count:state.count + 1}
           
        case 'decreament':
            return {count:state.count - 1}

        case 'reset':
            return {count:0}
        default:
            return state
    }
}