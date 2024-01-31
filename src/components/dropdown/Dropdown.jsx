import './Dropdown.sass'
import {useState} from "react";

function Dropdown({title, description}) {
    const [showContentDrop, setShowContentDrop] = useState(null);

    const toggleDropdown = () => setShowContentDrop(!showContentDrop);

    return (
        <>
            <div className='content__dropdown'>
                <div className='content__dropdown-title' onClick={toggleDropdown}>
                    <span>{title}</span>
                    <i></i>
                </div>
                {showContentDrop ?
                    <div className='content__dropdown-description'>{description}</div>
                    :
                    <></>
                }
            </div>
        </>
    )
}

export default Dropdown