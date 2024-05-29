export function myFunction(myNum: number): string {
    if (myNum == 5) {
        return 'true';
    } else if(myNum < 5 && myNum >= 0) {
        return 'false';
    }else if (myNum > 5){
        return 'big';
    }else {
        return 'negative';
    };
};

/* 
EN: Add your own function starting on line 20 
!Write a function that returns a movie when the user inputs movieOne - movieFive
!The movies are up to you use the 'writeIfElseStatment' example from class for help 
!Add expects to the test checking to make sure you are getting back the correct movie.
*/

export function blockBuster(movie: string): string {
    if (movie == "Movie One") {
        return "Star Wars"; 
    } else if (movie == "Movie Two") {
        return "Dune";
    } else if (movie == "Movie Three") {
        return "Matrix"; 
    } else if (movie == "Movie Four") {
        return "The Godfather"; 
    } else if (movie == "Movie Five") {
        return "Spider Man"; 
    } else {
        return `I'm sorry we do not carry ${movie}`; 
    }
};