import './DropdownList.css';

export const DropdownList = (props) => {
    return(
        <div className='DropdownList'>
            <label>{props.label}</label>
            <select>
                <option value=''></option>
                {props.list.map(item => <option key={item} value={item}>{item}</option>)}
            </select>
        </div>
    )
}