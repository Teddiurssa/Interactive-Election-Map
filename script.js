var politicianName = function (name, partyColor) //add names of candidates and party colors
{
    var politician = {}; // object set up

    politician.name = name;
    politician.electionResults = null;
    politician.totalVotes = 0;
    politician.partyColor = partyColor;

    ///function to tally up votes
    politician.tallyUpVotes = function () {
        this.totalVotes = 0;

        for (var i = 0; i < this.electionResults.length; i++) {
            this.totalVotes = this.totalVotes + this.electionResults[i];
        }
    };
    return politician;
};
/// run function to get politicians names and party colors
var obama = politicianName("Obama", [132, 17, 11]);
var trump = politicianName("Trump", [245, 141, 136]);


/*[132, 17, 11]
console.log("Obama's party color is " + obama.partyColor);
console.log("Trump's party color is " + trump.partyColor);
*/

/// candidates election results arrays
trump.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

obama.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

///arry errors fixes

trump.electionResults[9] = 1;
obama.electionResults[9] = 28;

trump.electionResults[4] = 17;
obama.electionResults[4] = 38;

trump.electionResults[43] = 11;
obama.electionResults[43] = 27;

/* console.log(trump.electionResults);
console.log(obama.electionResults); */


// state results winner and add color to map

var setStateResults = function (state) {
    theStates[state].winner = null;

    if (trump.electionResults[state] > obama.electionResults[state]) {
        theStates[state].winner = trump;
    } else if (trump.electionResults[state] < obama.electionResults[state]) {
        theStates[state].winner = obama;
    }

    var stateWinner = theStates[state].winner;

    if (stateWinner !== null) {
        theStates[state].rgbColor = stateWinner.partyColor;
    } else {
        theStates[state].rgbColor = [11, 32, 57];
    }

    //// top static table

    var table = document.getElementById('countryResults');

    table.children[0].children[0].children[0].innerText = "Barack Obama";
    table.children[0].children[0].children[1].innerText = obama.totalVotes;
    table.children[0].children[0].children[2].innerText = "Donald Trump";
    table.children[0].children[0].children[3].innerText = trump.totalVotes;
    table.children[0].children[0].children[5].innerText = "Barack Obama";

    // state table variables

    var stateResults = document.getElementById('stateResults');

    var header = stateResults.children[0];
    var body = stateResults.children[1];
    var stateName = header.children[0].children[0];
    var abbrev = header.children[0].children[1];
    var candidateOne = body.children[0].children[0];
    var candidateTwo = body.children[1].children[0];
    var resultsOne = body.children[0].children[1];
    var resultsTwo = body.children[1].children[1];
    var winnerName = body.children[2].children[1];

    /// state table code


    stateName.innerText = theStates[state].nameFull;
    abbrev.innerText = "(" + theStates[state].nameAbbrev + ")";

    candidateOne.innerText = obama.name;
    candidateTwo.innerText = trump.name;

    resultsOne.innerText = obama.electionResults[state];
    resultsTwo.innerText = trump.electionResults[state];

    if (theStates[state].winner === null) {
        winnerName.innerText = "DRAW!";
    } else {
        winnerName.innerText = theStates[state].winner.name;
    }

}; ///setStateResults end function


// to call tally method

trump.tallyUpVotes();
obama.tallyUpVotes();

console.log("Total Votes: " + trump.totalVotes);
console.log("Total Votes: " + obama.totalVotes);

////declare The winner

var winner;

if (obama.totalVotes > trump.totalVotes) {
    winner = obama.name;
    console.log("And the winner is " + winner + "!!");
} else if (obama.totalVotes < trump.totalVotes) {
    winner = trump;
    console.log("You are a Weiner");
} else {
    winner = "Its a Draw";
}