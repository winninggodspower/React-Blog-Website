import { useState, useEffect } from "react";


const UseFetch = (url) => {

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)


    useEffect(()=>{
        console.log("use effect run");
        fetch(url)
            .then(res => {
                if(!res.ok){
                    throw Error("could not fetch the data for the resource");
                }
                return res.json()
            })
            .then(data => {
                setData(data)
                setIsPending(false)
                setError(false)
            })
            .catch(err => {
                setIsPending(false)
                setError(err.message)
            })
    }, [url])
    return (
       {data, isPending, error}
    );
}

export default UseFetch;
