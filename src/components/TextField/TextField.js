import './TextField.css';

export const TextField = (props) => {
    const whenTyped = (e) => {
        props.whenChanging(e.target.value);
    }

    return(
        <div className="TextField">
            <label>{props.label}</label>
            <input
                required={props.required}
                placeholder={props.placeholder}
                onChange={whenTyped}
                value={props.value}
            />
            
        </div>
    )
}