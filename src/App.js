import Button from "./Button";
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

function App() {
    const handleClick = () => {
        console.log("clicked!");
    };
    return (
    <div>
        <div>
            <Button className= "mb-5" success rounded outline onClick = {handleClick}>
                <GoBell />
                Click Me 
            </Button>
        </div>
        <div>
            <Button danger outline onMouseEnter = {handleClick}>
                <GoCloudDownload />
                 Hello World
            </Button>
        </div>
        <div>
            <Button warning>
                <GoDatabase />
                 warning
            </Button> 
        </div>
        <div>
            <Button secondary outline>
                 secondary
            </Button>
        </div>
        <div>
            <Button primary rounded>
                 primary
            </Button>
        </div>
    </div>
    );
}

export default App;