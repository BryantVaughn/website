import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title}>Contact</h3>
        <p>Drop me an email or check out my online profiles</p>
        <a
          className={styles.email}
          href="mailto:bf_vaughn@hotmail.com"
          target="_blank"
        >
          bf_vaughn@hotmail.com
        </a>
        <section className={styles.icons}>
          <a
            href="https://www.linkedin.com/in/bryant-vaughn-818950142/"
            target="_blank"
          >
            <LinkedInIcon
              style={{ fontSize: 40 }}
            />
          </a>
          <a
            href="https://github.com/BryantVaughn"
            target="_blank"
          >
            <GitHubIcon
              style={{ fontSize: 40 }}
            />
          </a>
          <a
            href="https://www.instagram.com/bf_vaughn/"
            target="_blank"
          >
            <InstagramIcon
              style={{ fontSize: 40 }}
            />
          </a>
          <a
            href="https://www.facebook.com/bryant.vaughn/"
            target="_blank"
          >
            <FacebookIcon
              style={{ fontSize: 40 }}
            />
          </a>
        </section>
        <p className={styles.website}>This website designed and developed by Bryant Vaughn: 
          <a href="https://github.com/BryantVaughn/website" target="_blank"> View it on Github</a>
        </p>
        <p>&copy; Bryant Vaughn 2020</p>
      </div>
    </div>
  );
}