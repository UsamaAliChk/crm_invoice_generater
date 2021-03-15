export const setData=(data)=>{
    console.log(data)
    return{
        type: "set_Data",
        Data:data
    }
}

export const setCompanies=(companies)=>{
    return {
        type:"setCompanies",
        Data:companies
    }
}

export const setContracts=(contracts)=>{
    return {
        type:"setContacts",
        Data:contracts
    }
}