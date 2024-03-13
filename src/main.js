const title = document.querySelector('.heading__primary');
const director = document.querySelector('.heading__secondary');
const description = document.querySelector('.movie__description');
const year = document.querySelector('.year');
const tag = document.querySelector('.tag');
const length = document.querySelector('.length');
const date = document.querySelector('.movie__date');
const poster = document.querySelector('.movie__img');

const GetInfo = () => {
	fetch('current.json')
		.then(response => response.json())
		.then(data => {
			poster.src = data.img;
			title.innerHTML = data.title;
			director.innerHTML = data.director;
			description.innerHTML = data.desc;
			year.innerHTML = "📅 "+data.year;
			length.innerHTML = "🕒 "+data.length;
			tag.innerHTML = data.tags;
			date.innerHTML = new Date().toDateString();
		})
		.catch(error => {
			console.error('Error:', error);
		});
}
GetInfo();