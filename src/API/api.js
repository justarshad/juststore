const fetchData = async (addOnUrl = '')=>{

    const url = `https://fakestoreapi.com/products/${addOnUrl}`;
   
    const res = await fetch(url);
    if(!res.ok){
        throw new Error("Somthing went wrong...!!")
    }
    const data = await res.json();
    return data;
}
export default fetchData;