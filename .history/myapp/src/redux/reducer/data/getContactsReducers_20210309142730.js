const getContacts=(state=[],action)=>{
    switch (action.type){
        case 'setContacts':

            state=action.Data
            return {state}
        default:
            console.log("PSAKISTAN")
            console.log(state)
            return state
    }
}

export default getContacts;