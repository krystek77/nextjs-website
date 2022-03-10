import Image from 'next/image';
import Title from '../../components/Title/Title';
import Subtitle from '../../components/Subtitle/Subtitle';
import Description from '../../components/Description/Description';

import styles from './FXDesign.module.css';

const designData = [
  {
    title: 'Innowacyjny i przyjazny użytkownikowi panel sterowania',
    image: 'design_panel_fx',
    description:
      "The control panel is inclined to make the operator's work more ergonomic. Options in the menu scroll up and down, making it easier for any customer to understand and use them. Our display provides clear guidance to users. For instance, it shows which soap hopper compartment to use.",
  },
  {
    title: 'Swobodnie programowalny sterownik',
    image: 'design_xcontrol',
    description:
      'Our XControl Plus control offers virtually unlimited programming possibilities for laundry professionals, while a USB plug makes for fast and easy uploading of new wash programmes and new firmware for control.',
  },
  {
    title: 'Duża średnica okna dla łatwego wyładunku',
    image: 'design_uchwyt',
    description:
      'At Primus, we know that the diameter of the door means speed, when it comes to loading and unloading. With that in mind, we calculated the maximum diameter possible for each model, while also making sure the door opens 180 degrees.',
  },
  {
    title: 'Łatwo dostępny pojemnik na środki piorące',
    image: 'design_pojemnik',
    description:
      'The soapbox offers four compartments, suitable for powder or liquid soap. For additional ease-of-use, the compartments are now located at the front of the lid and next to each other. To make things easier for the owner, all compartments have been designed to allow easy access during service. The compartments can be covered (covers are optional) to prevent customers from making mistakes.',
  },
];
function FXDesign() {
  return (
    <section className={styles.FXDesign}>
      <div className={styles.FXDesign__container}>
        <Subtitle content="Komfort obsługi" />
        <Title content="Wyjątkowy design i ergonomia" variant="h2" />
        <Description classes="description_18 description_mb_4">
          Style is a strong part of Primus DNA . The FX Line has been designed
          with elegance and ergonomics in mind, so owners and operators can get
          the most out of sleek and extremely functional equipment.
        </Description>
        {designData.length ? (
          <div className={styles.FXDesign__content}>
            {designData.map((item, index) => (
              <article key={index} className={styles.FXDesign__card}>
                <aside className={styles.FXDesign__cardImage}>
                  <Image
                    src={`/assets/images/details/${item.image}.webp`}
                    alt={item.image}
                    width="200px"
                    height="200px"
                  />
                </aside>
                <div className={styles.FXDesign__cardContent}>
                  <Title content={item.title} variant="h3" />
                  <Description classes="description_18">
                    {item.description}
                  </Description>
                </div>
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
export default FXDesign;
