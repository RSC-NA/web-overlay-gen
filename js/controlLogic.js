var BlueTeamWins = [];
var OrangeTeamWins = [];

var team = [];
var goalAssist = [];
function orangeWins() {
	var OW = localStorage.getItem("OrangeWins")
	$('#orangeSeries').text(OW);
	if (OW === '0') {
		$('#orange1').addClass('invisible');
		$('#orange2').addClass('invisible');
		$('#orange3').addClass('invisible');
		$('#orange4').addClass('invisible');
	} else if (OW === '1') {
		$('#orange1').removeClass('invisible');
		$('#orange2').addClass('invisible');
		$('#orange3').addClass('invisible');
		$('#orange4').addClass('invisible');
	} else if (OW === '2') {
		$('#orange1').removeClass('invisible');
		$('#orange2').removeClass('invisible');
		$('#orange3').addClass('invisible');
		$('#orange4').addClass('invisible');
	} else if (OW === '3') {
		$('#orange1').removeClass('invisible');
		$('#orange2').removeClass('invisible');
		$('#orange3').removeClass('invisible');
		$('#orange4').addClass('invisible');
	} else if (OW === '4') {
		$('#orange1').removeClass('invisible');
		$('#orange2').removeClass('invisible');
		$('#orange3').removeClass('invisible');
		$('#orange4').removeClass('invisible');
	}
}

function blueWins() {
	var BW = localStorage.getItem("BlueWins")
	$('#blueSeries').text(BW);
	if (BW === '0') {
		$('#blue1').addClass('invisible');
		$('#blue2').addClass('invisible');
		$('#blue3').addClass('invisible');
		$('#blue4').addClass('invisible');
	} else if (BW === '1') {
		$('#blue1').removeClass('invisible');
		$('#blue2').addClass('invisible');
		$('#blue3').addClass('invisible');
		$('#blue4').addClass('invisible');
	} else if (BW === '2') {
		$('#blue1').removeClass('invisible');
		$('#blue2').removeClass('invisible');
		$('#blue3').addClass('invisible');
		$('#blue4').addClass('invisible');
	} else if (BW === '3') {
		$('#blue1').removeClass('invisible');
		$('#blue2').removeClass('invisible');
		$('#blue3').removeClass('invisible');
		$('#blue4').addClass('invisible');
	} else if (BW === '4') {
		$('#blue1').removeClass('invisible');
		$('#blue2').removeClass('invisible');
		$('#blue3').removeClass('invisible');
		$('#blue4').removeClass('invisible');
	}
}

function seriesback() {
	var SB = localStorage.getItem("series")
	if (SB === '4GS') {
		$('#TierOvelay1').removeClass('invisible');
		$('#bo5').addClass('invisible');
		$('#bo3').addClass('invisible');

	} else if (SB === 'BO5') {
		$('#TierOvelay1').addClass('invisible');
		$('#bo5').removeClass('invisible');
		$('#bo3').addClass('invisible');
	} else if (SB === 'BO3') {
		$('#TierOvelay1').addClass('invisible');
		$('#bo5').addClass('invisible');
		$('#bo3').removeClass('invisible');
	} else if (SB === 'BO7') {
		$('#TierOvelay1').removeClass('invisible');
		$('#bo5').addClass('invisible');
		$('#bo3').addClass('invisible');
	}
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