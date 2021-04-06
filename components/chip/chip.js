import Styles from "./chip.module.scss";

const Chip = ({ children, variant = "" }) => {
  return (
    <>
      {children ? (
        <div
          className={`
          ${Styles.chip} 
          ${variant === "Borderd" ? Styles.chipBorderd : ""}
          ${variant === "blue" ? Styles.chipBlue : ""}
          ${variant === "full-time" ? Styles.chipBlue : ""}
          ${variant === "part-time" ? Styles.chipOrange : ""}`}
        >
          {children}
        </div>
      ) : null}
    </>
  );
};

export default Chip;
