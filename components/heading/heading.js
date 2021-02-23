import { createElement } from "react"
import styles from "./heading.module.scss"
import classNames from "classnames/bind"
const Heading = ({ 
    children, 
    variant,
    userDesignation,
    className
}) => {
const cn = classNames.bind(styles)
  return createElement (variant, {className: cn(className) }, children)
}

export default Heading
