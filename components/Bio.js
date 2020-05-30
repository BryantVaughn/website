import img from '../public/img/profile.jpg';

export default function Bio() {
  return (
    <div className="content">
      <h2 className="title">Bryant Vaughn</h2>
      <img className="image" src={img} />
      <h5 className="sub-text">Front-end Developer</h5>
      <h6>Denver, CO</h6>

      <style jsx>{`
        .content {
          height: 100vh;
          display: block;
          text-align: center;
          padding-top: 10%;
          text-transform: uppercase;
          letter-spacing: 0.15rem;
          color: #fff;
        }
        .content h6 {
          font-weight: 100;
        }

        .title {
          margin-top: 1rem;
        }

        .sub-text {
          margin: 0.5rem;
        }

        .image {
          border-radius: 50%;
          height: 260px;
          width: 260px;
          box-shadow: 0 0 40px rgba(255,255,255,0.7);
          margin: 2.5rem;
        }
    `}</style>
    </div>
  );
}