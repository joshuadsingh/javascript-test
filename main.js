/*
 * Write a function that prints the temperature closest to 0 among input data.
 * If two numbers are equally close to zero, positive integer has to be considered closest to zero (for instance, if the temperatures are -5 and 5, then display 5)
*/
const temps = [
    '1 -1 -3 3 2',
    '-4 -2 -111',
    '12 -1 3 6 2 9',
    '12 2 6 9 -2 7',
    '-5 -4 -2 7 -20 4 2 18 11 5',
    ''
];
// ---

// Assuming only numbers separated by spaces will be in the input data

// Receive string of temps one after each other
function outputTemp(tempRow) {

    // Return 0 for edge cases
    if (!tempRow || tempRow.includes(' 0 ')) { return 0; };

    // Split the string row by spaces to create an array. Then, map through the array and convert the strings to numbers.
    const convertedToArray = tempRow.split(' ').map(x => +x);

    // Use reduce to compare the absolute values of the previous and current numbers
    const closestNumber = convertedToArray.reduce((prev, curr) => {
        // Keep the smaller value when comparing
        if (Math.abs(curr) < Math.abs(prev)) {
            return curr;
            // Keep the absolute value if both values are the same
        } else if (Math.abs(curr) === Math.abs(prev)) {
            return Math.abs(curr);
        } else {
            return prev;
        };
    })

    // Must output Number
    return closestNumber;
}