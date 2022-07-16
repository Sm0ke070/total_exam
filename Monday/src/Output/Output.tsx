import style from './Output.module.css'

type OutputType = {
    counter: number
}

const Output = (props: OutputType) => {
    return (
        <div>
            <p className={props.counter === 5 ? style.maxValue: style.minValue}>{props.counter}</p>
        </div>
    )
}

export default Output;

/*
/!*className={maxValue ? style.maxValue:props.counter===5}
{style.maxValue && <div className={style.maxValue}>{style.maxVa*!/lue}</div>}*/
