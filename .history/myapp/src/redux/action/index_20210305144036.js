export const setData=(data)=>{
    console.log(data)
    return{
        type: "set_Data",
        Data:data
    }
}