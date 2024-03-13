// Function to generate sequential numbers
function generateSequentialNumbers(startDate, endDate) {
    const result = [];
    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
        result.push(currentDate.getTime());
        currentDate.setDate(currentDate.getDate() + 1);
    }
    return result;
}

function getMovieFromJsonAtIndex(index) {
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

// Read the HTML template once
const fs = require('fs');
let html = fs.readFileSync('./src/index.html', 'utf8');

for (let index = 0; index < sequentialNumbers.length; index++) {
    const number = sequentialNumbers[index];
    const date = new Date(number);
    if (date.toISOString().split('T')[0] === formattedDate) {
        console.log(`Today's number is: ${index + 1}`);
        const movieToday = getMovieFromJsonAtIndex(index);
        console.log(`Today's movie: ${movieToday.title}`);

        // Replace placeholders with actual data
        html = html.replace(/__POSTER__|__TITLE__|__DIRECTOR__|__DESCRIPTION__|__YEAR__|__TAGS__|__LENGTH__|__DATE__/g, match => {
            switch (match) {
                case '__POSTER__':
                    return movieToday.img;
                case '__TITLE__':
                    return movieToday.title;
                case '__DIRECTOR__':
                    return movieToday.director;
                case '__DESCRIPTION__':
                    return movieToday.desc;
                case '__YEAR__':
                    return movieToday.year;
                case '__TAGS__':
                    return movieToday.tags;
                case '__LENGTH__':
                    return movieToday.length;
                case '__DATE__':
                    return new Date().toDateString();
                default:
                    return match;
            }
        });

        break;
    }
}

// Write the populated HTML
fs.writeFileSync('./src/index.html', html);