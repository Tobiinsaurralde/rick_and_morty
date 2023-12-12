import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.flipCard}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          <h3>App created by:</h3>
          <h1>Tobias Agustin Insaurralde</h1>
        </div>
        <div className={styles.flipCardBack}>
          <div className={styles.Description}>
            <p className={styles.Description}>
              Hi, I am a Full-Stack student at SoyHenry academy.
              I specialize in technologies such as JavaScript, React, Redux, CSS, HTML Express, and Node.js,
            </p>
            <div className={styles.socialbar}>
              <div>
                <a
                  className={styles.icon}
                  id="linkedin"
                  href="https://www.linkedin.com/in/tobias-insaurralde-229168297/"
                  target="_blank"
                >
                  <svg
                    viewBox="0 0 16 16"
                    className="bi bi-linkedin"
                    fill="currentColor"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M.5 0A.5.5 0 0 0 0 .5v15a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5H.5zM5 14H2V6h3v8zm-.5-9.25a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5zM14 14h-3v-4.68c0-1.19-.94-2.32-2.14-2.32-1.06 0-1.86.73-2.14 1.43h-.03V6H6v8H9v-4.47c0-.78.15-1.53 1.17-1.53.82 0 1.82.53 1.82 1.53V14z" />
                  </svg>
                </a>

                <a
                  className={styles.icon}
                  id="github"
                  href="https://github.com/Tobiinsaurralde"
                  target="_blank"
                >
                  <svg
                    viewBox="0 0 16 16"
                    class="bi bi-github"
                    fill="currentColor"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default About;