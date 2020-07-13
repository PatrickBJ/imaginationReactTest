function randomInt(min, max) {
	return min + Math.floor((max - min) * Math.random());
}

function encontraIndexacao(i){
	if(i>13)
		return encontraIndexacao(i-13);
	return i;
}

function buscaRatioIndex(index){
	switch (index) {
		case 1:
		case 10:
			return 1.5;
		case 2:
			return 0.667;
		case 8:
			return 1.111;
		case 9:
			return 0.727;
		case 11:
			return 1.923;
		case 12:
			return 0.947;
		case 13:
			return 1.154;
		default:
			return 1;
	}
}

export {randomInt, encontraIndexacao, buscaRatioIndex};