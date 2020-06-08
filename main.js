// You should NOT change the HTML or CSS in this project (at least until you reach
// the bonus objectives). Focus on the JavaScript.

const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")

// The following variable holds your OUTER ARRAY of row elements.
// Later you will need an OUTER LOOP to loop over the individual elements within
// this array.
const rowElements = document.querySelectorAll(".row")

// When you call the function below, it will get and return an INNER ARRAY
// containing the cell elements for a given row.
// Call this function from WITHIN your row elements loop. Then you will, in turn,
// need to loop over the resulting cell elements. But where should this whole
// NESTED LOOP go? Think through the user's experience: when should WHAT happen? 
function getCellElements(currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
}


// YOUR CODE GOES HERE
replaceAllButton.addEventListener('click', function () {
    let theTypo = findInput.value
    let theEdit = replaceInput.value
    for (let itemIndex = 0; itemIndex < rowElements.length; itemIndex += 1) {
        let actualRowElement = rowElements[itemIndex];
        //console.log(actualRowElement)
        let cellElements = getCellElements(actualRowElement)
        //console.log(cellContent) this is like an array inside the other array
        for (let cellIndex = 0; cellIndex < cellElements.length; cellIndex += 1) {
            //console.log(cellContent)
            let actualCellElement = cellElements[cellIndex]
            //console.log(actualCellElement)
            let innerHTML = actualCellElement.innerHTML
            //console.log(innerHTML)

            //regex is a little too advanced for use right now
            while (innerHTML.includes(theTypo)) {
                innerHTML = innerHTML.replace(theTypo, theEdit)
            }
            actualCellElement.innerHTML = innerHTML
        }
    }
})

// One last thing: dedicate very careful attention to using variables and
// naming them accurately.
// And when you change the value you are assigning to a variable, don't
// forget to consider changing the name to reflect the change you made! It
// is very easy to get confused when you are working inside NESTED LOOPS.
// The best of us do. And unnecessary confusion during the process of 
// developing your code means wasted time.
//
// The time-cost of structuring and naming things well is FAR less than the
// time-cost of ignoring the quality and readability of your code.
//
// You can, of course, remove any comments in this starter project once
// you have read them, if you prefer.
