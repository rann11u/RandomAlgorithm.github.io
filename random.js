const getRandomNumber = (min, max) => Math.floor(Math.random () * (max-min + 1) + min);

const roll = () => getRandomNumber(0, 9);

document.getElementById ("shifty").addEventListener ("click", function (){
    const number1 = document.getElementById ("number1");
    const number2 = document.getElementById ("number2");
    const number3 = document.getElementById ("number3");

    const number1Result = roll ();
    const number2Result = roll ();
    const number3Result = roll ();

    let result;

    if (number1Result === number2Result && number1Result === number3Result && number3Result === number2Result) {
        result = "You win";
    } else {
        result = "You lose, try again";
    }

    document.getElementById("result").innerHTML = `
    <h3><span>${number1Result}</span> <span>${number2Result}</span> <span>${number3Result}</span></h3>
    <p>${result}</p>`
});