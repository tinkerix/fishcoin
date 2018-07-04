var toFishCoin = function(domain){

	if(domain == "cell.fish"){ //cell.fish
		console.log("in cellfish");
		$('.fishcoin').remove();
		// $('.cellfish').show();

	}else if(domain === "fishcoin.gold"){ //fishcoin domain
		console.log("in fishcoin");
		$('.cellfish').remove();
		// $('.fishcoin').show();
	}
}
