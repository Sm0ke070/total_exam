import React, {useState} from 'react';
import './App.css';
import Output from "./Output/Output";
import Increment from "./Buttons/Increment";
import Reset from "./Buttons/Reset";


function App() {
    const minValue = 0;
    const maxValue = 5;

    let [counter, setCounter] = useState(minValue)
    const changeCounter = () => {
        if (counter < maxValue) {
            setCounter(++counter)
        }
    }
    const resetOutput = () => {
        setCounter(0)
    }
    return (
        <div className="App">
            <Output counter={counter}/>
            <Increment title={'Inc'} counter={counter} changeCounter={changeCounter}/>
            <Reset title={'Res'} counter={counter} resetOutput={resetOutput}/>
        </div>
    );
}

export default App;
