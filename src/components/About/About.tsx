import Image from "next/image";
import styles from "./About.module.css";

const photos = [
  { src: "/about/me.jpeg", alt: "Katja" },
  { src: "/about/keskus.jpeg", alt: "Keskus" },
  { src: "/about/lilith.jpeg", alt: "Lilith" },
  { src: "/about/makima.jpeg", alt: "Makima" },
  { src: "/about/cats.jpeg", alt: "cats" },
];

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <p className={styles.sectionLabel}>About</p>
        <div className={styles.inner}>
          <div className={styles.text}>
            <p className={styles.bio}>
              Hi! I&apos;m Katja — a frontend developer based in Finland,
              specialising in design systems and accessibility. I care about
              the small details that make interfaces feel right.
            </p>
            <p className={styles.bio}>
              Outside of work I hang out with my cats (Keskus, Lilith, and Makima), read too many
              books, and occasionally make things just to see if I can. I also speak 4 languages:
              English, Russian, Finnish, and Chinese, and I cannot decide which one is my favorite. 
              If I&apos;m not at home, you can probably find me at a K-Pop concert or playing Dota 2.              
            </p>
          </div>

          <div className={styles.grid}>
            {photos.map((photo, i) => (
              <div key={i} className={styles.photoWrap}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 600px) 40vw, 180px"
                  className={styles.photo}
                />
                <span className={styles.photoPlaceholder}>{photo.alt}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
