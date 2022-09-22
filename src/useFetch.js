import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        fetch(url)
        .then(res => {
            // console.log(res);
            if(!res){
                throw Error('solli bro');
            } 
            return res.json();
        })
        .then(
            data => {setData(data);
                setIsPending(false);
            })
        .catch(err => {console.log(err.message)});
        
    }, [url]);

    return {data, isPending}
}

export default useFetch;