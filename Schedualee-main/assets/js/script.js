var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

var time = today.getHours()
console.log(time)

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d = new Date();
let day = weekday[d.getDay()];
document.getElementById("currentDay").textContent = day


//get content from bitchign
for (let i = 9; i < 18; i++) {
    var word = window.localStorage.getItem(i)
    var place = document.getElementById(i),
        child = place.children[1]
        child.textContent = word
    console.log(word);
}


//set button clicked
    let result = document.querySelector('button');
    document.addEventListener('click', (e) => {
        var element = e.target.parentElement.id;
        var getFrom = document.getElementById(element);
        var child = getFrom.children[1];
        var words = child.value;
        window.localStorage.setItem(element, words)
        var result = window.localStorage.getItem(element)
        console.log(result)
        console.log(child)
        console.log(element)
    });







//set for nine
if (time == 9) {
    var nine = document.getElementById("9")
    nine.classList.add('present')
}

if (time < 9) {
    var nine = document.getElementById("9")
    nine.style.backgroundColor = "lightblue"
}

if (time > 9) {
    var nine = document.getElementById("9")
    nine.style.backgroundColor = "grey"
}

//set for ten
if (time == 10) {
    var ten = document.getElementById("10")
    ten.classList.add('present')
}

if (time < 10) {
    var ten = document.getElementById("10")
    ten.style.backgroundColor = "lightblue"
}

if (time > 10) {
    var ten = document.getElementById("10")
    ten.style.backgroundColor = "grey"
}

//set for eleven
if (time == 11) {
    var eleven = document.getElementById("11")
    e
    eleven.classList.add('present')
}

if (time < 11) {
    var eleven = document.getElementById("11")
    eleven.style.backgroundColor = "lightblue"
}

if (time > 11) {
    var eleven = document.getElementById("11")
    eleven.style.backgroundColor = "grey"
}

//set for twelve
if (time == 12) {
    var twelve = document.getElementById("12")
    t
    twelve.classList.add('present')
}

if (time < 12) {
    var twelve = document.getElementById("12")
    twelve.style.backgroundColor = "lightblue"
}

if (time > 12) {
    var twelve = document.getElementById("12")
    twelve.style.backgroundColor = "grey"
}


//set for one
if (time == 13) {
    var one = document.getElementById("13")
    one.classList.add('present')
}

if (time < 13) {
    var one = document.getElementById("13")
    one.style.backgroundColor = "lightblue"
}

if (time > 13) {
    var one = document.getElementById("13")
    one.style.backgroundColor = "grey"
}

//set for two
if (time == 14) {
    var two = document.getElementById("14")
    two.classList.add('present')
}

if (time < 14) {
    var two = document.getElementById("14")
    two.style.backgroundColor = "lightblue"
}

if (time > 14) {
    var two = document.getElementById("14")
    two.style.backgroundColor = "grey"
}

//set for three
if (time == 15) {
    var three = document.getElementById("15")
    three.classList.add('present')
}

if (time < 15) {
    var three = document.getElementById("15")
    three.style.backgroundColor = "lightblue"
}

if (time > 15) {
    var three = document.getElementById("15")
    three.style.backgroundColor = "grey"
}


//set for four
if (time == 16) {
    var four = document.getElementById("16")
    four.classList.add('present')
}

if (time < 16) {
    var four = document.getElementById("16")
    four.style.backgroundColor = "lightblue"
}

if (time > 16) {
    var four = document.getElementById("16")
    four.style.backgroundColor = "grey"
}



//set for five
if (time == 17) {
    var five = document.getElementById("17")
    five.classList.add('present')
}

if (time < 17) {
    var five = document.getElementById("17")
    five.style.backgroundColor = "lightblue"
}

if (time > 17) {
    var five = document.getElementById("17")
    five.style.backgroundColor = "grey"
}

//set for six
if (time == 18) {
    var six = document.getElementById("18")
    six.classList.add('present')
}

if (time < 18) {
    var six = document.getElementById("18")
    six.style.backgroundColor = "lightblue"
}

if (time > 18) {
    var six = document.getElementById("18")
    six.style.backgroundColor = "grey"
}

//set for seven
if (time == 19) {
    var seven = document.getElementById("19")

    seven.classList.add('present')
}

if (time < 19) {
    var seven = document.getElementById("19")
    seven.style.backgroundColor = "lightblue"
}

if (time > 19) {
    var seven = document.getElementById("19")
    seven.style.backgroundColor = "grey"
}

if (time == 13) {
    console.log(today)
    console.log("Whaterman")
}
if (time == 14) {
    console.log(today)
    console.log("Whaterman")
}

if (time == 15) {
    console.log(today)
    console.log("Whaterman")
}

function resefdt() {
    document.getElementsByClassName('pixel').style.backgroundColor = "white";
}
