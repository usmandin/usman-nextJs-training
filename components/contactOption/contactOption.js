import Link from "next/link"
import Styles from "./contactOption.module.scss"

const contactOption = ({
    email,
    call,
    ...Props
}) => {
    return (
        <>
        <div className={Styles.contactList}>
        {
            email && (
                <Link href={`mailto:${email}`}>
                    <a>
                    {
                        <svg version="1.1" id="Layer_1" width="20px" x="0px" y="0px" viewBox="0 0 32 32" enable-background="new 0 0 32 32">
                            <g>
                                <path d="M0.7,5.9C5,9.7,12.8,16.2,15,18.3c0.3,0.3,0.6,0.4,1,0.4c0.3,0,0.7-0.1,1-0.4c2.3-2,10-8.6,14.4-12.3
                                    c0.3-0.2,0.3-0.6,0.1-0.9c-0.5-0.7-1.3-1-2.1-1H2.7C1.8,4,1.1,4.4,0.6,5C0.3,5.3,0.4,5.7,0.7,5.9z"/>
                                <path d="M31.6,8c-0.2-0.1-0.5-0.1-0.7,0.1c-4.9,4.1-11.1,9.4-13,11.2c-1.1,1-2.6,1-3.7,0c-2.1-1.9-9.1-7.8-13-11.2
                                    C0.9,7.9,0.6,7.9,0.4,8C0.2,8.1,0,8.3,0,8.6v16.8C0,26.8,1.2,28,2.7,28h26.7c1.5,0,2.7-1.2,2.7-2.7V8.6C32,8.3,31.8,8.1,31.6,8z"/>
                            </g>
                        </svg>
                    }
                    {"Email"}
                    </a>
                </Link>
            )
        }
        {
            call && (
                <Link href={`tel:${call}`}>
                    <a>
                    {
                        <svg version="1.1" width="20px" id="Layer_1" x="0px" y="0px" viewBox="0 0 32 32" enable-background="new 0 0 32 32">
                        <path d="M31.2,23l-4.5-4.2c-1.6-1.5-4.3-0.9-5,1c-0.5,1.3-2.1,2.1-3.5,1.8c-3.2-0.7-7.5-4.6-8.3-7.8c-0.5-1.3,0.5-2.8,1.9-3.3
                            c2.1-0.6,2.7-3.1,1.1-4.6L8.5,1.8c-1.3-1-3.2-1-4.3,0l-3,2.8c-3,3,0.3,10.9,7.8,17.9s16,10.3,19.2,7.3l3-2.8
                            C32.3,25.9,32.3,24.1,31.2,23z"/>
                        </svg>
                    }
                    {"Call"}
                    </a>
                </Link>
            )
        }
        </div>
        </>
    )
};

export default contactOption