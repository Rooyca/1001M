const title = document.querySelector('.heading__primary');
const director = document.querySelector('.heading__secondary');
const description = document.querySelector('.movie__description');
const year = document.querySelector('.year');
const tag1 = document.querySelector('.tag1');
const tag2 = document.querySelector('.tag2');
const length = document.querySelector('.length');
const date = document.querySelector('.movie__date');

const GetInfo = () => {
	fetch('current.json')
		.then(response => response.json())
		.then(data => {
			console.log(data);
			title.innerHTML = data.title;
			director.innerHTML = data.director;
			description.innerHTML = data.desc;
			year.innerHTML = "📅 "+data.year;
			length.innerHTML = "🕒 "+data.length;

			for (let i = 0; i < data.tags.length; i++) {
				if (i === 0) {
					tag1.innerHTML = "🏷️ #"+data.tags[i];
				} else {
					tag2.innerHTML = "🏷️ #"+data.tags[i];
				}
			}
			date.innerHTML = new Date().toDateString();
		})
		.catch(error => {
			console.error('Error:', error);
		});
}
GetInfo();