// Questions will be asked
const Questions = [{
    id: 0,
    q: "Which type of JavaScript language is ___?",
    a: [{ text: "Object-Oriented", isCorrect: false },
        { text: "Object-Based", isCorrect: true },
        { text: "Assembly-language", isCorrect: false },
        { text: "High-level", isCorrect: false }
    ]

},
{
    id: 1,
    q: "Inside which HTML element do we put the JavaScript?",
    a: [{ text: "<js>", isCorrect: false},
        { text: "<javascript>", isCorrect: false },
        { text: "<style>", isCorrect: false },
        { text: "<script>", isCorrect: true }
    ]

},
{
    id: 2,
    q: "How do you write 'Hello World' in an alert box?",
    a: [{ text: "alertbox('Hello world')", isCorrect: false },
        { text: "prompt('hello world')", isCorrect: false },
        { text: "alert('Hello World')", isCorrect: true },
        { text: "(msg('hello world'))", isCorrect: false }
    ]
},
{
    id: 3,
    q: "How do you create a function in JavaScript?",
    a: [{ text: "function myFunction()", isCorrect: true },
        { text: "function", isCorrect: false },
        { text: "fun", isCorrect: false },
        { text: "myfunction", isCorrect: false }
    ]
},
{
    id: 4,
    q: "How does a FOR loop start??",
    a: [{ text: "for(i=0;i<=5;i++)", isCorrect: true },
        { text: "for i=0 to 5", isCorrect: false },
        { text: "for(i=5)", isCorrect: false },
        { text: "for(i=0;i<5)", isCorrect: false }
    ]
},
{
    id: 5,
    q: "How can you add a comment in a JavaScript?",
    a: [{ text: "// This is comment", isCorrect: true },
        { text: "<!-- -->", isCorrect: false },
        { text: "*** this is comment", isCorrect: false },
        { text: "/% %/", isCorrect: false }
    ]
},
{
    id: 6,
    q: "How do you round the number 7.25, to the nearest integer?",
    a: [{ text: "rnd()", isCorrect: false },
        { text:"round()", isCorrect: false },
        { text: "Math.round(7.25)", isCorrect: true },
        { text: "round(7.25)", isCorrect: false }
    ]
},
{
    id: 7,
    q: "How do you declare a JavaScript variable?",
    a: [{ text: "variable name", isCorrect: false },
        { text:"v name", isCorrect: false },
        { text: "var name", isCorrect: true },
        { text: "vari name", isCorrect: false }
    ]
},
{
    id: 8,
    q: "Which operator is used to assign a value to a variable?",
    a: [{ text: "()", isCorrect: false },
        { text:"*", isCorrect: false },
        { text: "=", isCorrect: true },
        { text: "+", isCorrect: false }
    ]
},
{
    id: 9,
    q: "Is JavaScript case-sensitive? ",
    a: [{ text: "No", isCorrect: false },
        { text:"May Be", isCorrect: false },
        { text: "Yes", isCorrect: true },
        { text: "Invalid que", isCorrect: false }
    ]
},
]

// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing option text
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "True";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "False";
        result[0].style.color = "red";
    }
})
}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 10) {
    id++;
    iterate(id);
    console.log(id);
}

})
