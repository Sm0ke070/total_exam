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