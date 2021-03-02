// Finish the uefaEuro2016() function so it return string just like in the examples below:

// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."


function uefaEuro2016(teams, scores){

    let teamA = teams[0]
    let teamB = teams[1]

    let scoreA = scores[0]
    let scoreB = scores[1]

    if(scoreA === scoreB){
    return `At match ${teamA} - ${teamB}, teams played draw.`
    }else if(scoreA > scoreB){
    return `At match ${teamA} - ${teamB}, ${teamA} won!`
    }else if(scoreB > scoreA){
    return `At match ${teamA} - ${teamB}, ${teamB} won!`
}
}