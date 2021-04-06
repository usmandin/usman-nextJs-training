import Styles from "./rate.module.scss";

const Rate = ({ children }) => {
  return <>{children ? <div className={Styles.rate}>{children}</div> : null}</>;
};

export default Rate;
