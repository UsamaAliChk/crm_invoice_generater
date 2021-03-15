const getDateReducer=(state={},action)=>{
    switch(action.type){
        case 'setCompany':
            sate=action.company
            return state
        default:
            return state
    }

}

export default getDateReducer;