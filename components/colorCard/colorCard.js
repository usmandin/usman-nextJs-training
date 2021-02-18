import Styles from "./colorCard.module.scss";

const ColorCard = ({
  colorCardHeading,
  colorCardText,
  colorCardVariant,
  position,
  ...props
}) => {
  return (
    <>
      <div
        className={`${Styles.colorCard} 
            ${position === "left" ? "left" : ""} 
            ${colorCardVariant === "primary" ? Styles.bgPrimary : ""}
            ${colorCardVariant === "primary" ? Styles.textWhite : ""}
            ${colorCardVariant === "success" ? Styles.bgSuccess : ""}
            ${colorCardVariant === "success" ? Styles.textWhite : ""}
            ${colorCardVariant === "danger" ? Styles.bgDanger : ""}
            ${colorCardVariant === "danger" ? Styles.textWhite : ""}`}
        {...props}
      >
        <div className={Styles.cardHeader}>{colorCardHeading}</div>
        <div className={Styles.cardBody}>
          <h5 className={Styles.cardTitle}>{colorCardHeading}</h5>
          <p className={Styles.cardText}>{colorCardText}</p>
        </div>
      </div>
    </>
  );
};

export default ColorCard;