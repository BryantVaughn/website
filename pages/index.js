import Head from 'next/head';
import Bio from '../components/Bio';
import img from '../public/img/denver.jpg';

export default function Home() {
  return (
    <>
      <Head>
        <title>Bryant Vaughn</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossorigin="anonymous"></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
          integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
          crossorigin="anonymous"></script>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"
        />
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
          integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
          crossorigin="anonymous"></script>

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
          height: 50px;
          margin: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-transform: uppercase;
          letter-spacing: 0.15rem;
          background-color: transparent;
        }
        .nav-container a {
          text-decoration: none;
          color: #fff;
        }

        #toggle {
          color: #fff;
        }

        .nav-items {
          display: flex;
          width: 40%;
          justify-content: space-between;
        }
        .nav-items a {
          text-decoration: none;
          color: rgba(255,255,255,1.0);
          transition: 0.3s ease-in-out;
          font-size: small;
          font-weight: 300;
        }
        .nav-items a:hover {
          color: rgba(255,255,255,0.6);
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
