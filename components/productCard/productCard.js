import Image from 'next/image'

import Button from "../button/button";
import Styles from "./productCard.module.scss";

const ProductCard = ({
    cardHeading,
    cardText,
    cardBtnText,
    position,
    ...props
}) => {
  return (
    <>
      <div className={`${Styles.card} ${position === "left" ? "left" : ""}` .trim()} {...props}>
        <Image src="/thumbnails/108665600-400x300.webp" alt="Picture of the author" layout="responsive" width={500} height={350} />        
        <div className={Styles.cardBody}>
            <h5>{cardHeading}</h5>
            <p>{cardText}</p>
            <Button className="btn" size="sm" variant="primaryBtn" href="/showcase">{cardBtnText}</Button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
