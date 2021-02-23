import Layout from "../components/layout/layout";
import Intro from "../components/intro/intro";
import Container from "../components/container/container";
import ContactCard from "../components/contactCard/contactCard";

export default function Document() {
  return (
    <Layout title="Grid List">
      <Intro> Grid List</Intro>

      <Container>
        <ContactCard
            cardVariant ="contact card" // "contact card", "portraits card" , "horizontal card"
            userName={"salman ali"}
            userShortName={"SA"}
            userDesignation={"senior ui developer"}
            userRole={"admin"}
            userImage={"/asstes/profileImg.png"}
            userEmail={"salman@empglabs.com"}
            userCall={"+3211234567"}
        ></ContactCard>
        
        <ContactCard
        cardVariant ="portraits card" // "contact card", "portraits card" , "horizontal card"
        userName={"salman ali"}
        userShortName={"SA"}
        userDesignation={"senior ui developer"}
        userRole={"admin"}
        userImage={"/asstes/profileImg.png"}
        userEmail={"salman@empglabs.com"}
        userCall={"+3211234567"}
        ></ContactCard>
        <ContactCard
        cardVariant ="horizontal card" // "contact card", "portraits card" , "horizontal card"
        userName={"salman ali"}
        userShortName={"SA"}
        userDesignation={"senior ui developer"}
        userRole={"admin"}
        userImage={"/asstes/profileImg.png"}
        userEmail={"salman@empglabs.com"}
        userCall={"+3211234567"}
        ></ContactCard>
      </Container>
    </Layout>
  );
}
