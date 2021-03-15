const toggleLoader=(state=false,action)=>{
    switch(action.type){
        case 'showLoader':
            return true
        case 'hideLoader':
            return false
        default:
            return state
    }
}

export default toggleLoader