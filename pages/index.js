import Head from 'next/head';
import Navbar from '../components/Navbar';
import Bio from '../components/Bio';
import Resume from '../components/Resume';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import denverImg from '../public/img/denver.jpg';
import resumeImg from '../public/img/resumeImg.jpg';

export default function Home() {

  return (
    <>
      <Head>
        <title>Bryant Vaughn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="about" id="about">
          <Navbar />
          <Bio />
          <div className="button">
            
          </div>
        </div>
        <div className="resume" id="resume">
          <Resume />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div className="contact" id="contact">
          <Contact />
        </div>
      </main>

      <style jsx>{`
        .title {
          font-size: 22px;
        }

        .about {
          background-image: url(${denverImg});
          height: 100vh;
          width: 100%;
          background-repeat: no-repeat;
          background-size: cover;
        }

        .resume {
          background-image: url(${resumeImg});
          height: 50vh;
          width: 100%;
          background-repeat: no-repeat;
          background-size: cover;
          background-attachment: fixed;
          z-index: -10;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
      `}</style>
    </>
  );
}
