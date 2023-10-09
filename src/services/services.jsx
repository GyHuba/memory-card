

export function getRandomNumber(times, max){
    const numberArray = [];

    while(numberArray.length < times){
        const number = Math.floor(Math.random() * max)
        if(!numberArray.includes(number)){
            numberArray.push(number)
        }
    }
    return numberArray;
}