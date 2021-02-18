import Image from "next/image";

import Button from "../button/button";
import Styles from "./productCard.module.scss";

const ProductCard = ({
  cardTitle,
  cardHeading,
  cardImg,
  cardText,
  cardList,
  cardBtnText,
  cardType,
  position,
  ...props
}) => {
  return (
    <>
      <div
        className={`${Styles.card}
        ${cardType === "Success" ? Styles.bgSuccess : ""}
        ${cardType === "Danger" ? Styles.bgDanger : ""}
        ${cardType === "Primary" ? Styles.bgPrimary : ""}`.trim()}
        {...props}
      >
        {cardImg !== "" ? (
          <Image
            src={cardImg}
            alt="Picture of the author"
            layout="responsive"
            width="500"
            height="350"
          />
        ) : (
          ""
        )}
        {
          cardHeading !== "" ? 
          (
            <div className={Styles.cardHeader}>{cardHeading}</div>
          ) : ( " " )
        }

        {
            cardList !== "" ? (
            <ul className={`${Styles.listGroup} ${Styles.listGroupFlush}`}>
              {
                cardList.map(function (data, i) {
                  return <li className={Styles.listGroupItem}>{data.listData}</li>;
                })
              }
            </ul>
          ) : (
            " "
          )
        }
        {cardTitle !== "" || cardText !== "" || cardBtnText !== "" ? (
          <div className={Styles.cardBody}>
            {cardTitle !== "" ? (
              <h5 className={Styles.cardTitle}>{cardTitle}</h5>
            ) : (
              " "
            )}

            {cardText !== "" ? <p>{cardText}</p> : ""}
            {cardBtnText !== "" ? (
              <Button
                className="btn"
                size="sm"
                variant="primaryBtn"
                href="/showcase"
              >
                {cardBtnText}
              </Button>
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default ProductCard;
