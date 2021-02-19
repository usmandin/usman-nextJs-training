import Button from "../button/button";

import Styles from "./ProductCardNav.module.scss";
const ProductCardNav = ({
    cardNav,
}) => {
    return (
    <>
        <ul className={`${Styles.nav} ${Styles.navPills}`}>
        {cardNav.map(function (data, i) {
            return <li><Button className="navLink" state={data.navState}>{data.navData}</Button></li>;
          })}
      </ul>
    </>
  );
};

export default ProductCardNav;
