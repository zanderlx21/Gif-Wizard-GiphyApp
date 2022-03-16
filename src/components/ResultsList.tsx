import { Giphy } from "../models/giphy";
import { Result } from "./Result";

interface Props {
    gifs: Giphy[];
}

export function ResultsList({ gifs }: Props) {
// const [gif, setGif] = useState<Giphy[]>([]);

    return(
        <div className="Results-List-Container">
            <h2 id="ResultsHeader"> Results </h2>
            <div className="ResultsList">
                
                {gifs.map((gif, i) => ( 
                <Result key={i} gif={gif}/>
                ))}
            </div>
        </div>
    )
    }
