import Link from "next/link";
import styles from "./Linkbutton.module.css";
import { classesNames } from "../../lib";
import React from "react";

function LinkButton({ label, to, classes, children }) {
  const classString = classesNames(classes, "linkButton")(styles);

  return (
    <Link href={to}>
      <a className={classString}>
        <span className={styles.linkButton__label}>{label}</span>
        {children ? <span className={styles.linkButton__sublabel}>{children}</span> : null}
      </a>
    </Link>
  );
}
LinkButton.defaultProps = {
  label: "label",
  sublabel: "sublabel",
  to: "/",
  classes: "",
};

export default LinkButton;
