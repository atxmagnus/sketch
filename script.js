function generateGrid() {
    for (let i = 0; i < Math.pow(input, 2); i++) {
        let gridDiv = document.createElement('div');
        gridDiv.style.backgroundColor = "white";
        gridDiv.style.width = 100 / input + "%";
        gridDiv.style.height = 100 / input + "%";
        gridDiv.style.margin = "-1px";
        gridDiv.style.border = "1px solid magenta"
        tempDoc.appendChild(gridDiv);
        gridDiv.addEventListener("mouseover", function () {
            gridDiv.style.backgroundColor = "magenta";
        });
    }
    container.appendChild(tempDoc);

};


function removeChilds(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


let tempDoc = document.createDocumentFragment();
const btnCgNum = document.createElement('button');
btnCgNum.textContent = "Change grid";
document.body.insertBefore(btnCgNum, document.getElementById("container"));
let input = 8;
btnCgNum.addEventListener('click', function () {
    input = prompt("Enter the number of squares in the side (100 at max):", 8);
    if (input > 100)
        input = 100;
    removeChilds(container);
    generateGrid();
});
const container = document.getElementById("container");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "700px";
container.style.aspectRatio = "1 / 1";
generateGrid();



// Create a webpage with a 16x16 grid of square divs.

//     Create the divs using JavaScript. Don’t try making them by hand with copy and pasting in your HTML file!
//     It’s best to put your grid squares inside another “container” div (which can go directly in your HTML).
//     Use flexbox to make the divs appear as a grid (versus just one on each line). Despite the name, do not be tempted to research/use CSS Grid for this as Grid will be taught later after the foundations course. This is an opportunity specifically to get more practice in for flexbox!
//     Be careful with borders and margins, as they can adjust the size of the squares!
//     “OMG, why isn’t my grid being created???”
//         Did you link your CSS stylesheet?
//         Open your browser’s developer tools.
//         Check if there are any errors in the JavaScript console.
//         Check your “elements” pane to see if the elements have actually shown up but are somehow hidden.
//         Go willy-nilly and add console.log statements in your JavaScript to see if it’s actually being loaded.

// Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.

//     Hint: “Hovering” is what happens when your mouse enters a div and ends when your mouse leaves it. You can set up event listeners for either of those events as a starting point.
//     There are multiple ways to change the color of the divs, including:
//         adding a new class to the div.
//         changing the div’s background color using JavaScript.

// Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad. Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.

//     Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
//     Also check out prompts.
//     You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used.

// Push your project to GitHub!