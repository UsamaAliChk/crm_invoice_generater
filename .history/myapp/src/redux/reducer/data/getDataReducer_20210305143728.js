const getDateReducer=(state={},action)=>{
    switch(action.type){
        case 'set_Data':
            sate=action.Data
            return state
        default:
            return state
    }

}

export default getDateReducer;