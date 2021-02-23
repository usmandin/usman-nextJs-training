import Layout from "../components/layout/layout";
import Intro from "../components/intro/intro";
import Container from "../components/container/container";
import ContactCard from "../components/contactCard/contactCard";

export default function Document() {
    const portraitLargeArray = [
        {
            cardVariant : "portrait-large",
            userName : "salman ali",
            userShortName : "SA",
            userDesignation : "senior ui developer",
            userRole : "Admin",
            userImage : "",
            userEmail : "salman@empglabs.com",
            userCall : "+3211234567",
            cardButton : "true",
            cardDropDown : "",
        },
        {
            cardVariant : "portrait-large",
            userName : "salman ali",
            userShortName : "SA",
            userDesignation : "senior ui developer",
            userRole : "Admin",
            userImage : "",
            userEmail : "salman@empglabs.com",
            userCall : "+3211234567",
            cardButton : "true",
            cardDropDown : "",
        },
        {
            cardVariant : "portrait-large",
            userName : "salman ali",
            userShortName : "SA",
            userDesignation : "senior ui developer",
            userRole : "Admin",
            userImage : "",
            userEmail : "salman@empglabs.com",
            userCall : "+3211234567",
            cardButton : "true",
            cardDropDown : "",
        }
    ];

    const portraitSmallArray = [
        {
            cardVariant : "portrait-small",
            userName : "salman ali",
            userShortName : "SA",
            userDesignation : "senior ui developer",
            userRole : "Admin",
            userImage : "",
            userEmail : "salman@empglabs.com",
            userCall : "+3211234567",
            cardButton : "true",
            cardDropDown : "",
        },
        {
            cardVariant : "portrait-small",
            userName : "salman ali",
            userShortName : "SA",
            userDesignation : "senior ui developer",
            userRole : "Admin",
            userImage : "",
            userEmail : "salman@empglabs.com",
            userCall : "+3211234567",
            cardButton : "true",
            cardDropDown : "",
        },
        {
            cardVariant : "portrait-small",
            userName : "salman ali",
            userShortName : "SA",
            userDesignation : "senior ui developer",
            userRole : "Admin",
            userImage : "",
            userEmail : "salman@empglabs.com",
            userCall : "+3211234567",
            cardButton : "true",
            cardDropDown : "",
        }
    ];

    const simpleArray = [
        {
            cardVariant : "simple",
            userName : "salman ali",
            userShortName : "SA",
            userDesignation : "senior ui developer",
            userRole : "Admin",
            userImage : "",
            userEmail : "salman@empglabs.com",
            userCall : "+3211234567",
            cardButton : "",
            cardDropDown : "",
        },
        {
            cardVariant : "simple",
            userName : "salman ali",
            userShortName : "SA",
            userDesignation : "senior ui developer",
            userRole : "Admin",
            userImage : "",
            userEmail : "salman@empglabs.com",
            userCall : "+3211234567",
            cardButton : "",
            cardDropDown : "",
        },
        {
            cardVariant : "simple",
            userName : "salman ali",
            userShortName : "SA",
            userDesignation : "senior ui developer",
            userRole : "Admin",
            userImage : "",
            userEmail : "salman@empglabs.com",
            userCall : "+3211234567",
            cardButton : "",
            cardDropDown : "",
        }
    ];

    const horizontalArray = [
        {
            cardVariant : "horizontal",
            userName : "salman ali",
            userShortName : "SA",
            userDesignation : "senior ui developer",
            userRole : "Admin",
            userImage : "",
            userEmail : "salman@empglabs.com",
            userCall : "+3211234567",
            cardButton : "",
            cardDropDown : "",
        },
        {
            cardVariant : "horizontal",
            userName : "salman ali",
            userShortName : "SA",
            userDesignation : "senior ui developer",
            userRole : "Admin",
            userImage : "",
            userEmail : "salman@empglabs.com",
            userCall : "+3211234567",
            cardButton : "",
            cardDropDown : "",
        },
        {
            cardVariant : "horizontal",
            userName : "salman ali",
            userShortName : "SA",
            userDesignation : "senior ui developer",
            userRole : "Admin",
            userImage : "",
            userEmail : "salman@empglabs.com",
            userCall : "+3211234567",
            cardButton : "",
            cardDropDown : "",
        }
    ];

    const actionArray = [
        {
            cardVariant : "action",
            userName : "salman ali",
            userShortName : "SA",
            userDesignation : " is simply dummy text of the printing and typesetting industry. ",
            userRole : "Admin",
            userImage : "",
            userEmail : "salman@empglabs.com",
            userCall : "+3211234567",
            cardButton : "",
            cardDropDown : "",
        },
        {
            cardVariant : "action",
            userName : "salman ali",
            userShortName : "SA",
            userDesignation : " is simply dummy text of the printing and typesetting industry. ",
            userRole : "Admin",
            userImage : "",
            userEmail : "salman@empglabs.com",
            userCall : "+3211234567",
            cardButton : "",
            cardDropDown : "",
        },
        {
            cardVariant : "action",
            userName : "salman ali",
            userShortName : "SA",
            userDesignation : " is simply dummy text of the printing and typesetting industry.",
            userRole : "Admin",
            userImage : "",
            userEmail : "salman@empglabs.com",
            userCall : "+3211234567",
            cardButton : "",
            cardDropDown : "",
        }
        ,
        {
            cardVariant : "action",
            userName : "salman ali",
            userShortName : "SA",
            userDesignation : " is simply dummy text of the printing and typesetting industry.",
            userRole : "Admin",
            userImage : "",
            userEmail : "salman@empglabs.com",
            userCall : "+3211234567",
            cardButton : "",
            cardDropDown : "",
        }
    ];

  return (
    <Layout title="Grid List">
      <Intro> Grid List</Intro>
      <Container grid={"3"}>
        {
            portraitLargeArray.map(function (data, i) {
                return <ContactCard
                    cardVariant ={data.cardVariant} // "portrait-large", "portrait-small" , "horizontal"
                    userName={data.userName}
                    userShortName= {data.userShortName}
                    userDesignation={data.userDesignation}
                    userRole={data.userRole}
                    userImage={data.userImage}
                    userEmail={data.userEmail}
                    userCall={data.userCall}
                    cardButton = {data.cardButton}
                    cardDropDown = {data.cardDropDown}                    
                />
            })
        }        
      </Container>
      <Container grid={"3"}>
        {
            portraitSmallArray.map(function (data, i) {
                return <ContactCard
                    cardVariant ={data.cardVariant} // "portrait-large", "portrait-small" , "horizontal"
                    userName={data.userName}
                    userShortName= {data.userShortName}
                    userDesignation={data.userDesignation}
                    userRole={data.userRole}
                    userImage={data.userImage}
                    userEmail={data.userEmail}
                    userCall={data.userCall}
                    cardButton = {data.cardButton}
                    cardDropDown = {data.cardDropDown}                    
                />
            })
        }        
      </Container>
      <Container grid={"3"}>
        {
            simpleArray.map(function (data, i) {
                return <ContactCard
                    cardVariant ={data.cardVariant} // "portrait-large", "portrait-small" , "horizontal"
                    userName={data.userName}
                    userShortName= {data.userShortName}
                    userDesignation={data.userDesignation}
                    userRole={data.userRole}
                    userImage={data.userImage}
                    userEmail={data.userEmail}
                    userCall={data.userCall}
                    cardButton = {data.cardButton}
                    cardDropDown = {data.cardDropDown}                    
                />
            })
        }        
      </Container>
      <Container grid={"3"}>
        {
            horizontalArray.map(function (data, i) {
                return <ContactCard
                    cardVariant ={data.cardVariant} // "portrait-large", "portrait-small" , "horizontal"
                    userName={data.userName}
                    userShortName= {data.userShortName}
                    userDesignation={data.userDesignation}
                    userRole={data.userRole}
                    userImage={data.userImage}
                    userEmail={data.userEmail}
                    userCall={data.userCall}
                    cardButton = {data.cardButton}
                    cardDropDown = {data.cardDropDown}                    
                />
            })
        }        
      </Container>
      <Container grid={"2"}>
        {
            actionArray.map(function (data, i) {
                return <ContactCard
                    cardVariant ={data.cardVariant} // "portrait-large", "portrait-small" , "horizontal"
                    userName={data.userName}
                    userShortName= {data.userShortName}
                    userDesignation={data.userDesignation}
                    userRole={data.userRole}
                    userImage={data.userImage}
                    userEmail={data.userEmail}
                    userCall={data.userCall}
                    cardButton = {data.cardButton}
                    cardDropDown = {data.cardDropDown}                    
                />
            })
        }        
      </Container>
    </Layout>
  );
}
