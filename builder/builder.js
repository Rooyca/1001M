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
        const content = JSON.stringify(movieToday);
        fs.writeFileSync('current.json', content);
        break;
    }
}
