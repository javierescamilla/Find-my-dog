function showFoundDogs(){
	fetch('/blog-posts')
		.then( response => {

			if ( response.ok ){
                return response.json();
			}
			throw new Error ( response.statusText );
		})
		.then( responseJSON => {          
			for ( let i = 0; i < responseJSON.length; i ++ ){
                $('.Found_dogs_section').find('ul')
                    .append(`<b>${responseJSON[i].Breed}</b>`)
			}
		})
		.catch( err => {
			console.log( err );
		});
}

//showFoundDogs()