import useJsonFetch from "../services/jsonJsonFetch";
import shortid from 'shortid';

export default function Response(props) {
    const {url, interval, initialData} = props;
    const [{data, loading}] = useJsonFetch(url, interval, initialData);
    return (
        <>
            {
            <div key={shortid.generate()} className="alert alert-primary" role="alert">
                {loading || typeof data.status === 'undefined' ? "Loading..." : data.status}
            </div>
            }
        </>
    )
}