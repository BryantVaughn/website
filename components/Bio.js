import img from '../public/img/profile.jpg';

export default function Bio() {
	return (
		<div className="content">
			<h2 className="title">Bryant Vaughn</h2>
			<img className="image" src={img} />
			<h5 className="sub-text">Software Developer</h5>
			<h6>Denver, CO</h6>

			<style jsx>{`
				@media only screen and (max-width: 480px) {
					.content {
						padding-top: 40%;
					}
				}
				@media only screen and (min-width: 480px) {
					.content {
						padding-top: 25%;
					}
				}
				@media only screen and (min-width: 1200px) {
					.content {
						padding-top: 15%;
					}
				}
				@media only screen and (min-width: 1400px) {
					.content {
						padding-top: 10%;
					}
				}
				.content {
					height: 100%;
					display: block;
					text-align: center;
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
					box-shadow: 0 0 40px rgba(255, 255, 255, 0.7);
					margin: 2.5rem;
				}
			`}</style>
		</div>
	);
}
