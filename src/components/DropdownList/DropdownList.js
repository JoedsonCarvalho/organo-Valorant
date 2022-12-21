import './DropdownList.css';

export const DropdownList = (props) => {
    return(
        <div className='DropdownList'>
            <label>{props.label}</label>
            <select onChange={event => props.whenChanging(event.target.value)} required={props.required} value={props.value}>
                <option value=''></option>
                {props.list.map(item => <option key={item} value={item}>{item}</option>)}
            </select>
        </div>
    )
}