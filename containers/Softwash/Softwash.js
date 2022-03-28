import Image from "next/image";
import Title from "../../components/Title/Title";
import Subtitle from "../../components/Subtitle/Subtitle";
import Description from "../../components/Description/Description";
import LinkButton from "../../components/LinkButton/LinkButton";

import styles from "./Softwash.module.css";

function Softwash() {
  return (
    <section className={styles.softwash}>
      <div className={styles.softwash__image}>
        <Image src='/assets/images/bg_softwash.webp' alt='delikatne pranie - softwash' width={960} height={700} />
      </div>
      <div className={styles.softwash__content}>
        <Subtitle content='Technologia SoftWash' />
        <Title content='Witaj w Twojej przyszłej pralni' classes='title_maxWidth_640' />
        <Description
          classes='description_18 description_maxWidth_760 '
          content=' Na całym świecie normy środowiskowe są coraz bardziej rygorystyczne i coraz więcej ludzi staje się
        świadomych ekologicznie. Tendencja ta ma również zastosowanie w branży pralniczej i pralni chemicznej.'
        />
        <Description classes='description_18 description_maxWidth_760 '>
          <span>
            Technologia <strong>Soft Wash</strong> pozwala wykorzystać ten trend. <strong>Soft Wash</strong> to pakiet szyty na miarę, który umożliwia wyczyszczenie nawet najdelikatniejszej bielizny. Tworzy nowe możliwości w segmentach rynku, takich jak pralnie chemiczne, domy opieki, usługi
            ratunkowe itp.
          </span>
        </Description>
        <LinkButton label='Poznaj szczegóły' to='/softwash' />
      </div>
    </section>
  );
}

export default Softwash;
