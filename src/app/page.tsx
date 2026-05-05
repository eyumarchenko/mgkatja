import styles from "./page.module.css";
import About from "@/components/About/About";

const experience = [
  {
    date: "2022 — present",
    role: "Software Developer",
    org: "Posti, Finland",
    tags: ["TypeScript", "React", "HTML&CSS", "JavaScript"],
    desc: "Solo developer for Posti’s design system, used by multiple teams across countries for both customer-facing and internal products. I build and maintain reusable React components, co-owned the migration to a more scalable architecture, and translate Figma patterns into polished, accessible UI. My work helps teams ship faster while keeping interfaces consistent, responsive, WCAG-aware, and aligned with Posti’s evolving brand.",
  },
  {
    date: "2020 — 2022",
    role: "Research & Teaching Assistant",
    org: "Aalto University, Finland",
    tags: ["Python", "Docker", "TypeScript", "React", "HTML&CSS", "JavaScript"],
    desc: "Worked in a cross-functional research team on design-engineering projects focused on accessibility, usability, and color systems. I developed full-stack tools that helped designers evaluate Figma layouts against accessibility guidelines, and contributed to applied research with industry partners including Huawei. Alongside research work, I supported students and users through lectures, workshops, and one-on-one guidance, and co-authored peer-reviewed publications on accessible interaction design.",
  },
  {
    date: "2017 — 2020",
    role: "Teaching Assistant & Junior Researcher",
    org: "National Research University Higher School of Economics, Russia",
    tags: ["R Language", "Python"],
    desc: "Supported students as a teaching assistant and junior researcher, helping them understand course material through seminars, consultations, and practical assignments. Contributed to course development by preparing learning materials and improving class structure, while also supporting research projects through data analysis, literature review, and academic reporting.",
  },
];

const projects = [
  {
    title: "Posti Design System",
    desc: "A React component library helping teams across Posti ship consistent, accessible, brand-aligned interfaces faster.",
    tags: ["TypeScript", "React", "HTML&CSS"],
    href: "https://designsystem.posti.fi/?path=/docs/posti-design-system-introduction--documentation",
    linkLabel: "Check it out",
  },
  {
    title: "Mura Journal",
    desc: "A digital personal diary with emotional tracking features.",
    tags: ["Fullstack", "TypeScript", "React Native", "...and more"],
    href: "https://apps.apple.com/ca/app/mura-journal/id6749691074",
    linkLabel: "App Store",
  },
  {
    title: "Lilkus",
    desc: "A fun and interactive app that translates cat sounds into human language.",
    tags: ["Fullstack", "TypeScript", "React Native", "...and more"],
    href: "https://apps.apple.com/ca/app/lilkus-cat-translator-games/id6751162564",
    linkLabel: "App Store",
  },
  {
    title: "Design",
    desc: "For fun I do small silly art projects.",
    tags: ["Adobe Photoshop"],
    href: "https://drive.google.com/drive/folders/1S98B30IZunCdLI6opk3VukEnl030XCIp?usp=sharing",
    linkLabel: "Check it out",
  },
];

const publications = [
    {
    title: "Storybook: A Practical Guide to Your Design System",
    venue: "HelsinkiJS, 2026",
    abstract:
      "This presentation shows how Storybook can move beyond being just plain documentation and become a hands-on guide.",
    links: [
      { label: "Slides", href: "https://canva.link/i9c8gmsxpxokf8q" },
      { label: "Cheatsheet", href: "https://canva.link/4fm6h1megcew0aj" },
    ],
  },
  {
    title: "CoColor: Interactive exploration of color designs",
    venue: "Proceedings of the 28th International Conference on Intelligent User Interfaces, 2023",
    abstract:
      "An intelligent Figma-based color design tool that helps designers explore, assign, and refine colors while considering harmony, saliency, and accessibility.",
    links: [
      { label: "PDF", href: "https://dl.acm.org/doi/pdf/10.1145/3581641.3584089" },
    ],
  },
  {
    title: "Designing Harmonic Colour Schemes for Visual Components",
    venue: "Master Thesis, 2022",
    abstract:
      "A designer-controlled recolouring tool for posters and UI layouts, created in collaboration with Huawei, that generates harmonious color schemes from product imagery while preserving the original visual direction.",
    links: [
      { label: "PDF", href: "https://aaltodoc.aalto.fi/bitstreams/b544e77d-28ec-4577-befa-9912e88d56fd/download" },
    ],
  },
  {
    title: "Personal Brands of ESports Athletes: An Exploration of Evaluation Mechanisms",
    venue: "Higher School of Economics Research Paper No. WP BRP, 2019",
    abstract:
      "A computational research project analyzing how esports organizations and athletes are discussed, compared, and valued by spectators across platforms like Twitch and Reddit.",
    links: [{ label: "PDF", href: "https://papers.ssrn.com/sol3/Delivery.cfm?abstractid=3501522" }],
  },
  {
    title: "Media metrics in eSports: the case of dota 2",
    venue: "Extended Abstracts of the Annual Symposium on Computer-Human Interaction in Play Companion Extended Abstracts, 2019",
    abstract:
      "A computational research project exploring how spectators’ discussions shape the brand value of esports players and teams, including topic patterns, transfer effects, and the relationship between personal and team brands.",
    links: [{ label: "PDF", href: "https://dl.acm.org/doi/pdf/10.1145/3341215.3356304" }],
  },
  {
    title: "Analysis of players transfers in esports. The case of dota 2",
    venue: "Proceedings of the 22nd international academic mindtrek conference, 2018",
    abstract:
      "A mixed-methods research project analyzing Dota 2 player transfers through social network analysis and machine learning, revealing patterns in regional homophily, player mobility, team composition, and role-based transfer dynamics.",
    links: [{ label: "PDF", href: "https://dl.acm.org/doi/pdf/10.1145/3275116.3275151" }],
  },
  {
    title: "Network Analysis of Players Transfers in eSports: The Case of Dota 2",
    venue: "International Conference on Digital Transformation and Global Society, 2018",
    abstract:
      "A network analysis project mapping Dota 2 player transfers between professional teams, revealing how regional structures, team performance, and mobility patterns shape the esports transfer market.",
    links: [{ label: "PDF", href: "https://publications.hse.ru/pubs/share/direct/229205008.pdf" }],
  },
];

export default function Home() {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <span className={styles.navName}>Katja Marchenko</span>
          <ul className={styles.navLinks}>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#publications">Publications</a></li>
          </ul>
        </div>
      </nav>

      <div className={styles.page}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1 className={styles.heroName}>Katja Marchenko</h1>
            <p className={styles.heroTitle}>Senior Software Developer — Design Systems & Accessibility</p>
            <p className={styles.heroBio}>
              I&apos;m a frontend developer focused on accessible design systems, thoughtful UI details, and building interfaces that feel clear, reliable, and easy to use.
            </p>
            <div className={styles.heroLinks}>
              <a className={styles.heroLink} href="mailto:eyumarchenko@gmail.com">Email</a>
              <a className={styles.heroLink} href="https://github.com/eyumarchenko" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a className={styles.heroLink} href="https://www.linkedin.com/in/eyumarch/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a className={styles.heroLink} href="https://canva.link/pdqzv9p268q5n0z" target="_blank" rel="noopener noreferrer">CV</a>
            </div>
          </div>
        </section>

        <About />

        {/* Experience */}
        <section id="experience" className={styles.section}>
          <div className={styles.container}>
            <p className={styles.sectionLabel}>Experience</p>
            <div className={styles.expList}>
              {experience.map((item) => (
                <div key={item.role + item.org} className={styles.expItem}>
                  <span className={styles.expDate}>{item.date}</span>
                  <div>
                    <p className={styles.expRole}>{item.role}</p>
                    <p className={styles.expOrg}>{item.org}</p>
                    <p className={styles.expDesc}>{item.desc}</p>
                    <div className={styles.projectTags}>
                    {item.tags?.map((t) => (
                      <span key={t} className={styles.tag}>{t}</span>
                    ))}
                  </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className={styles.section}>
          <div className={styles.container}>
            <p className={styles.sectionLabel}>Projects</p>
            <div className={styles.projectGrid}>
              {projects.map((p) => (
                <div key={p.title} className={styles.projectCard}>
                  <p className={styles.projectTitle}>{p.title}</p>
                  <p className={styles.projectDesc}>{p.desc}</p>
                  <div className={styles.projectTags}>
                    {p.tags.map((t) => (
                      <span key={t} className={styles.tag}>{t}</span>
                    ))}
                  </div>
                  <a className={styles.projectLink} href={p.href} target="_blank" rel="noopener noreferrer">
                    {p.linkLabel} →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Publications */}
        <section id="publications" className={styles.section}>
          <div className={styles.container}>
            <p className={styles.sectionLabel}>Publications & Talks</p>
            <div className={styles.pubList}>
              {publications.map((pub) => (
                <div key={pub.title} className={styles.pubItem}>
                  <p className={styles.pubTitle}>{pub.title}</p>
                  <p className={styles.pubVenue}>{pub.venue}</p>
                  <p className={styles.pubAbstract}>{pub.abstract}</p>
                  <div className={styles.pubLinks}>
                    {pub.links.map((l) => (
                      <a key={l.label} className={styles.pubLink} href={l.href} target="_blank" rel="noopener noreferrer">
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.container}>
            <p className={styles.footerInner}>
              © {new Date().getFullYear()} Katja Marchenko
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
