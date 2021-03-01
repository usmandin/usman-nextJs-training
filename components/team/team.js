import Heading from "../heading/heading";
import SocialMedia from "../SocialMedia/SocialMedia";
import UserDiscription from "../UserDiscription/UserDiscription";
import Styles from "./team.module.scss"
const Team = ({
    variant,
    userName,
    userDesignation,
    userDiscription,
    userDiscriptionCheck = "false",
    userImage,
    socialMedia,
    ...props
}) => {
    return (
        <>
            <div className={`${Styles.teamWrapper} ${variant === "teamsmall" ? Styles.teamSmall :""} ${variant === "teamlarge" ? Styles.teamLarge :""} ${variant === "teamgridsmall" ? Styles.teamGridSmall :""} ${variant === "teamdark" ? Styles.teamDark :""} ${variant === "gridlarge" ? Styles.gridLarge :""} ${variant === "teamwithdescription" ? Styles.gridDesc :""} ${variant === "gridFullWith" ? Styles.gridFullWidth :""}`.trim()}>
                <div className={Styles.imgWrapper}>
                    {
                        userImage !== "" ? (
                            <img src={userImage}/>
                        ) : (
                            <img src="/asstes/profileImg.png"/>
                        )
                    }
                </div>            
                <div className={Styles.contentWrapper}>            
                    <div className="headingWrapper">
                        <Heading variant="h2" className={Styles.teamTitle}>{userName}</Heading>
                        {
                            userDesignation && (
                                <Heading  variant="h3" className={Styles.teamDesignation}>{userDesignation}</Heading>
                            )
                        }
                    </div>
                    {
                        userDiscriptionCheck == "true" ? (
                            <UserDiscription>{userDiscription}</UserDiscription>
                        ): null
                    }

                    {
                        socialMedia && (
                            <SocialMedia socialMedia={socialMedia} />
                        )
                    }
                </div>
            </div>
        </>
    )
};

export default Team