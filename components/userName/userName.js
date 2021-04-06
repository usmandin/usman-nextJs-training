import Styles from "./userName.module.scss";
import { BsBuilding } from "react-icons/bs";
const UserName = ({ children }) => {
  return (
    <>
      {children ? (
        <div className={`${Styles.userNameWrapper} ${"d-flex align-items-center justify-content-center"}`}>
          <BsBuilding size="12" />
          <span>{children}</span>
        </div>
      ) : null}
    </>
  );
};

export default UserName;
