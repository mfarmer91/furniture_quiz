var quiz = [
    ['Which Danish furniture designer created the Chieftan Chair?', 'finn juhl'],
    ['Charles and Ray Eames, and George Nelson were employed by which American furniture manufacturer and retailer during mid-twentieth century?', 'herman miller'],
    ['What material is Japanese designer Shiro Kuramata most well-known for using in his furniture and decorative arts?', 'acrylic']
];

var correct = 0;
var incorrect = 0;

function print ( message ) {
    document.write( message );
}


function quizAsk ( list ) {
    for ( var i = 0; i < list.length; i++ ) {
        var answer = prompt(quiz[i][0]);
        
        if ( answer === quiz[i][1] ) {
            correct++;
            alert("Noice! You're slangin' design knowledge like it's nothin', stretch(er)!");
        } else {
            alert("That's okay.  Charles and Ray Eames made a plywood leg splint that you can use to support your injured design knowledge.")
            incorrect++;
        }
    }
        print('Congrats! You answered ' + correct + ' furniture design questions correctly!' + '<br>' );
        print( incorrect + ' incorrect. Hmm. Hey, not great, but certainly Mies Van Der Rohe wasnt able to crank out the Barcalona chair on his first go! ' + '<br>' );
}

quizAsk( quiz );

    
    