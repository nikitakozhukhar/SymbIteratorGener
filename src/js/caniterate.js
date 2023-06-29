function canIterate(object) {
	if (object !== null) {
		
		console.log(typeof object[Symbol.iterator] === 'function'); 
	} else {
		console.log(false);
	}
}

canIterate(new Map()); // true
canIterate(new Set()); // true
canIterate(null); // false
canIterate(10); // false
canIterate("Netology"); // true
 