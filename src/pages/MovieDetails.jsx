import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
export const MovieDetails=(path)=>{
    let params=useParams();
    const { data:movie}=useFetch(`${path+params.id}`);
    return (
        <main>
            <section>
                <div>
                    <h1>{movie}</h1>
                </div>
            </section>
        </main>
    )
}