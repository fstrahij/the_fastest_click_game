export function Countdown(remain) {
	return new Promise( (resolve, reject) => {
		setTimeout( () => {
			resolve(remain);
		}, 1000);
	});
}