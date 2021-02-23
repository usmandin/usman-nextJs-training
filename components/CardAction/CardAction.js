import Styles from "./CardAction.module.scss"

const CardAction = ({
    children,
    userRole,
    ...props
}) => {
    return (
        <>
        <div className={Styles.CardActionWrapper}>
            <div className={Styles.actionTimeWrapper}>
                <svg version="1.1" id="Layer_1" x="0px" y="0px" width="15px" viewBox="0 0 32 32">
                    <g>
                        <path fill="#A3A3A3" d="M16,0C7.2,0,0,7.2,0,16s7.2,16,16,16s16-7.2,16-16S24.8,0,16,0z M16,30C8.3,30,2,23.7,2,16S8.3,2,16,2
                            s14,6.3,14,14S23.7,30,16,30L16,30z"/>
                        <path fill="#A3A3A3" d="M17,6h-2v10.4l6.3,6.3l1.4-1.4L17,15.6V6z"/>
                    </g>
                </svg>
            </div>
            <div className={Styles.actionArrowWrapper}>
                <svg version="1.1" id="Layer_1" x="0px" y="0px" width="20px" viewBox="0 0 32 32">
                    <path fill="#AFAFAF" d="M26.4,4.3C26.4,4.3,26.4,4.3,26.4,4.3l-9.2,0c-0.7,0-1.2,0.6-1.2,1.3c0,0.7,0.6,1.2,1.3,1.2l6.2,0L4.7,25.5
                        c-0.5,0.5-0.5,1.2-0.1,1.7c0.5,0.6,1.3,0.6,1.8,0.1L25.2,8.6l0,6.2c0,0.7,0.6,1.3,1.2,1.3c0.7,0,1.3-0.6,1.3-1.2l0-9.2c0,0,0,0,0,0
                        C27.7,4.9,27.1,4.3,26.4,4.3z"/>
                </svg>
            </div>
        </div>
        </>
    )
};

export default CardAction