const getContacts=(state=["hello"],action)=>{
    switch (action.type){
        case 'setContacts':
            state=action.Data
            return action.data
        default:
            console.log("PSAKISTAN")
            console.log(state)
            return state
    }
}

export default getContacts;