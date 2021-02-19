import Head from "next/head";
import Layout from "../components/layout/layout";
import Intro from "../components/intro/intro";
import Container from "../components/container/container";
import ProductCard from "../components/productCard/productCard";

export default function Showcase() {
  // const productDataArry = [
  //   {
  //     cardId: "0",
  //     cardTitle: "1st Card",
  //     cardHeading: "1st Card heading",
  //     cardImg: "/thumbnails/108665600-400x300.webp",
  //     cardDesc:
  //       "Forms are an essential part of the web. This guide will demonstrate how to build a performant,",
  //     cardList: [{ listData: "List One" }, { listData: "List Two" }],
  //     cardLinkText: "Go to First Card",
  //     cardType: "Product",
  //     position: "left",
  //   },
  // ];
  return (
    <>
      <Layout title="Showcase Page">
        <Container>
          <Intro> Showcase Page </Intro>
        </Container>
        <Container>
          <ProductCard
            cardType={""} // Add Card Type "Primary", "Success","Danger","Primary","Secondary"."Info","Light","Dark","Warning"
            cardposition="left"
            cardTextAlignment="Left" // Add Card Text alignment "left","Right","Center"
            cardGrid = "Large" // Add Card Size "Small", "Medium", "Large"
            cardTitle={"Card Title"} // Add Title text
            cardHeading={"Card Heading"} // Add Heading text
            cardFooter={""} // Add Footer text
            cardImg={"/thumbnails/108665600-400x300.webp"} // Add Image Path
            cardText={"Some quick example text to build on the card title and make up the bulk of the card's content."} // Add Card Description 
            cardNav={[{ navData: "First Link",navState:"Active" }, { navData: "Second Link",navState:"" }, { navData: "Third Link",navState:"Disabled" }]} // Add List
            CardListPosition={"Top"} // Add List Position "Top","Bottom"
            cardList={[{ listData: "List One" }, { listData: "List Two" }]} // Add List
            cardLinkText={[{ listLink: "Cart Link" }, { listLink: "Another Link" }]} // Add Card Links 
            cardBtn={"Read More"} // Add Btn
          ></ProductCard>
        </Container>

        {
        //   productDataArry.map(function (data, i) {
        //   return (
        //     <Container>
        //       <ProductCard
        //         cardTitle={data.cardTitle}
        //         cardHeading={data.cardHeading}
        //         cardImg={data.cardImg}
        //         cardText={data.cardDesc}
        //         cardList={data.cardList}
        //         cardBtnText={data.cardLinkText}
        //         cardType={data.cardType}
        //         position="left"
        //       >
        //       </ProductCard>
        //     </Container>
        //   );
        // })
      }
      </Layout>
    </>
  );
}
