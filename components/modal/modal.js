import Heading from "../heading/heading";
import ModalButton from "../modalButton/modalButton";
import Styles from "./modal.module.scss";

const Modal = ({
    variant,
    heading,
    description,
    buttons,
}) => {
    console.log(variant);
    return (
        <>
            <div className={`${Styles.modal} ${variant === 'center with single action' ? Styles.centerwithSingleAction : "" } ${variant === 'center with double action' ? Styles.centerWithDoubleAction : "" } ${variant === 'simple alert' ? Styles.simpleAlert : "" } ${variant === 'simple alert left align' ? Styles.simpleAlertLeftAlign : "" }`.trim()}>
                <div className={Styles.modalUpparWrapper}>
                    <div className={`${Styles.modalIcon}`}>
                        { 
                            variant === 'center with single action' || variant === 'center with double action' ? (
                                <svg version="1.1" x="0px" y="0px" viewBox="0 0 32 32">
                                    <path fill="#097D59" d="M0,17l11,11L32,7l-3-3L11,22l-8-8L0,17z"/>
                                </svg>
                            ) : ""
                        }
                        {
                            variant === 'simple alert' || variant === 'simple alert left align'  ? (
                                <svg version="1.1" x="0px" y="0px" viewBox="0 0 32 32">
                                    <g>
                                        <path fill="#DC2626" d="M31.5,24.7L19.3,3.5c-0.7-1.2-1.9-1.9-3.3-1.9c-1.4,0-2.6,0.7-3.3,1.9L0.5,24.7c-0.7,1.2-0.7,2.7,0.1,3.9
                                            c0.7,1.1,1.9,1.8,3.2,1.8h24.4c1.4,0,2.6-0.7,3.3-1.9C32.2,27.3,32.2,25.9,31.5,24.7z M28.2,28.5H3.8c-0.6,0-1.3-0.3-1.6-0.8
                                            c-0.4-0.6-0.4-1.4-0.1-2L14.4,4.5c0.3-0.6,1-0.9,1.6-0.9c0.7,0,1.3,0.4,1.6,0.9l12.2,21.2c0.4,0.6,0.3,1.4-0.1,2
                                            C29.5,28.2,28.8,28.5,28.2,28.5z"/>
                                        <rect x="15.1" y="11" fill="#DC2626" width="1.9" height="9.4"/>
                                        <path fill="#DC2626" d="M16,22.2c-0.7,0-1.2,0.6-1.2,1.2s0.6,1.2,1.2,1.2c0.7,0,1.2-0.6,1.2-1.2S16.7,22.2,16,22.2z"/>
                                    </g>
                                </svg>
                            ) : ""
                        }
                    </div>
                    <div className={Styles.modalContent}>
                        <Heading variant="h3" >{heading}</Heading>
                        <p>{description}</p>
                    </div>
                </div>
                {
                    buttons && (
                        <div className={Styles.modalBottomWrapper}>
                            {
                                buttons.map(function (data, i) {
                                return (
                                    <ModalButton className={data.state} href="/modal">
                                        {data.text}
                                    </ModalButton>
                                    );
                                })
                            }
                        </div>
                    )
                }
            </div>
        </>
    )
};

export default Modal