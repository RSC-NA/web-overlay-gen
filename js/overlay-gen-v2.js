// event handlers
document.getElementById('tier-dropdown').addEventListener('change', loadTeams);
document.getElementById('tier-dropdown2').addEventListener('change', loadTeams);
document.getElementById('isPlayoffs').addEventListener('click', togglePlayoffs);
document.getElementById('league-select').addEventListener('change', changeLeague);
document.getElementById('toggleControls').addEventListener('click', togglePanel);

// render images buttons. this is done by class now as we have more than one
Array.from(document.getElementsByClassName('renderImagesButton')).forEach((el) => {
	el.addEventListener('click', generateGraphics);
});

// event handler to load images when team is selected
Array.from(document.getElementsByClassName('teamSelect')).forEach((el) => {
	el.addEventListener('change', lazyLoadLogos);
});

/**********************************************************************/
/**********************************************************************/
/********************* GLOBAL REFERENCES FOR EASE *********************/
/**********************************************************************/
/**********************************************************************/
// vars to swap between "2s mode" and the default (3s mode)
let isTwos = false;
let twosPath = '';

let gameOneTierSelect = document.getElementById('tier-dropdown');
let gameTwoTierSelect = document.getElementById('tier-dropdown2');

//const apiUrl = 'https://api.rscstream.com';
const apiUrl = 'https://devleague.rscstream.com';
const logoPath = './assets/logos/Active Logos';
const backgroundPath = './images';

// refs to image assets / logos / backgrounds
const scheduleBackground = document.getElementById('scheduleBackground');
const gameBackground     = document.getElementById('gameBackground');
const lineupBackground   = document.getElementById('lineupBackground');
const matchupBackground  = document.getElementById('matchupBackground');
const earlyBlueLogo      = document.getElementById('earlyBlueLogo');
const earlyOrangeLogo    = document.getElementById('earlyOrangeLogo');
const lateBlueLogo       = document.getElementById('lateBlueLogo');
const lateOrangeLogo     = document.getElementById('lateOrangeLogo');

// refs to canvases
const scheduleCanvas = document.getElementById('scheduleCanvas');

// early game
const earlyGameCanvas    = document.getElementById('earlyGameCanvas');
const earlyLineupCanvas  = document.getElementById('earlyLineupCanvas');
const earlyMatchupCanvas = document.getElementById('earlyMatchupCanvas');

// late game
const lateGameCanvas    = document.getElementById('lateGameCanvas');
const lateLineupCanvas  = document.getElementById('lateLineupCanvas');
const lateMatchupCanvas = document.getElementById('lateMatchupCanvas');

// global gameData object for all values and settings
let gamesData = {};

// global teams Data object for stats
let teamsData = {};

// counter of how many teams to load. when this reaches zero, 
// graphics generation will begin
let processingQueue = 0;
let renderAttempts  = 0;

/**********************************************************************/
/**********************************************************************/
/******************** GRAPHICS RENDERING FUNCTIONS ********************/
/**********************************************************************/
/**********************************************************************/

// generateGraphics() => null
// 		click handler for "Create Images" button.
//			1. loads team stats
//			2. generates the canvas overlays
//			3. refill your diet coke!
function generateGraphics() {
	document.getElementById('error').classList.add('hidden');

	// clear our gamesData object in case it was previously used
	gamesData = {};

	let earlyGame = false;
	let lateGame  = false;

	let games = 0;
	if ( gameOneTierSelect.selectedIndex > 0 ) {
		earlyGame = true;
		games++;
		processingQueue += 2;
	}
	if ( gameTwoTierSelect.selectedIndex > 0 ) {
		lateGame = true;
		games++;
		processingQueue += 2;
	}

	console.log(`Games to render: ${games}`);
	if ( games == 0 ) {
		document.getElementById('error').classList.remove('hidden');
		return console.error("You must select at least one game to render.");
	}

	if ( earlyGame ) {
		gamesData['early'] = processSelections(1);
		fetchPlayers(gamesData.early);
	}
	if ( lateGame ) {
		gamesData['late'] = processSelections(2);
		fetchPlayers(gamesData.late);
	}

	setTimeout(() => {
		beginRender();
	}, 200);
}

// renderImages() => null
//		renderImages() is the last call in the execution flow.
//		This function takes all the game data and renders it onto
//		the existing canvas elements
function renderImages() {
	renderSchedule();
	renderGames();
	renderLineups();
	renderMatchups();
}

// renderSchedule() -> null
//		renderSchedule() builds and renders the schedule image
function renderSchedule() {
	// local setup/config vars
	let tiers = {
		'early': '',
		'late': '',
	};

	let namePositions = {
		early: {
			blue:   { x: 685, y: 411 },
			orange: { x: 685, y: 475 },
		},
		late: {
			blue:   { x: 685, y: 753 },
			orange: { x: 685, y: 817 },
		},
	};

	let logoPositions = {
		early: {
			blue:   { sx: 0, sy: 29, sWidth: 212, sHeight: 156, dx: 1030, dy: 214, dWidth: 426, dHeight: 308 },
			orange: { sx: 0, sy: 29, sWidth: 212, sHeight: 156, dx: 1495, dy: 214, dWidth: 426, dHeight: 308 },
		},
		late: {
			blue:   { sx: 0, sy: 29, sWidth: 212, sHeight: 156, dx: 1030, dy: 561, dWidth: 426, dHeight: 308 },
			orange: { sx: 0, sy: 29, sWidth: 212, sHeight: 156, dx: 1495, dy: 561, dWidth: 426, dHeight: 308 },
		},
	};

	let ctx = scheduleCanvas.getContext('2d');
	ctx.drawImage(scheduleBackground, 0, 0, 1920, 1080);
	ctx.textAlign = 'left';

	// add vs. text
	ctx.fillText('vs', 685, 441); // early
	ctx.fillText('vs', 685, 783); // late

	// load team logos
	for ( let gameTime in gamesData ) {
		let game   = gamesData[ gameTime ];
		let blue   = game.blue;
		let orange = game.orange;

		tiers[ game.gameTime ] = game.tier;
		// set logos
		
		// add tier text with special styling
		if ( game.gameTime == 'early' ) {
			ctx.font = 'bold 35px Verdana';
			ctx.fillStyle = '#ffdb00';
			ctx.fillText(tiers['early'], 685, 268);
		} else {
			ctx.font = 'bold 35px Verdana';
			ctx.fillStyle = '#ffdb00';
			ctx.fillText(tiers['late'],  685, 607);
		}

		// default styling	
		ctx.font = '35px Verdana';
		ctx.fillStyle = '#f0f0f0';

		// add team names	
		let bluePos   = namePositions[ gameTime ].blue;
		let orangePos = namePositions[ gameTime ].orange;
		ctx.fillText(blue.team, bluePos.x, bluePos.y);	
		ctx.fillText(orange.team, orangePos.x, orangePos.y);	

		// set logos
		let blueLogo   = document.getElementById(`${game.gameTime}BlueLogo`);
		let orangeLogo = document.getElementById(`${game.gameTime}OrangeLogo`);
		// Intentionally removed. Logo loading is now handled dynamically
		// by lazyLoadLogos() event handler
		// blueLogo.src   = `${logoPath}${twosPath}/${blue.franchise}.png`;
		// orangeLogo.src = `${logoPath}${twosPath}/${orange.franchise}.png`;

		// WARNING: this has to be done in a setTimeout to prevent a race-condition
		// where the image hasn't been loaded yet before we try and draw it into 
		// the canvas
		/* WARNING WARNING WARNING. YOU MUST WAIT FOR THE IMAGES TO LOAD */
		/*
		let logoPositions = {
		early: {
			blue:   { sx: 0, sy: 29, sWidth: 212, sHeight: 156, dx: 1030, dy: 214, dWidth: 426, dHeight: 308 },
			orange: { sx: 0, sy: 29, sWidth: 212, sHeight: 156, dx: 1495, dy: 214, dWidth: 426, dHeight: 308 },
		},
		late: {
			blue:   { sx: 0, sy: 29, sWidth: 212, sHeight: 156, dx: 1030, dy: 561, dWidth: 426, dHeight: 308 },
			orange: { sx: 0, sy: 29, sWidth: 212, sHeight: 156, dx: 1495, dy: 561, dWidth: 426, dHeight: 308 },
		},
	};
		*/
		if ( gameTime == 'early' ) {
			logoPositions[ gameTime ].blue.dx = document.getElementById('dx1').value;
			logoPositions[ gameTime ].blue.dy = document.getElementById('dy1').value;
			logoPositions[ gameTime ].blue.dWidth = document.getElementById('dwidth1').value;
			logoPositions[ gameTime ].blue.dHeight = document.getElementById('dheight1').value;
			logoPositions[ gameTime ].orange.dx = document.getElementById('dx2').value;
			logoPositions[ gameTime ].orange.dy = document.getElementById('dy2').value;
			logoPositions[ gameTime ].orange.dWidth = document.getElementById('dwidth2').value;
			logoPositions[ gameTime ].orange.dHeight = document.getElementById('dheight2').value;
		} else {
			logoPositions[ gameTime ].blue.dx = document.getElementById('dx3').value;
			logoPositions[ gameTime ].blue.dy = document.getElementById('dy3').value;
			logoPositions[ gameTime ].blue.dWidth = document.getElementById('dwidth3').value;
			logoPositions[ gameTime ].blue.dHeight = document.getElementById('dheight3').value;
			logoPositions[ gameTime ].orange.dx = document.getElementById('dx4').value;
			logoPositions[ gameTime ].orange.dy = document.getElementById('dy4').value;
			logoPositions[ gameTime ].orange.dWidth = document.getElementById('dwidth4').value;
			logoPositions[ gameTime ].orange.dHeight = document.getElementById('dheight4').value;
		}
		setTimeout(() => {	
			drawLogo(ctx, blueLogo, logoPositions[ gameTime ].blue);
			drawLogo(ctx, orangeLogo, logoPositions[ gameTime ].orange);
		}, 100);
	}
}

// renderGames() -> null
//		renderGames() builds and renders the game images
function renderGames() {
	for ( let gameTime in gamesData ) {
		let ctx = document.getElementById(`${gameTime}GameCanvas`).getContext('2d');
		let blueLogo = document.getElementById(`${gameTime}BlueLogo`);
		let orangeLogo = document.getElementById(`${gameTime}OrangeLogo`);

		// draw background
		ctx.drawImage(gameBackground, 0, 0, 1920, 1080);
		ctx.font = '60px Verdana';
		ctx.fillStyle = '#f5f5f5';
		ctx.textAlign = 'center';
		ctx.shadowColor = 'black';
		ctx.shadowBlur = 20;
		ctx.shadowOffsetX = 5;
		ctx.shadowOffsetY = 5;
		ctx.fillText( gamesData[ gameTime ].tier, 960, 900);

		// draw logos
		ctx.font = 'italic 35px Verdana';
		ctx.textAlign = 'right';
		setTimeout(() => {
			ctx.drawImage(blueLogo, 200, 500, 425, 425);
			ctx.drawImage(orangeLogo, 1272, 500, 425, 425);
		}, 100);

		// draw team names
		ctx.textAlign = 'center';
		ctx.font = 'italic bold 55px Verdana';
		ctx.fillText(gamesData[ gameTime ].blue.team, 412, 1005);
		ctx.fillText(gamesData[ gameTime ].orange.team, 1485, 1005);
	}
}

// renderLineup() -> null
//		renderLineup() builds and renders the lineup images
function renderLineups() {
	for ( let gameTime in gamesData ) {
		let ctx = document.getElementById(`${gameTime}LineupCanvas`).getContext('2d');
		let blueLogo = document.getElementById(`${gameTime}BlueLogo`);
		let orangeLogo = document.getElementById(`${gameTime}OrangeLogo`);
		
		// draw background
		ctx.drawImage(lineupBackground, 0, 0, 1920, 1080);
		ctx.font = '35px Verdana';
		ctx.fillStyle = '#f5f5f5';

		let bluePlayers   = gamesData[ gameTime ].blue.players;
		let orangePlayers = gamesData[ gameTime ].orange.players;
		for ( let i = 0; i < bluePlayers.length; i++ ) {
			let player = bluePlayers[i];

			// player name
			ctx.font = '35px Verdana';
			ctx.textAlign = 'left';
			ctx.fillText(player.playerName, 435, 325 + (i * 72));

			// stats
			ctx.font = 'bold 40px Verdana';
			ctx.textAlign = 'center';
			ctx.fillText(player.gp, 820, 326 + (i * 72));
			ctx.fillText(player.goals, 1050, 326 + (i * 72));
			ctx.fillText(parseInt(player.assists), 1233, 326 + (i * 72));
			ctx.fillText(parseInt(player.shots), 1422, 326 + (i * 72));
			ctx.fillText(parseFloat(player.shotPct).toFixed(2) + '%', 1633, 326 + (i * 72));
		}

		for ( let i = 0; i < orangePlayers.length; i++ ) {
			let player = orangePlayers[i];

			// player name
			ctx.font = '35px Verdana';
			ctx.textAlign = 'left';
			ctx.fillText(player.playerName, 435, 780 + (i * 72));

			// stats
			ctx.font = 'bold 40px Verdana';
			ctx.textAlign = 'center';
			ctx.fillText(player.gp, 820, 781 + (i * 72));
			ctx.fillText(player.goals, 1050, 781 + (i * 72));
			ctx.fillText(player.assists, 1233, 781 + (i * 72));
			ctx.fillText(player.shots, 1422, 781 + (i * 72));
			ctx.fillText(parseFloat(player.shotPct).toFixed(2) + '%', 1633, 781 + (i * 72));
		}

		// add logos
		ctx.font = 'italic 30px Verdana';
		setTimeout(() => {
			ctx.drawImage(blueLogo, 63, 300, 200, 200);
			ctx.drawImage(orangeLogo, 63, 763, 200, 200);
		}, 100);

		// franchise names
		ctx.fillText(gamesData[ gameTime ].blue.franchise, 165, 550);
		ctx.fillText(gamesData[ gameTime ].orange.franchise, 165, 1012);

		// write team names
		ctx.font = 'bold 45px Verdana';
		ctx.fillStyle = '#0c1b3f';
		ctx.textAlign = 'left';
		ctx.fillText(gamesData[ gameTime ].blue.team, 30, 220);
		ctx.fillText(gamesData[ gameTime ].orange.team, 30, 676);
	}
}

// renderMatchups() -> null
//		renderMatchups() builds and renders the matchup images
function renderMatchups() {
	for ( let gameTime in gamesData ) {
		let ctx = document.getElementById(`${gameTime}MatchupCanvas`).getContext('2d');
		let blueLogo = document.getElementById(`${gameTime}BlueLogo`);
		let orangeLogo = document.getElementById(`${gameTime}OrangeLogo`);

		ctx.drawImage(matchupBackground, 0, 0, 1920, 1080);

		let blueTeam   = gamesData[ gameTime ].blue.team;
		let orangeTeam = gamesData[ gameTime ].orange.team;

		let blueStats   = teamsData[ gamesData[ gameTime ].tier ][ blueTeam ];
		let orangeStats = teamsData[ gamesData[ gameTime ].tier ][ orangeTeam ];

		// stats vars
		let barWins   = (((blueStats.wins / ( blueStats.wins + orangeStats.wins)) * 100 ) * 599) / 100;
		let barLosses = (((blueStats.loss / (blueStats.loss + orangeStats.loss)) * 100) * 599) / 100;
		let barGF     = (((blueStats.goals / (blueStats.goals + orangeStats.goals)) * 100) * 599) / 100;
		let barGA     = (((blueStats.oppGoals / (blueStats.oppGoals + orangeStats.oppGoals)) * 100) * 599) / 100;
		let barSaves  = (((blueStats.saves / (blueStats.saves + orangeStats.saves)) * 100) * 599) / 100;
		let barSA     = (((blueStats.oppSaves / (blueStats.oppSaves + orangeStats.oppSaves)) * 100) * 599) / 100;
		let barSP     = (((parseFloat(blueStats.shotPct) / (parseFloat(blueStats.shotPct) + parseFloat(orangeStats.shotPct))) * 100) * 599) / 100;

		// draw the bars
		ctx.fillStyle = '#4ca9f6';
		ctx.fillRect(660, 240, barWins, 50);
		ctx.fillRect(660, 360, barLosses, 50);
		ctx.fillRect(660, 480, barGF, 50);
		ctx.fillRect(660, 600, barGA, 50);
		ctx.fillRect(660, 720, barSaves, 50);
		ctx.fillRect(660, 841, barSA, 50);
		ctx.fillRect(660, 962, barSP, 50);

		ctx.font = 'bold 30px Verdana';
		ctx.fillStyle = '#f5f5f5';

		// blue stats
		ctx.textAlign = 'right';
		ctx.fillText(blueStats.wins,     630, 277);
		ctx.fillText(blueStats.loss,   630, 397);
		ctx.fillText(blueStats.goals,    630, 517);
		ctx.fillText(blueStats.oppGoals, 630, 637);
		ctx.fillText(blueStats.saves,    630, 757);
		ctx.fillText(blueStats.oppSaves, 630, 878);
		ctx.fillText(parseFloat(blueStats.shotPct).toFixed(1) + '%', 630, 1000);

		// orange stats
		ctx.textAlign = 'left';
		ctx.fillText(orangeStats.wins,     1285, 277);
		ctx.fillText(orangeStats.loss,   1285, 397);
		ctx.fillText(orangeStats.goals,    1285, 517);
		ctx.fillText(orangeStats.oppGoals, 1285, 637);
		ctx.fillText(orangeStats.saves,    1285, 757);
		ctx.fillText(orangeStats.oppSaves, 1285, 878);
		ctx.fillText(parseFloat(orangeStats.shotPct).toFixed(1) + '%', 1285, 1000);

		ctx.font = 'italic 35px Verdana';
		ctx.textAlign = 'center';

		// display franchise names	
		ctx.fillText(gamesData[ gameTime ].blue.franchise, 273, 690);
		ctx.fillText(gamesData[ gameTime ].orange.franchise, 1647, 690);
		
		// display team names
		ctx.font = 'bold 40px Verdana';
		ctx.fillStyle = 'Black';
		ctx.textAlign = 'right';
		ctx.fillText(gamesData[ gameTime ].blue.team, 400, 785);
		ctx.textAlign = 'left';
		ctx.fillText(gamesData[ gameTime ].orange.team, 1470, 785);

		/* WARNING WARNING WARNING. YOU MUST WAIT FOR THE IMAGES TO LOAD */
		setTimeout(() => {
			ctx.drawImage(blueLogo, 135, 350, 276, 276);
			ctx.drawImage(orangeLogo, 1510, 350, 276, 276);
		}, 100);
	}	
}

// drawLogo(context, element, imgParams) => true
//		This is a context helper function to draw an image (in element)
//		with the provided parameters to the image context.
//			{ sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight }
function drawLogo(context, element, imgParams) {
	context.shadowColor = 'black';
	context.shadowBlur = 20;
	context.shadowOffsetX = 5;
	context.shadowOffsetY = 0;

	context.drawImage(
		element,
		imgParams.dx,
		imgParams.dy,
		imgParams.dWidth,
		imgParams.dHeight
	);
	// context.drawImage(
	// 	element, 
	// 	imgParams.sx,
	// 	imgParams.sy,
	// 	imgParams.sWidth,
	// 	imgParams.sHeight,
	// 	imgParams.dx,
	// 	imgParams.dy,
	// 	imgParams.dWidth,
	// 	imgParams.dHeight
	// );
	return true;
}

// beginRender() => null
//		scheduleRender attempts to begin the rendering pass
//		if all of the player data assets have finished loading.
//		If the network is slow or there is an error, it will 
//		fail after 10 attempts.
function beginRender() {
	renderAttempts += 1;

	if ( processingQueue > 0 ) {
		console.log(`Waiting for results... [${renderAttempts}`);
		if ( renderAttempts < 10 ) {
			setTimeout(() => {
				beginRender();
			}, 100 * renderAttempts);
		}
	} else {
		console.log('Starting render!');
		renderImages();
	}
}


// processSelections(gameNumber) => gameData object
//		processSelections takes a gameNumber (1|2) and returns a 
//		prepared gameData object to be stored in the global gamesData
//		object.
function processSelections(gameNumber) {
	// get a reference to the tier select option for this tier
	let gameTierSelect = gameNumber == 1 ? gameOneTierSelect : gameTwoTierSelect;
	let gameNumberStr  = gameNumber == 2 ? '2' : '';
	let blueTeamSelect   = document.getElementById('blue-team' + gameNumberStr);
	let orangeTeamSelect = document.getElementById('orange-team' + gameNumberStr);

	// set up our object format
	let gameData = {
		game: gameNumber,
		gameTime: gameNumber == 1 ? 'early' : 'late',
		tier: '',
		blue: {
			franchise: '',
			team: '',
			players: [], 
		}, 
		orange: {
			franchise: '',
			team: '',
			players: [], 
		}, 
	};

	gameData.tier             = gameTierSelect.options[ gameTierSelect.selectedIndex ].value;
	gameData.blue.franchise   = blueTeamSelect[ blueTeamSelect.selectedIndex ].value;
	gameData.blue.team        = blueTeamSelect[ blueTeamSelect.selectedIndex ].text;
	gameData.orange.franchise = orangeTeamSelect[ orangeTeamSelect.selectedIndex ].value;
	gameData.orange.team      = orangeTeamSelect[ orangeTeamSelect.selectedIndex ].text;

	return gameData;
}

// fetchPlayers(gameData object) => null
// 		async function to fetch player data/stats from API. These stats
// 		are stored in the players array for each team color 
//			1. fetch player stats from API
//			2. store results in gameData.blue|orange.players
//
function fetchPlayers(gameData) {
	let blueTeam   = gameData.blue.team;
	let orangeTeam = gameData.orange.team;

	let headers = {};
	if ( isTwos ) {
		headers = { headers: { League: '2s' } };
	}

	Promise.all([
		fetch(`${apiUrl}/players/${blueTeam}`, headers),
		fetch(`${apiUrl}/players/${orangeTeam}`, headers),
	])
	.then((responses) => Promise.all(responses.map((response) => response.json())))
	.then((jsonData) => {
		// sort players by PPG (change this function if we want different sorting)
		// original was "goals"
		jsonData[0].sort((a, b) => parseFloat(b.ppg) - parseFloat(a.ppg));
		jsonData[1].sort((a, b) => parseFloat(b.ppg) - parseFloat(a.ppg));
		gameData.blue.players   = jsonData[0];
		gameData.orange.players = jsonData[1];

		processingQueue -= 2;
	});
}


/**********************************************************************/
/**********************************************************************/
/*************** TEAM LOADING / FORM CONTROL FUNCTIONS ****************/
/**********************************************************************/
/**********************************************************************/

// getAndPrepareSelect(gameNumber = 1:2, teamColor = "blue":"orange") => element
// 		pass in a game num and a team color and this function will:
// 			1. wipe out the existing options
//			2. create a default option and add it
//			3. return a reference to that element, ready to use
function getAndPrepareSelect(gameNumber, teamColor) {
	let dropdown = document.getElementById(teamColor + '-team' + ( gameNumber == 2 ? '2' : ''));
	dropdown.length = 0; // clear it out
	let defaultOption = document.createElement('option');
	defaultOption.text = teamColor.ucfirst() + ' Team';
	dropdown.add(defaultOption);
	dropdown.selectedIndex = 0;

	return dropdown;
}

// loadTeams(changeevent) => null
// 		event handler for the tier select options
//			1. get the game (1 or 2)
//			2. fetch the team tiers from RSCAPI
//			3. prepare the team select boxes
function loadTeams(ev) {
	let gameSelect = ev.target.dataset.game;
	let tierSelect = ev.target.value;

	let teams = [];
	let id    = [];

	let headers = {};
	if ( isTwos ) {
		headers = { headers: { League: '2s' } };
	}

	fetch(`${apiUrl}/teams/${tierSelect}`, headers)
		.then(response => response.json())
		.then((data) => {
			//console.log(data);
			let teamArray = [];

			// reset the existing dropdowns
			let dropdownBlueTeam   = getAndPrepareSelect(gameSelect, 'blue');
			let dropdownOrangeTeam = getAndPrepareSelect(gameSelect, 'orange');

			teamsData[ tierSelect ] = {};

			for ( let i = 0; i < data.length; i++ ) {
				// store a copy of team stats for later rendering
				teamsData[ tierSelect ][ data[i].teamName.toString() ] = data[i];

				teamArray.push({ 'label': data[i].teamName.toString(), 'value': data[i].franchise.toString() });
				let teamOption = document.createElement('option');
				teamOption.text = data[i].teamName.toString();
				teamOption.value = data[i].franchise.toString();
				let teamOptionOrange = teamOption.cloneNode(true);
				dropdownBlueTeam.add(teamOption);
				dropdownOrangeTeam.add(teamOptionOrange);
			}
			// teamArray.sort((a, b) => {
			// 	if ( a.label < b.label ) return -1;
			// 	if ( a.label > b.label ) return 1;
			// 	return 0;
			// });
		}).catch((error) => {
			console.log('Request failed', error)
		});
}

// togglePlayoffs(changeevent) => null
// 		event handler for the isPlayoffs checkbox
//			1. get the current value (checked = use playoffs background, unchecked = use normal)
//			2. Change the schedule background image	
function togglePlayoffs(ev) {
	let isChecked = ev.target.checked;

	if ( isChecked ) {
		scheduleBackground.src = `${backgroundPath}${twosPath}/schedule-playoffs.png`;
	} else {
		scheduleBackground.src = `${backgroundPath}${twosPath}/schedules.png`;
	}
}

// togglePanel(Event clickEvent) => null
// 		event handler for the logo advanced controls panel (open/close) 
//			1. get the current status (open|closed) 
//			2. switch to the opposite version
//			3. toggle "hidden" class on control div
function togglePanel(ev) {
	let linkEl = ev.target;
	let panelEl = document.getElementById('logoControls');
	if ( linkEl.classList.contains('open') ) {
		linkEl.classList.remove('open');
		linkEl.classList.add('closed');
		panelEl.classList.add('hidden');
	} else {
		linkEl.classList.remove('closed');
		linkEl.classList.add('open');
		panelEl.classList.remove('hidden');
	}
}

// changeLeague(Event changeEvent) => null
// 		event handler for the League select 
//			1. get the current value (3s|2s)
//			2. If 3s, use 3s background images and set the isTwos bool to false
//			3. If 2s, use 2s background images, set bool to true, create extra path string for assets	
function changeLeague(ev) {
	let league = ev.target.options[ ev.target.selectedIndex ].value;

	if ( league == '3s' ) {
		isTwos = false;
		twosPath = '';
		scheduleBackground.src = `${backgroundPath}${twosPath}/schedule.png`;
		gameBackground.src     = `${backgroundPath}${twosPath}/game.png`;
		lineupBackground.src   = `${backgroundPath}${twosPath}/lineup.png`;
		matchupBackground.src  = `${backgroundPath}${twosPath}/matchup.png`;
	} else {
		isTwos = true;
		twosPath = '-2s';
		scheduleBackground.src = `${backgroundPath}${twosPath}/schedule.png`;
		gameBackground.src     = `${backgroundPath}${twosPath}/game.png`;
		lineupBackground.src   = `${backgroundPath}${twosPath}/lineup.png`;
		matchupBackground.src  = `${backgroundPath}${twosPath}/matchup.png`;
	}

	loadTiers(league);
}

// loadTiers() => null
//		Loads $apiUrl/tiers
//			1. Take the current league selection and query the API for the current tiers
//			2. Update both tier selection elements with the correct list of active tiers
function loadTiers() {
	let headers = {};
	if ( isTwos ) {
		headers = { headers: { League: '2s' } };
	}

	// TODO(erh): The streamAPI currently doesn't have a /tiers endpoint for 2s league
	// waiting for PR
	let twosTiers = [
		{ name: 'Premier' },
		{ name: 'Elite' },
		{ name: 'Veteran' },
		{ name: 'Rival' },
		{ name: 'Challenger' },
		{ name: 'Prospect' },
		{ name: 'Contender' },
	];

	if ( isTwos ) {
		renderTiers(twosTiers);
	} else {
		fetch(`${apiUrl}/tiers`, headers)
			.then(response => response.json())
			.then((data) => {
				renderTiers(data);
			});
	}
}

// renderTiers(array of tierName objects) => null
function renderTiers(tierList) {
	let earlyTierDropdown = document.getElementById('tier-dropdown');
	let lateTierDropdown  = document.getElementById('tier-dropdown2');

	// clear the current options
	earlyTierDropdown.length  = 1;
	lateTierDropdown.length = 1;

	for ( let i = 0; i < tierList.length; i++ ) {
		let earlyTierOption = document.createElement('option');
		earlyTierOption.text  = tierList[i].name.toString();
		earlyTierOption.value = tierList[i].name.toString();
		let lateTierOption = earlyTierOption.cloneNode(true);
		earlyTierDropdown.add(earlyTierOption);
		lateTierDropdown.add(lateTierOption);
	}
}

// lazyLoadLogos(Event changeEvent) => null
// 		event handler to preload image assets into an <img> element when a team is selected 
//			1. get the current value of the team checkbox
//			2. get the data-elementId field to know which image element to update
//			3. profit! hopefully no more asset loading race conditions
function lazyLoadLogos(ev) {
	let logoImageEl = document.getElementById(ev.target.dataset.elementId);
	let franchiseName = ev.target.value;

	logoImageEl.src = `${logoPath}${twosPath}/${franchiseName}.png`;
}

/**********************************************************************/
/**********************************************************************/
/******************* HELPER FUNCTIONS FOR QoL IN JS *******************/
/**********************************************************************/
/**********************************************************************/
String.prototype.ucfirst = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
};