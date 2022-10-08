const initialState = {value : 0}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TO_COUNTER':
            return Object.assing({},state,{ value: action.payload })
        
        case 'REMOVE_TO_COUNTER':
                return Object.assing({},state,{ value: action.payload })

        default:
            return state
    }
};