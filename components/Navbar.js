import Head from 'next/head';

export default function Navbar() {
  const handleClick = (evt, id) => {
    evt.preventDefault();
    const yOffset = -70;
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous" />
        <script
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossOrigin="anonymous"></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
          integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
          crossOrigin="anonymous"></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
          integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
          crossOrigin="anonymous"></script>
      </Head>
      <main>
        <nav className="navbar fixed-top navbar-expand-lg">
          <a
            className="navbar-brand"
            onClick={(evt) => handleClick(evt, "about")}
          >
            Bryant Vaughn
          </a>
          <div className="nav-items" id="nav-items">
            <a
              onClick={(evt) => handleClick(evt, "resume")}
            >
              Resume
            </a>
            <a
              onClick={(evt) => handleClick(evt, "experience")}
            >
              Experience
            </a>
            <a
              onClick={(evt) => handleClick(evt, "contact")}
            >
              Contact
            </a>
          </div>
        </nav>
      </main>
      <style jsx>{`
        @media only screen and (max-width: 1200px) {
          .navbar {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .navbar-brand { margin: auto; }
          .nav-items a {
            padding: 0 1rem;
          }
        }
        @media only screen and (min-width: 1200px) {
          .navbar {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 1rem 20rem;
          }
          .nav-items {
            display: flex;
            justify-content: flex-end;
          }
          .nav-items a {
            margin-left: 3rem;
          }
        }
        @media only screen and (min-width: 1600px) {
          .navbar { padding: 1rem 30rem; }
        }
        @media only screen and (min-width: 2200px) {
          .navbar { padding: 1rem 35rem; }
        }
        .navbar {
          background-color: rgb(0,0,0);
          width: 100%;
        }
        .navbar a {
          color: #fff;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.15rem;
          cursor: pointer;
        }

        .nav-items a {
          font-size: 14px;
          font-weight: 500;
          transition: 0.2s ease-in;
        }
        .nav-items a:hover {
          color: rgba(255,255,255,0.6);
        }
      `}</style>
    </>
  );
}