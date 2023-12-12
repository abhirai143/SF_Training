
import('./moviesPlay.js')
	.then(res => {
		console.log('data imported into data constant');
		data = res;
		run();
	});

function run() {
	const movies = data.movies;
	console.log('Number of movies: ' + movies.length);
	// for (let i = 0; i < movies.length; i++) {
	// 	// console.log(movies[i].originalLanguage);
	// 	let tableHTML = "<table class='ui celled table'>";
	// 	tableHTML += "<thead><tr><th>Language</th><th>Count</th></tr></thead>";
	// 	tableHTML += "<tbody>";
	// 	tableHTML += `<tr><td>${movies[i].originalLanguage} (${movies[i].originalLanguage})</td></tr>`;	
	// 	tableHTML += "</tbody></table>";
	// 	document.body.innerHTML = tableHTML;

		
	// }
	const movieInfoDiv = document.getElementById('table');
	let tableHTML = '';
	const mpp = movies.map((object) =>{
		console.log(object)
		tableHTML += "<thead><tr><th>Language</th><th>Count</th></tr></thead>";
		tableHTML += "<tbody>";
		tableHTML += `<tr><td>${object.originalLanguage} (${object.spokenLanguages})</td><td>here i have to display count</td></tr>`;	
		tableHTML += "</tbody>"
	})
	movieInfoDiv.innerHTML = "<table class='ui celled table'>" + tableHTML +"</table>";

}
