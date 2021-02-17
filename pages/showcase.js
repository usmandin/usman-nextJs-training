import Head from "next/head";
import Layout from "../components/layout/layout";
import Intro from "../components/intro/intro";
import Container from "../components/container/container";
import ProductCard from "../components/productCard/productCard";
import ColorCard from "../components/colorCard/colorCard";

export default function Showcase() {
  const productDataArry = [
    {
      pId: "0",
      pHeading: "First Card",
      pDesc:
        "Forms are an essential part of the web. This guide will demonstrate how to build a performant,",
      pLinkText: "Go to First Card",
    },
    {
      pId: "1",
      pHeading: "Second Card",
      pDesc:
        "Forms are an essential part of the web. This guide will demonstrate how to build a performant,",
      pLinkText: "Go to Second Card",
    },
    {
      pId: "2",
      pHeading: "Third Card",
      pDesc:
        "Forms are an essential part of the web. This guide will demonstrate how to build a performant,",
      pLinkText: "Go to Third Card",
    },
  ];
  const colorCardDataArry = [
    {
      id: "0",
      heading: "First Card",
      desc:
        "Forms are an essential part of the web. This guide will demonstrate how to build a performant,",
      variant: "primary",
    },
    {
      id: "0",
      heading: "Second Card",
      desc:
        "Forms are an essential part of the web. This guide will demonstrate how to build a performant,",
      variant: "success",
    },
    {
      id: "0",
      heading: "Third Card",
      desc:
        "Forms are an essential part of the web. This guide will demonstrate how to build a performant,",
      variant: "danger",
    },
  ];

  return (
    <>
      <Layout title="Showcase Page">
        <Container>
          <Intro> Showcase Page </Intro>
        </Container>

        <Container>
          {productDataArry.map(function (data, i) {
            return (
              <ProductCard
                cardHeading={data.pHeading}
                cardText={data.pDesc}
                cardBtnText={data.pLinkText}
                position="left"
              ></ProductCard>
            );
          })}
        </Container>

        <Container>
          {colorCardDataArry.map(function (colorData, i) {
            return (
              <ColorCard
                colorCardHeading={colorData.heading}
                colorCardText={colorData.desc}
                colorCardVariant={colorData.variant}
                position="left"
              ></ColorCard>
            );
          })}
        </Container>
      </Layout>
    </>
  );
}
