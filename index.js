// // Code your solutions in this file

const arrStrNm=["Guadalupe", "Ollie", "Aki"];

function writeCards(arrStrNm, eventname) {
    const nArr = [];
    for (let i = 0; i < arrStrNm.length; i++) {
        const message = (`Thank you, ${arrStrNm[i]}, for the wonderful ${eventname} gift!`) 
        nArr.push(message);         
    }
    console.log(nArr);
    return nArr;   
}

writeCards(arrStrNm, "surprise");

function countDown(a){
    while (a>=0){
        console.log(a);
        a--;
    }
}
countDown(12);