const getDateReducer=(state={},action)=>{
    switch(action.type){
        case 'setCompany':
            state=action.Data
            return state
        default:
            return state
    }

}

export default getDateReducer;