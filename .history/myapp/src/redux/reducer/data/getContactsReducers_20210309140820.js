const getContacts=(state=[],action)=>{
    switch (action.type){
        case 'setContacts':
            state=action.Data
            return action.data
        default:
            return null
    }
}

export default getContacts;