import Heading from "../heading/heading"
import Role from "../role/role";
import ContactButton from "../ContactButton/ContactButton";
import CardShortName from "../CardShortName/CardShortName";
import CardDropDown from "../CardDropDown/CardDropDown";
import CardAction from "../CardAction/CardAction";
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
    cardButton = "false",
    cardDropDown = "false",
    ...props
}) => {
    return (
        <>
        <div className={`${Styles.contactCard} ${cardVariant === "portrait-large" ? Styles.portraitLarge :""} ${cardVariant === "portrait-small" ? Styles.portraitSmall :""} ${cardVariant === "horizontal" ? Styles.horizontal :""} ${cardVariant === "simple" ? Styles.simple :""} ${cardVariant === "action" ? Styles.action :""}`.trim()}>
            <div className={Styles.contactCardWrapperInner}>
                {
                    cardVariant === "action" ? (
                        <CardAction></CardAction>
                    ) : null
                }
                {
                    cardVariant === "simple" ? (
                            <CardShortName>{userShortName}</CardShortName>
                    ) : null
                }

                {
                    cardVariant === "portrait-large" || cardVariant === "portrait-small" || cardVariant ==="horizontal" ?  (
                        <div className={Styles.imgWrapper}>
                            {
                                userImage !== "" ? (
                                    <img src={userImage}/>
                                ) : (
                                    <img src="/asstes/profileImg.png"/>
                                )
                            }
                        </div>
                    ) : null
                }

                <div className={Styles.cardHeadingWrapper}>
                    <Heading variant="h2" className="cardTitle">
                        <span>{userName}</span>
                        {
                            cardVariant === "portrait-small" ? (
                                <>
                                    {
                                        userRole && (
                                            <Role userRole={userRole}></Role>
                                        )
                                    }
                                </>
                            ) : null
                        }
                    </Heading>
                    {
                        userDesignation && ( 
                            <Heading  variant="h3" className="cardsubTitle">
                                {userDesignation}
                            </Heading>
                        )
                    }
                </div>
                
                {
                    cardVariant === "portrait-large" ? (
                        <>
                            {
                                userRole && (
                                    <Role userRole={userRole}></Role>
                                )
                            }
                        </>
                    ) : null
                }
                {
                    cardDropDown === "true" ? (
                        <CardDropDown></CardDropDown>
                    ): null
                }
            </div>
            {
                cardButton && (
                    <ContactButton email={userEmail} call={userCall}/>
                )
            }
            </div>
        </>
    )
};

export default ContactCard