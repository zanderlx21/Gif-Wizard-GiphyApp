import { Giphy } from "../models/giphy";
import { Result } from "./Result";

interface Props {
    gifs: Giphy[];
}

export function ResultsList({ gifs }: Props) {
// const [gif, setGif] = useState<Giphy[]>([]);

    return(
        <div className="ResultsList">
            <h2> Results </h2>
            {gifs.map((gif, i) => ( 
            <Result key={i} gif={gif}/>
            ))}
        </div>
    )
    }
