import './ImageField.css';

export const ImageField = (props) => {
   
    return(
        <div className='ImageField'>
            <label>{props.label}</label>
            <input  id='input_image' type="file" placeholder={props.placeholder} />
            {/* {document.getElementById('input_image').addEventListener('change', readImage, false)} */}
        </div>
    )
}