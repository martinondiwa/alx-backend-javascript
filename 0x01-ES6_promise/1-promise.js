function getFullResponseFromAPI(success){

	return new promise ((resolve,reject)=>{
		if (success){
			resolve(status: 200, body: 'Success')
		} else {
			reject (new error('The fake API is not working currently'));
		}
})
}


console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));
