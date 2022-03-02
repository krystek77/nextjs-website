import Link from "next/link";
import Image from "next/image";

import Label from "../Label/Label";
import Button from "../Button/Button";
import List from "../List/List";
import styles from "./ProductCard.module.css";

function ProductCard({ parent, label, path, image, list }) {
  return (
    <Link href={`${parent}${path}`}>
      <a className={styles.productCard}>
        <Label label={label} classes='label_top_right_vertical' />
        <Image src={`/assets/images/${image}`} alt={label} width='260' height='350' />
        <div className={styles.productCard__overlay}>
          <Label label={label} classes='label_top_right_vertical' />
          <List items={list} classes='list_light' />
          <Button label='Dowiedz się więcej' />
        </div>
      </a>
    </Link>
  );
}
export default ProductCard;
