const getDateReducer=(state={},action)=>{
    switch(action.type){
        case 'setData':
            sate=action.Data
            return state
        default:
            return state
    }

}

export default getDateReducer;