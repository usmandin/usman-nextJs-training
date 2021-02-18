import Head from "next/head";
import Layout from "../components/layout/layout";
import Intro from "../components/intro/intro";
import Container from "../components/container/container";
import ProductCard from "../components/productCard/productCard";

export default function Showcase() {
  const productDataArry = [
    {
      cardId: "0",
      cardTitle: "1st Card",
      cardHeading: "1st Card",
      cardImg: "/thumbnails/108665600-400x300.webp",
      cardDesc:
        "Forms are an essential part of the web. This guide will demonstrate how to build a performant,",
      cardList: [{ listData: "List One" }, { listData: "List Two" }],
      cardLinkText: "Go to First Card",
      cardType: "Product",
      position: "left",
    },
    {
      cardId: "1",
      cardTitle: "2nd Card",
      cardHeading: "2nd Card",
      cardImg: "/thumbnails/108665600-400x300.webp",
      cardDesc:
        "Forms are an essential part of the web. This guide will demonstrate how to build a performant,",
      cardList: "",
      cardLinkText: "Go to First Card",
      cardType: "Product",
      position: "left",
    },
    {
      cardId: "2",
      cardTitle: "2nd Card",
      cardHeading: "2nd Card",
      cardImg: "",
      cardDesc:
        "Forms are an essential part of the web. This guide will demonstrate how to build a performant,",
      cardList: "",
      cardLinkText: "Go to First Card",
      cardType: "Product",
      position: "left",
    },
    {
      cardId: "3",
      cardTitle: "",
      cardHeading: "4th Card",
      cardImg: "",
      cardDesc: "",
      cardList: [{ listData: "List One" }, { listData: "List Two" }],
      cardLinkText: "",
      cardType: "Product",
      position: "left",
    },
    {
      cardId: "4",
      cardTitle: "5th Card",
      cardHeading: "5th Card",
      cardImg: "",
      cardDesc:
        "Forms are an essential part of the web. This guide will demonstrate how to build a performant,",
      cardList: "",
      cardLinkText: "",
      cardType: "Product",
      position: "left",
    },
    {
      cardId: "5",
      cardTitle: "6th Card",
      cardHeading: "6th Card",
      cardImg: "",
      cardDesc:
        "Forms are an essential part of the web. This guide will demonstrate how to build a performant,",
      cardList: "",
      cardLinkText: "",
      cardType: "Success",
      position: "left",
    },
    {
      cardId: "6",
      cardTitle: "7th Card",
      cardHeading: "7th Card",
      cardImg: "",
      cardDesc:
        "Forms are an essential part of the web. This guide will demonstrate how to build a performant,",
      cardList: "",
      cardLinkText: "",
      cardType: "Danger",
      position: "left",
    },
    {
      cardId: "7",
      cardTitle: "8th Card",
      cardHeading: "8th Card",
      cardImg: "",
      cardDesc:
        "Forms are an essential part of the web. This guide will demonstrate how to build a performant,",
      cardList: "",
      cardLinkText: "",
      cardType: "Primary",
      position: "left",
    },
  ];
  return (
    <>
      <Layout title="Showcase Page">
        <Container>
          <Intro> Showcase Page </Intro>
        </Container>

        {productDataArry.map(function (data, i) {
          return (
              <Container>
                <ProductCard
                  cardTitle={data.cardTitle}
                  cardHeading={data.cardHeading}
                  cardImg={data.cardImg}
                  cardText={data.cardDesc}
                  cardList={data.cardList}
                  cardBtnText={data.cardLinkText}
                  cardType={data.cardType}
                  position="left"
                ></ProductCard>
              </Container>

            );
          })}
       </Layout>
    </>
  );
}
