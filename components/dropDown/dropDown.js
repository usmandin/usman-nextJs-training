import { useState,useRef,useEffect } from 'react';
import Styles from './dropDown.module.scss';

function DropDown() {

    const [isOpen, setIsOpen] = useState(false);

    const showDropDown = () => { setIsOpen(!isOpen);};

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
                Click Here                
                <p>
                {
                    isOpen ? ("Close") : "Open"
                }
                </p>
            </div>
            {
                isOpen ? (
                    <>
                    <ul className={Styles.DropDownList} ref={dropDown}>
                        <li>One</li>
                        <li>Two</li>
                        <li>Thee</li>
                        <li>Four</li>
                        <li>Five</li>
                    </ul> 
                    </>
                ) : null
            }
        </div>
    </>
  )
}


export default DropDown