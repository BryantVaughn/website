import reactColorsImg from '../img/reactColors.png';
import groceryListImg from '../img/groceryList.png';
import dadJokesImg from '../img/dadJokes.png';
import lightsOutImg from '../img/lightsOut.png';
import diceGameImg from '../img/diceGame.png';
import demoSiteImg from '../img/demoSite.png';

export default [
	{
		title: 'React Colors',
		description:
			'This is a clone of websites like Material UI Colors and Flat UI Colors using React. The app comes with nine pre-built palettes that can be deleted. It also allows you to create and save your own color palettes using the local storage with the browser. This site is optimized to work on both desktop monitors and mobile sized screens.',
		image: `${reactColorsImg}`,
		githubUrl: 'https://github.com/BryantVaughn/color-palette',
		url: 'https://color-palette.bryantvaughn.now.sh/',
		id: 1
	},
	{
		title: 'Grocery List',
		description:
			"This is a simple grocery list app that I built to practice with React hooks for state management. I designed this app mostly for mobile browsers so it's usable when at the store. It utilizes browser storage so you can make your list beforehand then access it when shopping.",
		image: `${groceryListImg}`,
		githubUrl: 'https://github.com/BryantVaughn/grocery-list',
		url: 'https://grocery-list.bryantvaughn.now.sh/',
		id: 2
	},
	{
		title: 'Chee-Z-Jokes',
		description:
			'This is a fun joke app that I built to practice with CSS animations and React. It utilizes a dad jokes API to retrieve jokes and populate the list. Up and down voting jokes will change the emoji. My favorite feature is the laughing animation when hovering over the large emoji. This app is currently built for larger screens.',
		image: `${dadJokesImg}`,
		githubUrl: 'https://github.com/BryantVaughn/CheeZjokes',
		url: 'https://chee-z-jokes.bryantvaughn.now.sh/',
		id: 3
	},
	{
		title: 'Lights Out',
		description:
			'A fun game based on the popular hand-held tech game of the 90s, Lights Out. The goal of the game is to turn all lights out on the board. To turn lights out you simply need to click on them, but be careful, the lights to the top, bottom, left, and right will change too!',
		image: `${lightsOutImg}`,
		githubUrl: 'https://github.com/BryantVaughn/lights-out',
		url: 'https://lights-out.bryantvaughn.now.sh/',
		id: 4
	},
	{
		title: 'Dice Game',
		description:
			"A dice game that is based off the popular game Yahtzee! This was built using React and is currently optimized for larger desktop and laptop screens. You're given three rolls per turn and the goal is to accumulate as many points as possible.",
		image: `${diceGameImg}`,
		githubUrl: 'https://github.com/BryantVaughn/yahtzee',
		url: 'https://dice.bryantvaughn.now.sh/',
		id: 5
	},
	{
		title: 'Demo Site',
		description:
			"This is a landing page I built for a fake Mountain Travel company to practice with CSS features such as flexbox. It is responsive and adjusts based on the screen size it's being viewed on.",
		image: `${demoSiteImg}`,
		githubUrl: 'https://github.com/BryantVaughn/DemoSite',
		url: 'https://demo-site.bryantvaughn.now.sh/',
		id: 6
	}
];
