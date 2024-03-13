// Function to generate sequential numbers
function generateSequentialNumbers(startDate, endDate) {
    let result = [];
    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
        result.push(currentDate.getTime());
        currentDate.setDate(currentDate.getDate() + 1);
    }
    return result;
}

function getMovieFromJsonAtIndex(index){
    const movies = require('./movies.json');
    return movies['movies'][index];
}

// Set the start and end dates
const startDate = new Date('2024-03-13'); // Current date
const endDate = new Date('2027-05-15'); // End date

// Generate sequential numbers
const sequentialNumbers = generateSequentialNumbers(startDate, endDate);

const today = new Date();
const formattedDate = today.toISOString().split('T')[0];

for (let index = 0; index < sequentialNumbers.length; index++) {
    const number = sequentialNumbers[index];
    const date = new Date(number);
    if (date.toISOString().split('T')[0] === formattedDate) {
        console.log(`Today's number is: ${index+1}`);
        const movieToday = getMovieFromJsonAtIndex(index);
        console.log(`Today's movie: ${movieToday.title}`);
        const fs = require('fs');

        // Read data from current.json
        const data = JSON.parse(movieToday);

        // Read the HTML template
        let html = fs.readFileSync('./src/index.html', 'utf8');

        // Replace placeholders with actual data
        html = html.replace('__POSTER__', data.img);
        html = html.replace('__TITLE__', data.title);
        html = html.replace('__DIRECTOR__', data.director);
        html = html.replace('__DESCRIPTION__', data.desc);
        html = html.replace('__YEAR__', data.year);
        html = html.replace('__TAGS__', data.tags);
        html = html.replace('__LENGTH__', data.length);
        html = html.replace('__DATE__', new Date().toDateString());

        // Write the populated HTML to a new file
        fs.writeFileSync('./src/index.html', html);
        break;
    }
}
