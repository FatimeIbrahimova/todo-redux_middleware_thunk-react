// export async function getData(){
//     const res=await fetch("https://northwind.vercel.app/api/suppliers")
//     const data=await res.json();

//     return {
//         type:"GET_FETCH",
//         payload:json
//     }
// }

export async function getData(){
    return async function(dispatch){
        const res=await fetch("https://northwind.vercel.app/api/suppliers")
        const data=await res.json();
    console.log(data);
        dispatch ({
            type:"GET_FETCH",
            payload:data
        })
    }
    
}