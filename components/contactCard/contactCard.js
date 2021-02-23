import Image from 'next/image'

import Heading from "../heading/heading"
import Role from "../role/role";
import ContactOption from "../contactOption/contactOption";
import Styles from "./contactCard.module.scss"

const ContactCard = ({
    cardVariant,
    userName,
    userShortName,
    userDesignation,
    userRole,
    userImage,
    userEmail,
    userCall,
    ...props
}) => {
    return (
        <>
        <div className={`${Styles.contactCard} ${cardVariant === "portraits card" ? Styles.portraitsCard : ""} ${cardVariant === "horizontal card" ? Styles.horizontalCard : ""} ${cardVariant === "simple card" ? Styles.simpleCard : ""}`}>
            <div className={Styles.contactCardWrapperInner}>

                {
                    cardVariant === "portraits card" ? (
                        <>
                        {

                            userName !== "" || userDesignation !== "" ? (
                                <div className={Styles.headingWrapper}>
                                    {
                                        userName && (
                                            <Heading variant="h2" className="cardTitle">
                                                {userName}
                                                {
                                                    userRole && (
                                                        <Role userRole={userRole}></Role>
                                                    )
                                                }
                                            </Heading>
                                        )
                                    }
                                    {
                                        userDesignation && ( 
                                            <Heading  variant="h3" className="cardsubTitle">{userDesignation}</Heading>
                                        )
                                    }
                                </div>                                    
                            ) : null
                        }
                        {
                            userImage && (
                                <div className={Styles.imgWrapper}>
                                    <Image src={userImage} alt="me" width="64" height="64"/>
                                </div>
                            )
                        }
                        </>
                    ) : null
                }
                
                {
                    cardVariant === "contact card" ? (
                        <>
                            {
                                userImage && (
                                    <div className={Styles.imgWrapper}>
                                        <Image src={userImage} alt="me" width="64" height="64"/>
                                    </div>
                                )
                            }
                            {
                                userName !== "" || userDesignation !== "" ? (
                                        <div className={Styles.headingWrapper}>
                                            {
                                                userName && (
                                                    <Heading variant="h2" className="cardTitle">{userName}</Heading>
                                                )
                                            }
                                            {
                                                userDesignation && ( 
                                                        <Heading  variant="h3" className="cardsubTitle">{userDesignation}</Heading>
                                                )
                                            }
                                        </div>
                                    ) : ("")
                            }
                            {

                                userRole && (
                                    <Role userRole={userRole}></Role>
                                )
                            }
                        </>
                    ) : null 
                }

                {
                    cardVariant === "horizontal card" ? (
                        <>
                        {
                            userImage && (
                                <div className={Styles.imgWrapper}>
                                    <Image src={userImage} alt="me" width="64" height="64"/>
                                </div>
                            )
                        }
                        {

                            userName !== "" || userDesignation !== "" ? (
                                <div className={Styles.headingWrapper}>
                                    {
                                        userName && (
                                            <Heading variant="h2" className="cardTitle">
                                                {userName}
                                            </Heading>
                                        )
                                    }
                                    {
                                        userDesignation && ( 
                                            <Heading  variant="h3" className="cardsubTitle">{userDesignation}</Heading>
                                        )
                                    }
                                </div>                                    
                            ) : null
                        }
                        </>
                    ) : null
                }

                {
                    cardVariant === "simple card" ? (
                        <>
                        {
                            userShortName && (
                                <div className={Styles.shortNameWrapper}>
                                    <h2>{userShortName}</h2>
                                </div>
                            )
                        }  
                        {
                            userName !== "" || userDesignation !== "" ? (
                                <div className={Styles.headingWrapper}>
                                    {
                                        userName && (
                                            <Heading variant="h2" className="cardTitle">
                                                {userName}
                                            </Heading>
                                        )
                                    }
                                    {
                                        userDesignation && ( 
                                            <Heading  variant="h3" className="cardsubTitle">{userDesignation}</Heading>
                                        )
                                    }
                                </div>                                    
                            ) : null
                        }

                        </>
                    ) : null
                }
                
            </div>

            {
                cardVariant === "contact card" || cardVariant === "portraits card" ? (
                    userEmail !== "" || userCall !== "" ? (
                        <ContactOption email={userEmail} call={userCall}></ContactOption>
                    ) : null
                ) : null
            }
            </div>
        </>
    )
};

export default ContactCard