import wand from '../Magic-Wand.png';

export function Header() {
    
    return (
        <div className="header">
            <h1 id="App-Title">Gif Wizard<img src={wand} id="wand" alt="a black magic wand"/></h1>
            {/* <img src="../GiphyLogo.gif" /> */}
            <p>Powered by <a href="www.giphy.com">GIPHY</a></p>
        </div>
    )
}