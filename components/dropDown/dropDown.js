import { useState,useRef,useEffect } from 'react';
import Styles from './dropDown.module.scss';

function DropDown() {

    const [isOpen, setIsOpen] = useState(false);
    const showDropDown = () => { setIsOpen(!isOpen)};

    const [selectedOption, setSelectedOption] = useState(null);

    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setIsOpen(false);
    };


    const dropDown = useRef(null);
    useEffect(() => {
        if(!isOpen) return;
        function handleClick (event) {
            if(dropDown.current && !dropDown.current.contains(event.taget)) {
                setIsOpen(false);
            }
        }
        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
    }, [
        isOpen
    ]);
    
    
  return (
      <>
        <div className={Styles.dropDownWrapper}>
            <div className={Styles.dropDownHeader} role="button" onClick={showDropDown}>
                <p>{selectedOption ? (selectedOption) : "Select Item"}</p>
                <p>{isOpen ? "Close" : "Open"}</p>
            </div>
            {
                isOpen ? (
                    <>
                    <ul className={Styles.DropDownList} ref={dropDown}>
                        <li role="button" id="1" onClick={onOptionClicked("one")}>One</li>
                        <li role="button" id="1" onClick={onOptionClicked("Two")}>Two</li>
                        <li role="button" id="1" onClick={onOptionClicked("Three")}>Three</li>
                        <li role="button" id="1" onClick={onOptionClicked("Four")}>Four</li>
                        <li role="button" id="1" onClick={onOptionClicked("Five")}>Five</li>
                    </ul>
                    </>
                ) : null
            }
        </div>
    </>
  )
}


export default DropDown