import Styles from "./productCardHeading.module.scss";
const productCardHeading = ({
    children,
}) => {
  return (
    <>
      <div className={Styles.cardHeader}>
        {children}
      </div>
    </>
  );
};

export default productCardHeading;
