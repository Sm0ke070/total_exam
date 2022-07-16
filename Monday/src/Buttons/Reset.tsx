type ResetType={
    resetOutput:()=>void;
    counter:number;
    title:string

}

const Reset=(props:ResetType)=>{
    return(
        <div>
            <button onClick={props.resetOutput} disabled={props.counter===0}>
                {props.title}
            </button>
        </div>
    )
}

export default Reset;