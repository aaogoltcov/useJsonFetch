import {useEffect, useState} from "react";

export default function useJsonFetch(url, interval, initialData) {
    const [data, setData] = useState(initialData);
    const [loading, setLoading] = useState(false);
    const [error] = useState(null);

    useEffect( () => {
        setLoading(true);
        const request = async () => {
            const response = await fetch(url)
                .then(response => response.json())
            setData(response);
            setLoading(false);
        }
        const timeOut = setTimeout(request, interval);
        return () => clearTimeout(timeOut);
    }, []);
    return [{data, loading, error}];
}