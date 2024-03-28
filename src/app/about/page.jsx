import styles from '../page.module.css';

function About() {
  return (
    <div className="container">
      <div className={styles.about_page}>
        <div className={styles.we_title}>
          <h1>We love</h1>
          <div>Comfy</div>
        </div>
        <div className={styles.text}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
            quae quam blanditiis vitae, dolor non eveniet ipsum voluptatibus,
            quia optio aut! Perferendis ipsa cumque ipsam nostrum reprehenderit
            ad illo sed officiis ea tempore! Similique eos minima sit porro,
            ratione aspernatur!
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
