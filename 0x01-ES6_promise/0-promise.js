function getResponseFromAPI() 

    return  new promise ((resolve, reject)=>{
	    resolve(0);
    })
}


const response = getResponseFromAPI();
console.log(response instanceof Promise);
