var toFishCoin = function(ref){

	if(ref === ""){ //cell.fish
		console.log("in cellfish");
		$('.fishcoin').remove();
		// $('.cellfish').show();

	}else if(ref === "http://fishcoin.club/"){ //fishcoin domain
		console.log("in fishcoin");
		$('.cellfish').remove();
		// $('.fishcoin').show();
	}
}
