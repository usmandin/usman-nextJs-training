import Image from "next/image";
import { Children } from "react";

import Button from "../button/button";
import ProductCardHeading from "../productCardHeading/productCardHeading";
import ProductCardNav from "../productCardNav/productCardNav";
import Styles from "./productCard.module.scss";

const ProductCard = ({
    children,
    cardType,
    cardTextAlignment,
    cardposition,
    cardGrid,
    cardNav,
    cardTitle,
    cardHeading,
    cardFooter,
    cardImg,
    cardText,
    cardList,
    CardListPosition,
    cardLinkText,
    cardBtn,
    ...props
}) => {
  return (
    <>
      <div
        className={`${Styles.card} ${cardGrid === "Small" ? Styles.cardSmall : ""} ${cardGrid === "Medium" ? Styles.cardMedium : ""} ${cardGrid === "Large" ? Styles.cardLarge : ""} ${cardType === "Success" ? Styles.bgSuccess : ""} ${cardType === "Danger" ? Styles.bgDanger : ""} ${cardType === "Primary" ? Styles.bgPrimary : ""} ${cardType === "Secondary" ? Styles.bgSecondary : ""} ${cardType === "Info" ? Styles.bgInfo : ""} ${cardType === "Light" ? Styles.bgLight : ""} ${cardType === "Dark" ? Styles.bgDark : ""} ${cardType === "Warning" ? Styles.bgWarning : ""} ${cardTextAlignment === "Center" ? "textCenter" : ""} ${cardTextAlignment === "Left" ? "textLeft" : ""} ${cardTextAlignment === "Right" ? "textRight" : ""}`.trim()} {...props}>
        {cardImg && (
          <Image
            src={cardImg}
            alt="Picture of the author"
            layout="responsive"
            width="500"
            height="350"
          />
        )}

        {
            cardHeading !== "" || cardNav === "" ? (
              <ProductCardHeading> {cardHeading }</ProductCardHeading>
            ) : (null)
        }
        
        {
            cardNav !== "" || cardHeading === "" ? (
                <ProductCardHeading> <ProductCardNav cardNav={cardNav}/> </ProductCardHeading>
            ) : (null)
        }


        {cardList && CardListPosition === "Top" ? (
          <ul className={`${Styles.listGroup} ${Styles.listGroupFlush}`}>
            {cardList.map(function (data, i) {
              return <li className={Styles.listGroupItem}>{data.listData}</li>;
            })}
          </ul>
        ) : null}

        {cardFooter && <div className={Styles.cardFooter}>{cardFooter}</div>}

        {cardList && CardListPosition === "Bottom" ? (
          <ul className={`${Styles.listGroup} ${Styles.listGroupFlush}`}>
            {cardList.map(function (data, i) {
              return <li className={Styles.listGroupItem}>{data.listData}</li>;
            })}
          </ul>
        ) : null}

        {cardTitle !== "" || cardText !== "" || cardBtnText !== "" ? (
          <div className={Styles.cardBody}>
            {cardTitle && <h5 className={Styles.cardTitle}>{cardTitle}</h5>}
            {cardText && <p>{cardText}</p>}
            {cardBtn && (
              <Button
                className="btn"
                size="sm"
                variant="primaryBtn"
                href="/showcase"
              >
                {cardBtn}
              </Button>
            )}
          </div>
        ) : null}
        
        {cardLinkText && (
          <div className={Styles.cardBody}>
            {cardLinkText.map(function (data, i) {
              return (
                <Button className="cardLink" href="/showcase">
                  {data.listLink}
                </Button>
              );
            })}
          </div>
        )}
        {children}
      </div>
    </>
  );
};

export default ProductCard;
