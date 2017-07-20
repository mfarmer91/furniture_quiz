var quiz = [
    ['Which Danish furniture designer created the Chieftan Chair?', 'finn juhl'],
    ['Charles and Ray Eames and George Nelson were employed by which American furniture manufacturer and retailer during mid-twentieth century?', 'herman miller'],
    ['What material is Japanese designer Shiro Kuramata most well-known for using in his furniture and decorative arts?', 'acrylic']
];

var correctQuestions = [];
var incorrectQuestions = [];

var correct = 0;
var incorrect = 0;

var html;


function print ( message ) {
    var outputDiv = document.getElementById( 'output' );
    outputDiv.innerHTML = message;
}

function buildList ( arr ) {
    var htmlList = '<ol>';
    for ( var i = 0; i < arr.length; i++ ){
        htmlList += '<li>' + arr[i] + '</li>';
    } 
    htmlList += '</ol>';
    return htmlList;
}


function quizAsk ( list ) {
    for ( var i = 0; i < list.length; i++ ) {
        var answer = prompt(quiz[i][0]);
        
        if ( answer === quiz[i][1] ) {
            correctQuestions.push(quiz[i][0]);
            correct++;  
        } else {
            incorrectQuestions.push(quiz[i][0]);
            incorrect++;
        }
    }
}

quizAsk( quiz );

html = 'Ay, you answered ' + correct + ' furniture design question(s) correctly!'
html += '<h2>You got these joints correct:</h2>' + buildList(correctQuestions);
html += '<h2>You got these joints incorrect:</h2>' + buildList(incorrectQuestions);
print( html );



    
    