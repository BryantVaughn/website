import Head from 'next/head';
import Bio from '../components/Bio';
import img from '../public/img/campnou.jpg';

export default function Home() {
  return (
    <>
      <Head>
        <title>Bryant Vaughn</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous" />
      </Head>

      <main>
        <nav className="navbar fixed-top">
          <div className="nav-container">
            <a className="navbar-brand" href="#about">Bryant Vaughn</a>
            <div className="nav-items">
              <a className="nav-item nav-link" href="#resume">Resume</a>
              <a className="nav-item nav-link" href="#projects">Projects</a>
              <a className="nav-item nav-link" href="#contact">Contact</a>
            </div>
          </div>
        </nav>
        <div className="about">
          <Bio />

        </div>
        <div id="section-two"></div>
        <div id="section-three"></div>
        <div id="section-four"></div>
      </main>

      <style jsx>{`
        .nav-container {
          width: 50%;
          height: 25px;
          margin: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-transform: uppercase;
          letter-spacing: 0.1rem;
          background-color: transparent;
        }
        .nav-container a {
          text-decoration: none;
          color: #fff;
        }

        .nav-items {
          display: flex;
          width: 50%;
          justify-content: space-between;
        }
        .nav-items a {
          text-decoration: none;
          color: rgba(255,255,255,0.6);
          transition: 0.3s ease-in-out;
        }
        .nav-items a:hover {
          color: rgba(219,133,21,1.0);
        }

        .page-content {
          margin-top: 25px;
        }

        .about {
          background-image: url(${img});
          height: 100vh;
          width: 100%;
          background-repeat: no-repeat;
          background-size: cover;
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
