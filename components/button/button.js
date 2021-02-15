import styles from "./button.module.scss"

const Button = ({
  children,
  variant = "",
  className = "btn",
  icon = "",
  type = "button",
  size = "",
  position = "left",
  block = false,
  ...props
}) => {
  return (
    <button
      className={
        `${className} 
        ${styles.btn} 
        ${variant === "primaryBtn" ? styles.primaryBtn : ""}
        ${variant === "secondaryBtn" ? styles.secondaryBtn : ""}`.trim()
      }
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button