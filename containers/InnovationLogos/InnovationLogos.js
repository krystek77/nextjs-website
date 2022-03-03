import Link from "next/link";
import Image from "next/image";
import styles from "./InnovationLogos.module.css";

const innovationLogosData = [
  { id: 1, name: "autodry" },
  { id: 2, name: "cascadedrum" },
  { id: 3, name: "easysoap" },
  { id: 4, name: "eco4" },
  { id: 5, name: "itrace" },
  { id: 6, name: "optiload" },
  { id: 7, name: "powerwash" },
  { id: 8, name: "radax" },
  { id: 9, name: "safetech" },
  { id: 10, name: "sensodry" },
  { id: 11, name: "sensospeed" },
  { id: 12, name: "supereco" },
  { id: 13, name: "ultrabalance" },
  { id: 14, name: "xcontrolflex" },
  { id: 15, name: "xcontrolflexplus" },
];

function InnovationLogos() {
  return (
    <section className={styles.innovationLogos}>
      <div className={styles.innovationLogos__container}>
        <div className={styles.innovationLogos__items}>
          {innovationLogosData.map((item) => (
            <Link key={item.id} href='/technologie-pralnicze'>
              <a className={styles.innovationLogos__item}>
                <Image src={`/assets/images/tech_logos/${item.name}.png`} alt={item.name} width='100' height=' 50' />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
export default InnovationLogos;
