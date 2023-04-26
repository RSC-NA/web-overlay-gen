var BlueResults = []
var OrangeResults = []
var BlueResults2 = []
var OrangeResults2 = []
var game1Tier = []
var game1TierO = []
var game2Tier = []
var game2TierO = []

function loadGame1() {
	let blueF = localStorage.getItem("BlueFran");

	//document.getElementById("blueFranchise").innerHTML  = localStorage.getItem("BlueFran")
	document.getElementById("blueLogo").src = "assets/logos/Active Logos/" + blueF + ".png";

	let blueF2 = localStorage.getItem("BlueFran2");

	//document.getElementById("blueFranchise").innerHTML  = localStorage.getItem("BlueFran")
	document.getElementById("blueLogo2").src = "assets/logos/Active Logos/" + blueF2 + ".png";


	let orangeF = localStorage.getItem("OrangeFran");
	document.getElementById("orangeLogo").src = "assets/logos/Active Logos/" + orangeF + ".png";

	let orangeF2 = localStorage.getItem("OrangeFran2");
	document.getElementById("orangeLogo2").src = "assets/logos/Active Logos/" + orangeF2 + ".png";


	let Teams = localStorage.getItem("Teams");
	let teamData = ('Teams: ', JSON.parse(Teams));


	//-----------------------------------------------------------------------------------------------------------//
	var BlueTeamResults = [];
	var searchField = 'franchise';
	var searchValue = blueF;
	//console.log(game1TierO)
	for (var i = 0; i < game1Tier[0].length; i++) {
		if (game1Tier[0][i][searchField] == searchValue) {
			BlueTeamResults.push(game1Tier[0][i])
		}
	}
	//console.log(BlueTeamResults[0])

	var OrangeTeamResults = []
	var searchFieldO = 'franchise'
	var searchValueO = orangeF
	for (var i = 0; i < game1TierO[0].length; i++) {
		if (game1TierO[0][i][searchFieldO] == searchValueO) {
			OrangeTeamResults.push(game1TierO[0][i])
		}
	}
	//console.log(OrangeTeamResults[0])

	//console.log(BlueResults)
	try {
		if (BlueResults[0].length < 4) {
			var Blue1Name = BlueResults[0][0].playerName
			var Blue2Name = BlueResults[0][1].playerName
			var Blue3Name = BlueResults[0][2].playerName
			var Blue4Name = ""
			var Blue1GP = BlueResults[0][0].gp
			var Blue2GP = BlueResults[0][1].gp
			var Blue3GP = BlueResults[0][2].gp
			var Blue4GP = ""
			var Blue1Goals = BlueResults[0][0].goals
			var Blue2Goals = BlueResults[0][1].goals
			var Blue3Goals = BlueResults[0][2].goals
			var Blue4Goals = ""
			var Blue1Assists = BlueResults[0][0].assists
			var Blue2Assists = BlueResults[0][1].assists
			var Blue3Assists = BlueResults[0][2].assists
			var Blue4Assists = ""
			var Blue1Saves = BlueResults[0][0].saves
			var Blue2Saves = BlueResults[0][1].saves
			var Blue3Saves = BlueResults[0][2].saves
			var Blue4Saves = ""
			var Blue1Shot = BlueResults[0][0].shots
			var Blue2Shot = BlueResults[0][1].shots
			var Blue3Shot = BlueResults[0][2].shots
			var Blue4Shot = ""
			var Blue1ShotPct = BlueResults[0][0].shotPct
			var Blue2ShotPct = BlueResults[0][1].shotPct
			var Blue3ShotPct = BlueResults[0][2].shotPct
			var Blue4ShotPct = ""
		} else {
			var Blue1Name = BlueResults[0][0].playerName
			var Blue2Name = BlueResults[0][1].playerName
			var Blue3Name = BlueResults[0][2].playerName
			var Blue4Name = BlueResults[0][3].playerName
			var Blue1GP = BlueResults[0][0].gp
			var Blue2GP = BlueResults[0][1].gp
			var Blue3GP = BlueResults[0][2].gp
			var Blue4GP = BlueResults[0][3].gp
			var Blue1Goals = BlueResults[0][0].goals
			var Blue2Goals = BlueResults[0][1].goals
			var Blue3Goals = BlueResults[0][2].goals
			var Blue4Goals = BlueResults[0][3].goals
			var Blue1Assists = BlueResults[0][0].assists
			var Blue2Assists = BlueResults[0][1].assists
			var Blue3Assists = BlueResults[0][2].assists
			var Blue4Assists = BlueResults[0][3].assists
			var Blue1Saves = BlueResults[0][0].saves
			var Blue2Saves = BlueResults[0][1].saves
			var Blue3Saves = BlueResults[0][2].saves
			var Blue4Saves = BlueResults[0][3].saves
			var Blue1Shot = BlueResults[0][0].shots
			var Blue2Shot = BlueResults[0][1].shots
			var Blue3Shot = BlueResults[0][2].shots
			var Blue4Shot = BlueResults[0][3].shots
			var Blue1ShotPct = BlueResults[0][0].shotPct
			var Blue2ShotPct = BlueResults[0][1].shotPct
			var Blue3ShotPct = BlueResults[0][2].shotPct
			var Blue4ShotPct = BlueResults[0][3].shotPct
			//console.log(Blue1Name)
		}


		if (OrangeResults[0].length < 4) {
			var Orange1Name = OrangeResults[0][0].playerName
			var Orange2Name = OrangeResults[0][1].playerName
			var Orange3Name = OrangeResults[0][2].playerName
			var Orange4Name = ""
			var Orange1GP = OrangeResults[0][0].gp
			var Orange2GP = OrangeResults[0][1].gp
			var Orange3GP = OrangeResults[0][2].gp
			var Orange4GP = ""
			var Orange1Goals = OrangeResults[0][0].goals
			var Orange2Goals = OrangeResults[0][1].goals
			var Orange3Goals = OrangeResults[0][2].goals
			var Orange4Goals = ""
			var Orange1Assists = OrangeResults[0][0].assists
			var Orange2Assists = OrangeResults[0][1].assists
			var Orange3Assists = OrangeResults[0][2].assists
			var Orange4Assists = ""
			var Orange1Saves = OrangeResults[0][0].saves
			var Orange2Saves = OrangeResults[0][1].saves
			var Orange3Saves = OrangeResults[0][2].saves
			var Orange4Saves = ""
			var Orange1Shot = OrangeResults[0][0].shots
			var Orange2Shot = OrangeResults[0][1].shots
			var Orange3Shot = OrangeResults[0][2].shots
			var Orange4Shot = ""
			var Orange1ShotPct = OrangeResults[0][0].shotPct
			var Orange2ShotPct = OrangeResults[0][1].shotPct
			var Orange3ShotPct = OrangeResults[0][2].shotPct
			var Orange4ShotPct = ""
		} else {
			var Orange1Name = OrangeResults[0][0].playerName
			var Orange2Name = OrangeResults[0][1].playerName
			var Orange3Name = OrangeResults[0][2].playerName
			var Orange4Name = OrangeResults[0][3].playerName
			var Orange1GP = OrangeResults[0][0].gp
			var Orange2GP = OrangeResults[0][1].gp
			var Orange3GP = OrangeResults[0][2].gp
			var Orange4GP = OrangeResults[0][3].gp
			var Orange1Goals = OrangeResults[0][0].goals
			var Orange2Goals = OrangeResults[0][1].goals
			var Orange3Goals = OrangeResults[0][2].goals
			var Orange4Goals = OrangeResults[0][3].goals
			var Orange1Assists = OrangeResults[0][0].assists
			var Orange2Assists = OrangeResults[0][1].assists
			var Orange3Assists = OrangeResults[0][2].assists
			var Orange4Assists = OrangeResults[0][3].assists
			var Orange1Saves = OrangeResults[0][0].saves
			var Orange2Saves = OrangeResults[0][1].saves
			var Orange3Saves = OrangeResults[0][2].saves
			var Orange4Saves = OrangeResults[0][3].saves
			var Orange1Shot = OrangeResults[0][0].shots
			var Orange2Shot = OrangeResults[0][1].shots
			var Orange3Shot = OrangeResults[0][2].shots
			var Orange4Shot = OrangeResults[0][3].shots
			var Orange1ShotPct = OrangeResults[0][0].shotPct
			var Orange2ShotPct = OrangeResults[0][1].shotPct
			var Orange3ShotPct = OrangeResults[0][2].shotPct
			var Orange4ShotPct = OrangeResults[0][3].shotPct
		}

		var BlueWins = BlueTeamResults[0].wins
		var BlueLosses = BlueTeamResults[0].loss
		var BlueGF = BlueTeamResults[0].goals
		var BlueGA = BlueTeamResults[0].oppGoals
		var BlueSaves = BlueTeamResults[0].saves
		var BlueSA = BlueTeamResults[0].oppSaves
		var BlueSP = BlueTeamResults[0].shotPct

		var OrangeWins = OrangeTeamResults[0].wins
		var OrangeLosses = OrangeTeamResults[0].loss
		var OrangeGF = OrangeTeamResults[0].goals
		var OrangeGA = OrangeTeamResults[0].oppGoals
		var OrangeSaves = OrangeTeamResults[0].saves
		var OrangeSA = OrangeTeamResults[0].oppSaves
		var OrangeSP = OrangeTeamResults[0].shotPct
	} catch (error) {
		console.error(error);
	}
	//-----------------------------------GAME 2 DATA-----------------------------------------------------------------//
	let Teams2 = localStorage.getItem("Teams2")
	let teamData2 = ('Teams2: ', JSON.parse(Teams2))

	var BlueTeamResults2 = []
	var searchField = 'franchise'
	var searchValue = blueF2
	//console.log(game1TierO)
	for (var i = 0; i < game2Tier[0].length; i++) {
		if (game2Tier[0][i][searchField] == searchValue) {
			BlueTeamResults2.push(game2Tier[0][i])
		}
	}
	//console.log(BlueTeamResults[0])

	var OrangeTeamResults2 = []
	var searchFieldO = 'franchise'
	var searchValueO = orangeF2
	for (var i = 0; i < game2TierO[0].length; i++) {
		if (game2TierO[0][i][searchFieldO] == searchValueO) {
			OrangeTeamResults2.push(game2TierO[0][i])
		}
	}
	//console.log(OrangeTeamResults2[0])

	try {
		if (BlueResults2[0].length < 3) {
			var Blue1Name2 = BlueResults2[0][0].playerName
			var Blue2Name2 = BlueResults2[0][1].playerName
			var Blue3Name2 = ""
			var Blue4Name2 = ""
			var Blue1GP2 = BlueResults2[0][0].gp
			var Blue2GP2 = BlueResults2[0][1].gp
			var Blue3GP2 = ""
			var Blue4GP2 = ""
			var Blue1Goals2 = BlueResults2[0][0].goals
			var Blue2Goals2 = BlueResults2[0][1].goals
			var Blue3Goals2 = ""
			var Blue4Goals2 = ""
			var Blue1Assists2 = BlueResults2[0][0].assists
			var Blue2Assists2 = BlueResults2[0][1].assists
			var Blue3Assists2 = ""
			var Blue4Assists2 = ""
			var Blue1Saves2 = BlueResults2[0][0].saves
			var Blue2Saves2 = BlueResults2[0][1].saves
			var Blue3Saves2 = ""
			var Blue4Saves2 = ""
			var Blue1Shot2 = BlueResults[0][0].shots
			var Blue2Shot2 = BlueResults[0][1].shots
			var Blue3Shot2 = ""
			var Blue4Shot2 = ""
			var Blue1ShotPct2 = BlueResults2[0][0].shotPct
			var Blue2ShotPct2 = BlueResults2[0][1].shotPct
			var Blue3ShotPct2 = ""
			var Blue4ShotPct2 = ""
		} else if (BlueResults2[0].length < 4) {
			var Blue1Name2 = BlueResults2[0][0].playerName
			var Blue2Name2 = BlueResults2[0][1].playerName
			var Blue3Name2 = BlueResults2[0][2].playerName
			var Blue4Name2 = ""
			var Blue1GP2 = BlueResults2[0][0].gp
			var Blue2GP2 = BlueResults2[0][1].gp
			var Blue3GP2 = BlueResults2[0][2].gp
			var Blue4GP2 = ""
			var Blue1Goals2 = BlueResults2[0][0].goals
			var Blue2Goals2 = BlueResults2[0][1].goals
			var Blue3Goals2 = BlueResults2[0][2].goals
			var Blue4Goals2 = ""
			var Blue1Assists2 = BlueResults2[0][0].assists
			var Blue2Assists2 = BlueResults2[0][1].assists
			var Blue3Assists2 = BlueResults2[0][2].assists
			var Blue4Assists2 = ""
			var Blue1Saves2 = BlueResults2[0][0].saves
			var Blue2Saves2 = BlueResults2[0][1].saves
			var Blue3Saves2 = BlueResults2[0][2].saves
			var Blue4Saves2 = ""
			var Blue1Shot2 = BlueResults[0][0].shots
			var Blue2Shot2 = BlueResults[0][1].shots
			var Blue3Shot2 = BlueResults[0][2].shots
			var Blue4Shot2 = ""
			var Blue1ShotPct2 = BlueResults2[0][0].shotPct
			var Blue2ShotPct2 = BlueResults2[0][1].shotPct
			var Blue3ShotPct2 = BlueResults2[0][2].shotPct
			var Blue4ShotPct2 = ""
		} else {
			var Blue1Name2 = BlueResults2[0][0].playerName
			var Blue2Name2 = BlueResults2[0][1].playerName
			var Blue3Name2 = BlueResults2[0][2].playerName
			var Blue4Name2 = BlueResults2[0][3].playerName
			var Blue1GP2 = BlueResults2[0][0].gp
			var Blue2GP2 = BlueResults2[0][1].gp
			var Blue3GP2 = BlueResults2[0][2].gp
			var Blue4GP2 = BlueResults2[0][3].gp
			var Blue1Goals2 = BlueResults2[0][0].goals
			var Blue2Goals2 = BlueResults2[0][1].goals
			var Blue3Goals2 = BlueResults2[0][2].goals
			var Blue4Goals2 = BlueResults2[0][3].goals
			var Blue1Assists2 = BlueResults2[0][0].assists
			var Blue2Assists2 = BlueResults2[0][1].assists
			var Blue3Assists2 = BlueResults2[0][2].assists
			var Blue4Assists2 = BlueResults2[0][3].assists
			var Blue1Saves2 = BlueResults2[0][0].saves
			var Blue2Saves2 = BlueResults2[0][1].saves
			var Blue3Saves2 = BlueResults2[0][2].saves
			var Blue4Saves2 = BlueResults2[0][3].saves
			var Blue1Shot2 = BlueResults[0][0].shots
			var Blue2Shot2 = BlueResults[0][1].shots
			var Blue3Shot2 = BlueResults[0][2].shots
			var Blue4Shot2 = BlueResults[0][3].shots
			var Blue1ShotPct2 = BlueResults2[0][0].shotPct
			var Blue2ShotPct2 = BlueResults2[0][1].shotPct
			var Blue3ShotPct2 = BlueResults2[0][2].shotPct
			var Blue4ShotPct2 = BlueResults2[0][3].shotPct
			//console.log(Blue1Name2)
		}


		if (OrangeResults2[0].length < 4) {
			var Orange1Name2 = OrangeResults2[0][0].playerName
			var Orange2Name2 = OrangeResults2[0][1].playerName
			var Orange3Name2 = OrangeResults2[0][2].playerName
			var Orange4Name2 = ""
			var Orange1GP2 = OrangeResults2[0][0].gp
			var Orange2GP2 = OrangeResults2[0][1].gp
			var Orange3GP2 = OrangeResults2[0][2].gp
			var Orange4GP2 = ""
			var Orange1Goals2 = OrangeResults2[0][0].goals
			var Orange2Goals2 = OrangeResults2[0][1].goals
			var Orange3Goals2 = OrangeResults2[0][2].goals
			var Orange4Goals2 = ""
			var Orange1Assists2 = OrangeResults2[0][0].assists
			var Orange2Assists2 = OrangeResults2[0][1].assists
			var Orange3Assists2 = OrangeResults2[0][2].assists
			var Orange4Assists2 = ""
			var Orange1Saves2 = OrangeResults2[0][0].saves
			var Orange2Saves2 = OrangeResults2[0][1].saves
			var Orange3Saves2 = OrangeResults2[0][2].saves
			var Orange4Saves2 = ""
			var Orange1Shot2 = OrangeResults[0][0].shots
			var Orange2Shot2 = OrangeResults[0][1].shots
			var Orange3Shot2 = OrangeResults[0][2].shots
			var Orange4Shot2 = ""
			var Orange1ShotPct2 = OrangeResults2[0][0].shotPct
			var Orange2ShotPct2 = OrangeResults2[0][1].shotPct
			var Orange3ShotPct2 = OrangeResults2[0][2].shotPct
			var Orange4ShotPct2 = ""
		} else if (OrangeResults2[0].length < 3) {
			var Orange1Name2 = OrangeResults2[0][0].playerName
			var Orange2Name2 = OrangeResults2[0][1].playerName
			var Orange3Name2 = ""
			var Orange4Name2 = ""
			var Orange1GP2 = OrangeResults2[0][0].gp
			var Orange2GP2 = OrangeResults2[0][1].gp
			var Orange3GP2 = ""
			var Orange4GP2 = ""
			var Orange1Goals2 = OrangeResults2[0][0].goals
			var Orange2Goals2 = OrangeResults2[0][1].goals
			var Orange3Goals2 = ""
			var Orange4Goals2 = ""
			var Orange1Assists2 = OrangeResults2[0][0].assists
			var Orange2Assists2 = OrangeResults2[0][1].assists
			var Orange3Assists2 = ""
			var Orange4Assists2 = ""
			var Orange1Saves2 = OrangeResults2[0][0].saves
			var Orange2Saves2 = OrangeResults2[0][1].saves
			var Orange3Saves2 = ""
			var Orange4Saves2 = ""
			var Orange1ShotPct2 = OrangeResults2[0][0].shotPct
			var Orange2ShotPct2 = OrangeResults2[0][1].shotPct
			var Orange3ShotPct2 = ""
			var Orange4ShotPct2 = ""
		} else {
			var Orange1Name2 = OrangeResults2[0][0].playerName
			var Orange2Name2 = OrangeResults2[0][1].playerName
			var Orange3Name2 = OrangeResults2[0][2].playerName
			var Orange4Name2 = OrangeResults2[0][3].playerName
			var Orange1GP2 = OrangeResults2[0][0].gp
			var Orange2GP2 = OrangeResults2[0][1].gp
			var Orange3GP2 = OrangeResults2[0][2].gp
			var Orange4GP2 = OrangeResults2[0][3].gp
			var Orange1Goals2 = OrangeResults2[0][0].goals
			var Orange2Goals2 = OrangeResults2[0][1].goals
			var Orange3Goals2 = OrangeResults2[0][2].goals
			var Orange4Goals2 = OrangeResults2[0][3].goals
			var Orange1Assists2 = OrangeResults2[0][0].assists
			var Orange2Assists2 = OrangeResults2[0][1].assists
			var Orange3Assists2 = OrangeResults2[0][2].assists
			var Orange4Assists2 = OrangeResults2[0][3].assists
			var Orange1Saves2 = OrangeResults2[0][0].saves
			var Orange2Saves2 = OrangeResults2[0][1].saves
			var Orange3Saves2 = OrangeResults2[0][2].saves
			var Orange4Saves2 = OrangeResults2[0][3].saves
			var Orange1Shot2 = OrangeResults[0][0].shots
			var Orange2Shot2 = OrangeResults[0][1].shots
			var Orange3Shot2 = OrangeResults[0][2].shots
			var Orange4Shot2 = OrangeResults[0][3].shots
			var Orange1ShotPct2 = OrangeResults2[0][0].shotPct
			var Orange2ShotPct2 = OrangeResults2[0][1].shotPct
			var Orange3ShotPct2 = OrangeResults2[0][2].shotPct
			var Orange4ShotPct2 = OrangeResults2[0][3].shotPct
		}

		var BlueWins2 = BlueTeamResults2[0].wins
		var BlueLosses2 = BlueTeamResults2[0].loss
		var BlueGF2 = BlueTeamResults2[0].goals
		var BlueGA2 = BlueTeamResults2[0].oppGoals
		var BlueSaves2 = BlueTeamResults2[0].saves
		var BlueSA2 = BlueTeamResults2[0].oppSaves
		var BlueSP2 = BlueTeamResults2[0].shotPct

		var OrangeWins2 = OrangeTeamResults2[0].wins
		var OrangeLosses2 = OrangeTeamResults2[0].loss
		var OrangeGF2 = OrangeTeamResults2[0].goals
		var OrangeGA2 = OrangeTeamResults2[0].oppGoals
		var OrangeSaves2 = OrangeTeamResults2[0].saves
		var OrangeSA2 = OrangeTeamResults2[0].oppSaves
		var OrangeSP2 = OrangeTeamResults2[0].shotPct
	} catch (error) {
		console.error(error);
	}
	//---------------------------------------------------------------------------------------------------------------//
	setTimeout(() => {


		//----------------------------PLAYERS STATS GAME 1--------------------------------------------------------------//
		try {
			var c = document.getElementById("myCanvas");
			var ctx = c.getContext("2d");
			var Blue = document.getElementById("blueLogo");
			var Orange = document.getElementById("orangeLogo");
			var Background = document.getElementById("background");
			ctx.drawImage(Background, 0, 0, 1920, 1080)
			ctx.font = "35px Verdana";
			ctx.fillStyle = "#f5f5f5";
			ctx.fillText(Blue1Name, 435, 325)
			ctx.fillText(Blue2Name, 435, 397)
			ctx.fillText(Blue3Name, 435, 469)
			ctx.fillText(Blue4Name, 435, 541)
			ctx.fillText(Orange1Name, 435, 780)
			ctx.fillText(Orange2Name, 435, 852)
			ctx.fillText(Orange3Name, 435, 924)
			ctx.fillText(Orange4Name, 435, 996)
			ctx.font = "bold 40px Verdana";
			ctx.textAlign = 'center';
			ctx.fillText(Blue1GP, 820, 326)
			ctx.fillText(Blue2GP, 820, 398)
			ctx.fillText(Blue3GP, 820, 470)
			ctx.fillText(Blue4GP, 820, 542)
			ctx.fillText(Orange1GP, 820, 781)
			ctx.fillText(Orange2GP, 820, 853)
			ctx.fillText(Orange3GP, 820, 925)
			ctx.fillText(Orange4GP, 820, 997)
			ctx.fillText(Blue1Goals, 1050, 326)
			ctx.fillText(Blue2Goals, 1050, 398)
			ctx.fillText(Blue3Goals, 1050, 470)
			ctx.fillText(Blue4Goals, 1050, 542)
			ctx.fillText(Orange1Goals, 1050, 781)
			ctx.fillText(Orange2Goals, 1050, 853)
			ctx.fillText(Orange3Goals, 1050, 925)
			ctx.fillText(Orange4Goals, 1050, 997)
			ctx.fillText(Blue1Assists, 1233, 326)
			ctx.fillText(Blue2Assists, 1233, 398)
			ctx.fillText(Blue3Assists, 1233, 470)
			ctx.fillText(Blue4Assists, 1233, 542)
			ctx.fillText(Orange1Assists, 1233, 781)
			ctx.fillText(Orange2Assists, 1233, 853)
			ctx.fillText(Orange3Assists, 1233, 925)
			ctx.fillText(Orange4Assists, 1233, 997)

			ctx.fillText(Blue1Shot, 1422, 326)
			ctx.fillText(Blue2Shot, 1422, 398)
			ctx.fillText(Blue3Shot, 1422, 470)
			ctx.fillText(Blue4Shot, 1422, 542)
			ctx.fillText(Orange1Shot, 1422, 781)
			ctx.fillText(Orange2Shot, 1422, 853)
			ctx.fillText(Orange3Shot, 1422, 925)
			ctx.fillText(Orange4Shot, 1422, 997)
			ctx.fillText(Blue1ShotPct.toFixed(2) + '%', 1633, 326)
			ctx.fillText(Blue2ShotPct.toFixed(2) + '%', 1633, 398)
			ctx.fillText(Blue3ShotPct.toFixed(2) + '%', 1633, 470)
			ctx.fillText(Blue4ShotPct.toFixed(2) + '%', 1633, 542)
			ctx.fillText(Orange1ShotPct.toFixed(2) + '%', 1633, 781)
			ctx.fillText(Orange2ShotPct.toFixed(2) + '%', 1633, 853)
			ctx.fillText(Orange3ShotPct.toFixed(2) + '%', 1633, 925)
			ctx.fillText(Orange4ShotPct.toFixed(2) + '%', 1633, 997)
			ctx.font = "italic 30px Verdana";
			ctx.fillStyle = "#f5f5f5";
			ctx.textAlign = "center";
			ctx.drawImage(Blue, 63, 300, 200, 200)
			ctx.drawImage(Orange, 63, 763, 200, 200)
			ctx.fillText(localStorage.getItem("BlueFran"), 165, 550)
			ctx.fillText(localStorage.getItem("OrangeFran"), 165, 1012)
			ctx.font = "bold 45px Verdana";
			ctx.fillStyle = "#0c1b3f";
			ctx.textAlign = "left";
			ctx.fillText(localStorage.getItem("BlueTeam"), 30, 220)
			ctx.textAlign = "left"
			ctx.fillText(localStorage.getItem("OrangeTeam"), 30, 676)
		}
		catch (error) {
			console.error(error);
		}

		//------------------------------------------------PLAYER STATS GAME 2------------------------------------------------//
		try {
			var p = document.getElementById("myCanvas2");
			var ptx = p.getContext("2d");
			var Blue2 = document.getElementById("blueLogo2");
			var Orange2 = document.getElementById("orangeLogo2");
			var Background = document.getElementById("background");
			ptx.drawImage(Background, 0, 0, 1920, 1080)
			ptx.font = "35px Verdana";
			ptx.fillStyle = "#f5f5f5";
			ptx.fillText(Blue1Name2, 435, 325)
			ptx.fillText(Blue2Name2, 435, 397)
			ptx.fillText(Blue3Name2, 435, 469)
			ptx.fillText(Blue4Name2, 435, 541)
			ptx.fillText(Orange1Name2, 435, 780)
			ptx.fillText(Orange2Name2, 435, 852)
			ptx.fillText(Orange3Name2, 435, 924)
			ptx.fillText(Orange4Name2, 435, 996)
			ptx.font = "bold 40px Verdana";
			ptx.textAlign = 'center';
			ptx.fillText(Blue1GP2, 820, 326)
			ptx.fillText(Blue2GP2, 820, 398)
			ptx.fillText(Blue3GP2, 820, 470)
			ptx.fillText(Blue4GP2, 820, 542)
			ptx.fillText(Orange1GP2, 820, 781)
			ptx.fillText(Orange2GP2, 820, 853)
			ptx.fillText(Orange3GP2, 820, 925)
			ptx.fillText(Orange4GP2, 820, 997)
			ptx.fillText(Blue1Goals2, 1050, 326)
			ptx.fillText(Blue2Goals2, 1050, 398)
			ptx.fillText(Blue3Goals2, 1050, 470)
			ptx.fillText(Blue4Goals2, 1050, 542)
			ptx.fillText(Orange1Goals2, 1050, 781)
			ptx.fillText(Orange2Goals2, 1050, 853)
			ptx.fillText(Orange3Goals2, 1050, 925)
			ptx.fillText(Orange4Goals2, 1050, 997)
			ptx.fillText(Blue1Assists2, 1233, 326)
			ptx.fillText(Blue2Assists2, 1233, 398)
			ptx.fillText(Blue3Assists2, 1233, 470)
			ptx.fillText(Blue4Assists2, 1233, 542)
			ptx.fillText(Orange1Assists2, 1233, 781)
			ptx.fillText(Orange2Assists2, 1233, 853)
			ptx.fillText(Orange3Assists2, 1233, 925)
			ptx.fillText(Orange4Assists2, 1233, 997)

			ptx.fillText(Blue1Shot2, 1422, 326)
			ptx.fillText(Blue2Shot2, 1422, 398)
			ptx.fillText(Blue3Shot2, 1422, 470)
			ptx.fillText(Blue4Shot2, 1422, 542)
			ptx.fillText(Orange1Shot2, 1422, 781)
			ptx.fillText(Orange2Shot2, 1422, 853)
			ptx.fillText(Orange3Shot2, 1422, 925)
			ptx.fillText(Orange4Shot2, 1422, 997)
			ptx.fillText(Blue1ShotPct2.toFixed(2) + '%', 1633, 326)
			ptx.fillText(Blue2ShotPct2.toFixed(2) + '%', 1633, 398)
			ptx.fillText(Blue3ShotPct2.toFixed(2) + '%', 1633, 470)
			ptx.fillText(Blue4ShotPct2.toFixed(2) + '%', 1633, 542)
			ptx.fillText(Orange1ShotPct2.toFixed(2) + '%', 1633, 781)
			ptx.fillText(Orange2ShotPct2.toFixed(2) + '%', 1633, 853)
			ptx.fillText(Orange3ShotPct2.toFixed(2) + '%', 1633, 925)
			ptx.fillText(Orange4ShotPct2.toFixed(2) + '%', 1633, 997)
			ptx.font = "italic 30px Verdana";
			ptx.fillStyle = "#f5f5f5";
			ptx.textAlign = "center";
			ptx.drawImage(Blue2, 63, 300, 200, 200)
			ptx.drawImage(Orange2, 63, 763, 200, 200)
			ptx.fillText(localStorage.getItem("BlueFran2"), 165, 550)
			ptx.fillText(localStorage.getItem("OrangeFran2"), 165, 1012)
			ptx.font = "bold 45px Verdana";
			ptx.fillStyle = "#0c1b3f";
			ptx.textAlign = "left";
			ptx.fillText(localStorage.getItem("BlueTeam2"), 30, 220)
			ptx.textAlign = "left"
			ptx.fillText(localStorage.getItem("OrangeTeam2"), 30, 676)


		}
		catch (error) {
			console.error(error);
		}
		//------------------------------------------------TEAM STATS GAME 1-------------------------------------------------//
		try {
			var t = document.getElementById("TeamImage1");
			var titx = t.getContext("2d");
			var Blue = document.getElementById("blueLogo");
			var Orange = document.getElementById("orangeLogo");
			var Background = document.getElementById("backgroundTS1");
			titx.drawImage(Background, 0, 0, 1920, 1080)


			var barWins = (((BlueWins / (BlueWins + OrangeWins)) * 100) * 599) / 100;
			var barLosses = (((BlueLosses / (BlueLosses + OrangeLosses)) * 100) * 599) / 100;
			var barGF = (((BlueGF / (BlueGF + OrangeGF)) * 100) * 599) / 100;
			var barGA = (((BlueGA / (BlueGA + OrangeGA)) * 100) * 599) / 100;
			var barSaves = (((BlueSaves / (BlueSaves + OrangeSaves)) * 100) * 599) / 100;
			var barSA = (((BlueSA / (BlueSA + OrangeSA)) * 100) * 599) / 100;
			var barSP = (((BlueSP / (BlueSP + OrangeSP)) * 100) * 599) / 100;
			titx.fillStyle = "#4ca9f6";
			titx.fillRect(660, 240, barWins, 50);
			titx.fillRect(660, 360, barLosses, 50);
			titx.fillRect(660, 480, barGF, 50);
			titx.fillRect(660, 600, barGA, 50);
			titx.fillRect(660, 720, barSaves, 50);
			titx.fillRect(660, 841, barSA, 50);
			titx.fillRect(660, 962, barSP, 50);



			titx.font = "bold 30px Verdana";
			titx.fillStyle = "#f5f5f5";
			titx.textAlign = 'right';
			titx.fillText(BlueWins, 630, 277)
			titx.fillText(BlueLosses, 630, 397)
			titx.fillText(BlueGF, 630, 517)
			titx.fillText(BlueGA, 630, 637)
			titx.fillText(BlueSaves, 630, 757)
			titx.fillText(BlueSA, 630, 878)
			titx.fillText(Number(BlueSP).toFixed(1) + ' %', 630, 1000)
			titx.textAlign = 'left';
			titx.fillText(OrangeWins, 1285, 277)
			titx.fillText(OrangeLosses, 1285, 397)
			titx.fillText(OrangeGF, 1285, 517)
			titx.fillText(OrangeGA, 1285, 637)
			titx.fillText(OrangeSaves, 1285, 757)
			titx.fillText(OrangeSA, 1285, 878)
			titx.fillText(Number(OrangeSP).toFixed(1) + ' %', 1285, 1000)
			titx.font = "italic 35px Verdana";
			titx.fillStyle = "#f5f5f5";
			titx.textAlign = "center";
			titx.drawImage(Blue, 135, 350, 276, 276)
			titx.drawImage(Orange, 1510, 350, 276, 276)
			titx.fillText(localStorage.getItem("BlueFran"), 273, 690)
			titx.textAlign = "center"
			titx.fillText(localStorage.getItem("OrangeFran"), 1647, 690)
			titx.font = "bold 40px Verdana";
			titx.fillStyle = "Black";
			titx.textAlign = "right";
			titx.fillText(localStorage.getItem("BlueTeam"), 400, 785)
			titx.textAlign = "left"
			titx.fillText(localStorage.getItem("OrangeTeam"), 1470, 785)
		} catch (error) {
			console.error(error);
		}

		//------------------------------------------------TEAM STATS GAME 2-------------------------------------------------//
		try {
			var t2 = document.getElementById("TeamImage2");
			var ti2tx = t2.getContext("2d");
			var Blue2 = document.getElementById("blueLogo2");
			var Orange2 = document.getElementById("orangeLogo2");
			var Background = document.getElementById("backgroundTS1");
			ti2tx.drawImage(Background, 0, 0, 1920, 1080)

			var barWins2 = (((BlueWins2 / (BlueWins2 + OrangeWins2)) * 100) * 599) / 100;
			var barLosses2 = (((BlueLosses2 / (BlueLosses2 + OrangeLosses2)) * 100) * 599) / 100;
			var barGF2 = (((BlueGF2 / (BlueGF2 + OrangeGF2)) * 100) * 599) / 100;
			var barGA2 = (((BlueGA2 / (BlueGA2 + OrangeGA2)) * 100) * 599) / 100;
			var barSaves2 = (((BlueSaves2 / (BlueSaves2 + OrangeSaves2)) * 100) * 599) / 100;
			var barSA2 = (((BlueSA2 / (BlueSA2 + OrangeSA2)) * 100) * 599) / 100;
			var barSP2 = (((BlueSP2 / (BlueSP2 + OrangeSP2)) * 100) * 599) / 100;
			ti2tx.fillStyle = "#4ca9f6";
			ti2tx.fillRect(660, 240, barWins2, 50);
			ti2tx.fillRect(660, 360, barLosses2, 50);
			ti2tx.fillRect(660, 480, barGF2, 50);
			ti2tx.fillRect(660, 600, barGA2, 50);
			ti2tx.fillRect(660, 720, barSaves2, 50);
			ti2tx.fillRect(660, 841, barSA2, 50);
			ti2tx.fillRect(660, 962, barSP2, 50);


			ti2tx.font = "bold 30px Verdana";
			ti2tx.fillStyle = "#f5f5f5";
			ti2tx.textAlign = 'right';
			ti2tx.fillText(BlueWins2, 630, 277)
			ti2tx.fillText(BlueLosses2, 630, 397)
			ti2tx.fillText(BlueGF2, 630, 517)
			ti2tx.fillText(BlueGA2, 630, 637)
			ti2tx.fillText(BlueSaves2, 630, 757)
			ti2tx.fillText(BlueSA2, 630, 878)
			ti2tx.fillText(Number(BlueSP2).toFixed(1) + '%', 630, 1000)
			ti2tx.textAlign = 'left';
			ti2tx.fillText(OrangeWins2, 1285, 277)
			ti2tx.fillText(OrangeLosses2, 1285, 397)
			ti2tx.fillText(OrangeGF2, 1285, 517)
			ti2tx.fillText(OrangeGA2, 1285, 637)
			ti2tx.fillText(OrangeSaves2, 1285, 757)
			ti2tx.fillText(OrangeSA2, 1285, 878)
			ti2tx.fillText(Number(OrangeSP2).toFixed(1) + '%', 1285, 1000)
			ti2tx.font = "italic 35px Verdana";
			ti2tx.fillStyle = "#f5f5f5";
			ti2tx.textAlign = "center";
			ti2tx.drawImage(Blue2, 135, 350, 276, 276)
			ti2tx.drawImage(Orange2, 1510, 350, 276, 276)
			ti2tx.fillText(localStorage.getItem("BlueFran2"), 273, 690)
			ti2tx.fillText(localStorage.getItem("OrangeFran2"), 1647, 690)
			ti2tx.font = "bold 40px Verdana";
			ti2tx.fillStyle = "black";
			ti2tx.textAlign = "right";
			ti2tx.fillText(localStorage.getItem("BlueTeam2"), 400, 785)
			ti2tx.textAlign = "left"
			ti2tx.fillText(localStorage.getItem("OrangeTeam2"), 1470, 785)
		} catch (error) {
			console.error(error);
		}

		//-----------------------------------------VS GAME 1---------------------------------------------------------//
		try {
			var v = document.getElementById("VS1");
			var vs1tx = v.getContext("2d");
			var Blue = document.getElementById("blueLogo");
			var Orange = document.getElementById("orangeLogo");
			var Background = document.getElementById("backgroundVS1");
			vs1tx.drawImage(Background, 0, 0, 1920, 1080)
			vs1tx.font = "60px Verdana";
			vs1tx.fillStyle = "#f5f5f5";
			vs1tx.textAlign = 'center';
			vs1tx.shadowColor = "black";
			vs1tx.shadowBlur = 20;
			vs1tx.shadowOffsetX = 5;
			vs1tx.shadowOffsetY = 5;
			vs1tx.fillText(localStorage.getItem("tier"), 960, 900)
			vs1tx.font = "italic 35px Verdana";
			vs1tx.fillStyle = "#f5f5f5";
			vs1tx.textAlign = "right";
			vs1tx.shadowColor = "black";
			vs1tx.shadowBlur = 20;
			vs1tx.shadowOffsetX = 5;
			vs1tx.shadowOffsetY = 5;
			vs1tx.drawImage(Blue, 200, 500, 425, 425)
			vs1tx.drawImage(Orange, 1272, 500, 425, 425)
			vs1tx.textAlign = "left"
			vs1tx.font = "italic bold 55px Verdana";
			vs1tx.fillStyle = "#f5f5f5";
			vs1tx.textAlign = "center";
			vs1tx.fillText(localStorage.getItem("BlueTeam"), 412, 1005)
			vs1tx.textAlign = "center"
			vs1tx.fillText(localStorage.getItem("OrangeTeam"), 1485, 1005)
		} catch (error) {
			console.error(error);
		}

		//------------------------------------------------VS GAME 2-----------------------------------------------------------------// 
		try {
			var v2 = document.getElementById("VS2");
			var vs2tx = v2.getContext("2d");
			var Blue2 = document.getElementById("blueLogo2");
			var Orange2 = document.getElementById("orangeLogo2");
			var Background2 = document.getElementById("backgroundVS1");
			vs2tx.drawImage(Background2, 0, 0, 1920, 1080)
			vs2tx.font = "60px Verdana";
			vs2tx.fillStyle = "#f5f5f5";
			vs2tx.textAlign = 'center';
			vs2tx.shadowColor = "black";
			vs2tx.shadowBlur = 20;
			vs2tx.shadowOffsetX = 5;
			vs2tx.shadowOffsetY = 5;
			vs2tx.fillText(localStorage.getItem("tier2"), 960, 900)
			vs2tx.font = "italic 35px Verdana";
			vs2tx.fillStyle = "#f5f5f5";
			vs2tx.textAlign = "right";
			vs2tx.shadowColor = "black";
			vs2tx.shadowBlur = 20;
			vs2tx.shadowOffsetX = 5;
			vs2tx.shadowOffsetY = 5;
			vs2tx.drawImage(Blue2, 200, 500, 425, 425)
			vs2tx.drawImage(Orange2, 1272, 500, 425, 425)
			//vs2tx.fillText(localStorage.getItem("BlueFran"), 655, 517)
			vs2tx.textAlign = "left"
			//vs2tx.fillText(localStorage.getItem("OrangeFran"), 1261, 1058)
			vs2tx.font = "italic bold 55px Verdana";
			vs2tx.fillStyle = "#f5f5f5";
			vs2tx.textAlign = "center";
			vs2tx.fillText(localStorage.getItem("BlueTeam2"), 412, 1005)
			vs2tx.textAlign = "center"
			vs2tx.fillText(localStorage.getItem("OrangeTeam2"), 1485, 1005)
		} catch (error) {
			console.error(error);
		}
		//------------------------------------------------Tonights Schedule-----------------------------------------------------------------// 
		try {
			var ts = document.getElementById("Tonight");
			var tstx = ts.getContext("2d");
			var Blue = document.getElementById("blueLogo");
			var Orange = document.getElementById("orangeLogo");
			var Blue2 = document.getElementById("blueLogo2");
			var Orange2 = document.getElementById("orangeLogo2");
			var BackgroundTonight = document.getElementById("backgroundTonight");
			tstx.drawImage(BackgroundTonight, 0, 0, 1920, 1080)
			tstx.font = "bold 35px Verdana";
			tstx.fillStyle = "#ffdb00";
			tstx.textAlign = 'left';
			tstx.fillText(localStorage.getItem("tier"), 685, 268)
			tstx.fillText(localStorage.getItem("tier2"), 685, 607)
			tstx.font = "25px Veranda";
			tstx.fillStyle = "#000000";


			//tstx.fillText(localStorage.getItem("BlueFran"), 655, 517)
			tstx.textAlign = "left"
			//tstx.fillText(localStorage.getItem("OrangeFran"), 1261, 1058)
			tstx.font = "35px Veranda";
			tstx.fillStyle = "#f0f0f0";
			tstx.textAlign = "left";
			var home = localStorage.getItem("BlueTeam")
			tstx.fillText(home, 685, 411)
			tstx.textAlign = "left"
			var away = localStorage.getItem("OrangeTeam")
			tstx.fillText(away, 685, 475)
			tstx.font = "35px Veranda";
			tstx.fillStyle = "#f0f0f0";
			tstx.textAlign = "left";
			var vs = "vs"
			tstx.fillText(vs, 685, 441)
			tstx.font = "35px Veranda";
			tstx.fillStyle = "#f0f0f0";
			tstx.textAlign = "left";
			var home2 = localStorage.getItem("BlueTeam2")
			tstx.fillText(home2, 685, 753)
			tstx.textAlign = "left"
			var away2 = localStorage.getItem("OrangeTeam2")
			tstx.fillText(away2, 685, 817)
			tstx.font = "35px Veranda";
			tstx.fillStyle = "#f0f0f0";
			tstx.textAlign = "left";
			var vs2 = "vs"
			tstx.fillText(vs2, 685, 783)

			tstx.shadowColor = "black";
			tstx.shadowBlur = 20;
			tstx.shadowOffsetX = 5;
			tstx.shadowOffsetY = 0;
			tstx.drawImage(Blue, 0, 29, 212, 156, 1030, 214, 426, 308)
			tstx.drawImage(Orange, 0, 29, 212, 156, 1495, 214, 426, 308)
			tstx.drawImage(Blue2, 0, 29, 212, 156, 1030, 561, 426, 308)
			tstx.drawImage(Orange2, 0, 29, 212, 156, 1495, 561, 426, 308)


		} catch (error) {
			console.error(error);
		}

	}, 500)

}

var blueN = [];
var blueF = [];
function blueTeamName() {
	blueN = localStorage.getItem("BlueTeam");
	blueF = localStorage.getItem("BlueFran");
	$('#blueName').text(blueN);
	$('#blueLogo').src = "./assets/logos/Blue Logos/" + blueF + ".png";
}


var orangeN = [];
var orangeF = [];
function orangeTeamName() {
	orangeN = localStorage.getItem("OrangeTeam");
	orangeF = localStorage.getItem("OrangeTeam");
	//console.log(orangeN)
	$('#orangeName').text(orangeN);
	$('#orangeLogo').src = "./assets/logos/Orange Logos/" + orangeF + ".png";
}

function live() {
	var sel = document.getElementById("blue-team");
	var bt = sel.options[sel.selectedIndex].label;
	var bf = sel.options[sel.selectedIndex].value;
	//var plb= sel.options[sel.selectedIndex];
	//console.log(plb)
	localStorage.setItem("BlueTeam", bt);
	localStorage.setItem("BlueFran", bf);
	//localStorage.setItem("BluePlayers", plb);


	var sel1 = document.getElementById("orange-team");
	var ot = sel1.options[sel1.selectedIndex].label;
	var of = sel1.options[sel1.selectedIndex].value;
	//console.log(of)
	localStorage.setItem("OrangeTeam", ot);
	localStorage.setItem("OrangeFran", of);

	localStorage.setItem("tier", document.getElementById("tier-dropdown").value);

	var selB2 = document.getElementById("blue-team2");
	var bt2 = selB2.options[selB2.selectedIndex].label;
	var bf2 = selB2.options[selB2.selectedIndex].value;
	//var plb= sel.options[sel.selectedIndex];
	//console.log(plb)
	localStorage.setItem("BlueTeam2", bt2);
	localStorage.setItem("BlueFran2", bf2);
	//localStorage.setItem("BluePlayers", plb);


	var sel12 = document.getElementById("orange-team2");
	var ot2 = sel12.options[sel12.selectedIndex].label;
	var of2 = sel12.options[sel12.selectedIndex].value;
	//console.log(of)
	localStorage.setItem("OrangeTeam2", ot2);
	localStorage.setItem("OrangeFran2", of2);

	localStorage.setItem("tier2", document.getElementById("tier-dropdown2").value);

	orangeTeamName();
	blueTeamName();
	const url = 'https://api.rscstream.com/';

	var blue1 = localStorage.getItem("BlueTeam");
	var blue2 = localStorage.getItem("BlueTeam2");
	var orange1 = localStorage.getItem("OrangeTeam");
	var orange2 = localStorage.getItem("OrangeTeam2");

	Promise.all([
		fetch(url + 'players/' + blue1),
		fetch(url + 'players/' + blue2),
		fetch(url + 'players/' + orange1),
		fetch(url + 'players/' + orange2),

	]).then(function (responses) {
		return Promise.all(responses.map(function (response) {
			return response.json();

		}));
	}).then(function (data) {
		//console.log(data);
		BlueResults = []
		BlueResults2 = []
		OrangeResults = []
		OrangeResults2 = []
		BlueResults.push(data[0])
		BlueResults2.push(data[1])
		OrangeResults.push(data[2])
		OrangeResults2.push(data[3])
		BlueResults[0].sort(function (a, b) { return b.goals - a.goals });
		BlueResults2[0].sort(function (a, b) { return b.goals - a.goals });
		OrangeResults[0].sort(function (a, b) { return b.goals - a.goals });
		OrangeResults2[0].sort(function (a, b) { return b.goals - a.goals });
		//console.log(BlueResults[0])

		setTimeout(() => {
			myCanvas.width += 0;
			TeamImage1.width += 0;
			VS1.width += 0;
			myCanvas2.width += 0;
			TeamImage2.width += 0;
			VS2.width += 0;
			Tonight.width += 0;
			loadGame1()
		}, 500)
	})
		.catch(function (error) {
			console.log('Request failed', error)
		});
}

var teamsList = [];
let dropdownBlue = document.getElementById('blue-team');
let dropdownOrange = document.getElementById('orange-team');
let dropdown = document.getElementById('tier-dropdown');

var teamsList2 = [];
let dropdownBlue2 = document.getElementById('blue-team2');
let dropdownOrange2 = document.getElementById('orange-team2');
let dropdown2 = document.getElementById('tier-dropdown2');

//dropdown.length = 0;
dropdownBlue.length = 0;
dropdownOrange.length = 0;

//dropdown2.length = 0;
dropdownBlue2.length = 0;
dropdownOrange2.length = 0;

//let defaultOption = document.createElement('option');
//defaultOption.text = 'Tier';

let defaultOptionBlue = document.createElement('option');
defaultOptionBlue.text = 'Blue Team';

let defaultOptionOrange = document.createElement('option');
defaultOptionOrange.text = 'Orange Team';

//dropdown.add(defaultOption);
//dropdown.selectedIndex = 0;

dropdownBlue.add(defaultOptionBlue);
dropdownBlue.selectedIndex = 0;

dropdownOrange.add(defaultOptionOrange);
dropdownOrange.selectedIndex = 0;

//let defaultOption2 = document.createElement('option');
//defaultOption2.text = 'Tier';

let defaultOptionBlue2 = document.createElement('option');
defaultOptionBlue2.text = 'Blue Team';

let defaultOptionOrange2 = document.createElement('option');
defaultOptionOrange2.text = 'Orange Team';

//dropdown2.add(defaultOption2);
//dropdown2.selectedIndex = 0;

dropdownBlue2.add(defaultOptionBlue2);
dropdownBlue2.selectedIndex = 0;

dropdownOrange2.add(defaultOptionOrange2);
dropdownOrange2.selectedIndex = 0;

function teams() {
	const url = 'https://api.rscstream.com/';

	var teams = [];
	var id = [];
	var tier = document.getElementById("tier-dropdown").value;
	//console.log(tier)
	id.length = 0;

	fetch(url + 'teams/' + tier)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			game1Tier.push(data)
			game1TierO.push(data)
			//console.log(data);
			teams.length = 0;
			let teamArray = [];
			teamArray = []
			//console.log(teamArray)
			for (let i = 0; i < data.length; i++) {
				teamArray.push(
					{ "label": data[i].teamName.toString(), "value": data[i].franchise.toString() }
				); if (i === teams.length - 1)

					console.log(teamArray)

				teamArray.sort(function (a, b) {
					if (a.label < b.label) { return -1; }
					if (a.label > b.label) { return 1; }
					return 0;
				})

			}

			let option1 = []
			option1 = []
			let option = [];
			option = [];

			//document.getElementById("orange-team").options.length = 0;
			let dropdownBlue = document.getElementById('blue-team');
			let dropdownOrange = document.getElementById('orange-team');

			dropdownBlue.length = 0;
			dropdownOrange.length = 0;

			let defaultOptionBlue = document.createElement('option');
			defaultOptionBlue.text = 'Blue Team';

			let defaultOptionOrange = document.createElement('option');
			defaultOptionOrange.text = 'Orange Team';

			dropdownBlue.add(defaultOptionBlue);
			dropdownBlue.selectedIndex = 0;

			dropdownOrange.add(defaultOptionOrange);
			dropdownOrange.selectedIndex = 0;

			for (let i = 0; i < teamArray.length; i++) {
				option = document.createElement('option');
				option.value = teamArray[i].value;
				option.text = teamArray[i].label;


				dropdownOrange.add(option);
			}
			for (let i = 0; i < teamArray.length; i++) {
				option1 = document.createElement('option');
				option1.text = teamArray[i].label;
				option1.value = teamArray[i].value;
				dropdownBlue.add(option1);



			}

		}).catch(function (error) {
			console.log('Request failed', error)
		});
}

function teams2() {
	const url = 'https://api.rscstream.com/';
	var teams2 = [];
	var id2 = [];
	var tier2 = document.getElementById("tier-dropdown2").value;
	console.log(tier2)
	id2.length = 0;

	fetch(url + 'teams/' + tier2)
		.then(function (response) {
			return response.json();
		})
		.then(function (data2) {
			game2Tier.push(data2)
			game2TierO.push(data2)
			console.log(data2);
			teams2.length = 0;
			let teamArray2 = [];
			teamArray2 = []
			console.log(teamArray2)
			for (let i = 0; i < data2.length; i++) {
				teamArray2.push(
					{ "label": data2[i].teamName.toString(), "value": data2[i].franchise.toString() }
				); if (i === teams.length - 1)

					//console.log(teamArray2)

					teamArray2.sort(function (a, b) {
						if (a.label < b.label) { return -1; }
						if (a.label > b.label) { return 1; }
						return 0;
					})


			}
			let option12 = []
			option12 = []
			let option2 = [];
			option2 = [];

			//document.getElementById("orange-team").options.length = 0;
			let dropdownBlue2 = document.getElementById('blue-team2');
			let dropdownOrange2 = document.getElementById('orange-team2');

			dropdownBlue2.length = 0;
			dropdownOrange2.length = 0;

			let defaultOptionBlue2 = document.createElement('option');
			defaultOptionBlue2.text = 'Blue Team';

			let defaultOptionOrange2 = document.createElement('option');
			defaultOptionOrange2.text = 'Orange Team';

			dropdownBlue2.add(defaultOptionBlue2);
			dropdownBlue2.selectedIndex = 0;

			dropdownOrange2.add(defaultOptionOrange2);
			dropdownOrange2.selectedIndex = 0;

			for (let i = 0; i < teamArray2.length; i++) {
				option2 = document.createElement('option');
				option2.value = teamArray2[i].value;
				option2.text = teamArray2[i].label;


				dropdownOrange2.add(option2);
			}
			for (let i = 0; i < teamArray2.length; i++) {
				option12 = document.createElement('option');
				option12.text = teamArray2[i].label;
				option12.value = teamArray2[i].value;
				dropdownBlue2.add(option12);



			}
		})
		.catch(function (error) {
			console.log('Request failed', error)
		});
}

