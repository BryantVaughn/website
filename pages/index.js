import Head from 'next/head';
import Bio from '../components/Bio';
import img from '../public/img/denver.jpg';

export default function Home() {
  return (
    <>
      <Head>
        <title>Bryant Vaughn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="nav">

        </div>
        <div className="about">
          <Bio />
          
        </div>
        <div id="section-two"></div>
        <div id="section-three"></div>
        <div id="section-four"></div>
      </main>

      <style jsx>{`
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
