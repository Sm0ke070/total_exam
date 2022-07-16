type IncrementType = {
    counter: number;
    changeCounter:()=>void;
    title:string
}
const Increment = (props: IncrementType) => {
    return (
        <div>
            <button onClick={props.changeCounter} disabled={props.counter===5}>
                {props.title}
            </button>
        </div>
    )
}

export default Increment;