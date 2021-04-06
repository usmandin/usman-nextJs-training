import Styles from "./jobDiscription.module.scss";

const JobDiscription = ({ children }) => {
  return <>{children ? <p className={`${Styles.jobDiscription} ${"text-center"} `}>{children}</p> : null}</>;
};

export default JobDiscription;
