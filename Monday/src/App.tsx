import React, {useState} from 'react';
import './App.css';
import Output from "./Output/Output";
import Increment from "./Buttons/Increment";
import Reset from "./Buttons/Reset";
import style from "./App.module.css"
import Set from "./Buttons/Set";


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
        <div className={style.App}>
            <div className={style.counter}>
                <Output counter={counter}/>
                <div className={style.btn}>
                    <Increment title={'inc'} counter={counter} maxValue={maxValue} changeCounter={changeCounter}/>
                    <Reset title={'reset'} counter={counter} resetOutput={resetOutput}/>
                    <Set title={'set'} counter={counter}/>
                </div>
            </div>
            {/*------------------------------------------*/}
            <div className={style.counter}>
                <Output counter={counter}/>
                <div className={style.btn}>
                    <Increment title={'inc'} counter={counter} maxValue={maxValue} changeCounter={changeCounter}/>
                    <Reset title={'reset'} counter={counter} resetOutput={resetOutput}/>
                    <Set title={'set'} counter={counter}/>
                </div>
            </div>
        </div>
    );
}

export default App;
