// Pulls list from JSON file
async function populate() {

    const requestURL = 'https://jeremyleeofficial.com/Projects/films.json';
    const request = new Request(requestURL);

    const response = await fetch(request);
    const movieHeroes = await response.json();

    populateList(movieHeroes);
}

function populateList(obj) {
    const section = document.querySelector('ul');
    const flick = obj.movies;

    for (const flick of obj.movies) {
        const allInfo = document.createElement('li');
        allInfo.textContent = `${flick.name}, ${flick.year}, ${flick.rating}`;
        //  allFlick.textContent = `${flick.name} ${flick.year} ${flick.rating}`;
        section.appendChild(allInfo);
    }
}

populate();

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI"); //creates a variable called mynodelist to get all LI's
var i; //loop below runs through to grab all li's
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7"); // creates x symbol
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("movieList").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}