export function Countdown(remain) {
	return new Promise( (resolve, reject) => {
		setTimeout( () => {
			if (remain > 0) {
				resolve(remain);
			}else{
				resolve("PLAY!");
			}
		}, 1000);
	});
}