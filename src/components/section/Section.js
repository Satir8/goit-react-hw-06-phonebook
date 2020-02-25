import React from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./Section.module.css";
import "./sectionTransition.css";

const Section = ({ title, children, isVisible }) => (
  <>
    <CSSTransition in={isVisible} timeout={500} classNames="headingTitle">
      {state => <h1 className={styles.heading}>{title}</h1>}
    </CSSTransition>

    {children}
  </>
);

export default Section;
