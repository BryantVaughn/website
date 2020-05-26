import Head from 'next/head';

export default function Navbar() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossorigin="anonymous" />
        <script
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossorigin="anonymous"></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
          integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
          crossorigin="anonymous"></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
          integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
          crossorigin="anonymous"></script>
      </Head>
      <main>
        <nav className="navbar fixed-top navbar-expand-lg">
          <a className="navbar-brand" href="#about">Bryant Vaughn</a>
          <div className="collapse navbar-collapse" id="nav-items">
            <div className="navbar-nav">
              <a href="#resume">Resume</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </nav>
      </main>
      <style jsx>{`
        @media only screen and (max-width: 1200px) {
          .navbar { padding: 1rem 2rem; }
        }
        @media only screen and (min-width: 1200px) {
          .navbar { padding: 1rem 20rem; }
        }
        @media only screen and (min-width: 1600px) {
          .navbar { padding: 1rem 30rem; }
        }
        @media only screen and (min-width: 2200px) {
          .navbar { padding: 1rem 40rem; }
        }
        .navbar {
          background-color: #000;
          width: 100%;
          display: flex;
          justify-content: space-between;
        }
        .navbar a {
          color: #fff;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.15rem;
        }

        #nav-items {
          display: flex;
          justify-content: flex-end;
        }

        .navbar-nav a {
          font-size: 14px;
          font-weight: 500;
          margin-left: 3rem;
          transition: 0.3s ease-in-out;
        }
        .navbar-nav a:hover {
          color: rgba(255,255,255,0.6);
        }
      `}</style>
    </>
  );
}