const getContacts=(state=[],action)=>{
    switch (action.type){
        case 'setContacts':
            state=action.Data
            return state
        default:
            return state
    }
}