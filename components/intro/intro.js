import styles from "./intro.module.scss"

const Intro = ({
    children
}) => {
  return (
    <h1 className={styles.title}>
        {children}
    </h1>
  )
}

export default Intro