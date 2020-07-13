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
		case 8:
		case 10:
		case 11:
		case 12:
			return 'h';
		case 2:
		case 9:
		case 13:
			return 'v'
		default:
			return '*'
	}
}

function ajustaRatio(i, img){
	// let defaultRatio = {width: "100%", height: "auto"};
	let defaultRatio = {};
	
	//verificar tipo de ratio da imagem h (horizontal) | v (vertical) | * (quadrada)
	const ratioIndex = buscaRatioIndex(i);
	
	// imagem tipo horizontal
	// if(img.width > img.height)
	// {
	// 	if(ratioIndex === 'v' || ratioIndex === '*')
	// 		defaultRatio = {width: "auto", height: "100%"};
	// }
	// //imagem tipo vertical
	// else if(img.width < img.height){
	// 	if(ratioIndex === 'h')
	// 		defaultRatio = {width: "auto", height: "100%"};
	// }
	// // imagem quadrada
	// else{
	// 	if(ratioIndex === 'v' || ratioIndex === 'h')
	// 		defaultRatio = {width: "auto", height: "100%"};
	// }
	return defaultRatio;
}

export {randomInt, encontraIndexacao, ajustaRatio, buscaRatioIndex};