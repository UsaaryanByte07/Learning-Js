// ==========================================
// 1. GETTING ELEMENTS (Methods)
// ==========================================

// getElementById(): Finds an element by its unique ID attribute
const bodyTag = document.getElementById('myBody');
const heading = document.getElementById('main-heading');

// querySelector(): Finds an element using CSS selectors (like # for IDs or . for classes)
const mainContainer = document.querySelector('#container');


// ==========================================
// 2. PAGE INFORMATION (Properties)
// ==========================================

// location & href: 'location' is the object, 'href' is the property showing the full URL
console.log("Current Page Location:", document.location);
console.log("The Full URL is:", document.location.href);

// domain: Shows the domain name of the server the page is on
console.log("Domain of this site:", document.domain);

// title: Gets or sets the text shown on the browser tab
const userTitle = prompt("Enter a new title for the browser tab:");
document.title = userTitle;


// ==========================================
// 3. CHANGING CONTENT & STYLE (Properties & Methods)
// ==========================================

// prompt for background color change
const chosenColor = prompt("Type a color name to change the background (e.g., 'cyan', 'yellow'):");
bodyTag.style.backgroundColor = chosenColor;

// innerText: Changes ONLY the text inside an element
heading.innerText = "You chose the color: " + chosenColor;

// innerHTML: Changes text AND allows you to insert HTML tags (like <b> or <i>)
mainContainer.innerHTML += "<p><i>This paragraph was added using innerHTML!</i></p>";

// classList: A property that holds the list of classes on an element
// .add(): Method to add a new CSS class
bodyTag.classList.add('active-theme'); 

// .remove(): Method to remove a specific CSS class
bodyTag.classList.remove('active-theme');


// ==========================================
// 4. CREATING & MOVING ELEMENTS (Methods)
// ==========================================

// createElement(): Creates a new HTML tag in memory (it's not on the page yet)
const newBox = document.createElement('div');
newBox.innerText = "I am a new DIV created by JS!";

// appendChild(): Takes a created element and puts it inside a parent element on the page
mainContainer.appendChild(newBox);

// replaceChild(): Swaps an old element for a new one
const replacedElement = document.createElement('p');
replacedElement.innerText = "--- I HAVE REPLACED THE OLD PARAGRAPH ---";

const oldPara = document.getElementById('temp-paragraph');
// Usage: parent.replaceChild(newElement, oldElement)
mainContainer.replaceChild(replacedElement, oldPara);

// removeChild(): Deletes a specific child element from a parent
// Let's remove the box we just created after an alert
alert("Click OK to see the new box get removed from the page.");
mainContainer.removeChild(newBox);