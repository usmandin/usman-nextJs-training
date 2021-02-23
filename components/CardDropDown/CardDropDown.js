import Styles from "./CardDropDown.module.scss"

const CardDropDown = ({
    children,
    ...props
}) => {
    return (
        <>
            <div className={Styles.CardDropDown}>
                <svg version="1.1" id="Layer_1" x="0px" y="0px" width="15px" x="0px" viewBox="0 0 32 32">
                    <g>
                        <g>
                            <path fill="#A5A5A5" d="M12.3,5.5c0-2.3,1.6-4,3.8-4s3.7,1.6,3.7,4c0,2.3-1.4,4-3.8,4C13.8,9.5,12.3,7.8,12.3,5.5z"/>
                        </g>
                        <g>
                            <path fill="#A5A5A5" d="M12.3,16c0-2.3,1.6-4,3.8-4s3.7,1.6,3.7,4c0,2.3-1.4,4-3.8,4C13.8,20,12.3,18.3,12.3,16z"/>
                        </g>
                        <g>
                            <path fill="#A5A5A5" d="M12.3,26.5c0-2.3,1.6-4,3.8-4s3.7,1.6,3.7,4c0,2.3-1.4,4-3.8,4C13.8,30.5,12.3,28.8,12.3,26.5z"/>
                        </g>
                    </g>
                </svg>
            </div>
        </>
    )
};

export default CardDropDown