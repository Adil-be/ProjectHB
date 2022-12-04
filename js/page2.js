
var txtArray= [];
let text1 ="16 Apprenants !";
let text2 ="2 semaines !";
let text3 ="1 site web !";
txtArray.push(text1,text2,text3);
var divText=document.querySelectorAll("#anim-txt");
console.log(divText[3]);
console.log((divText.length ));
console.log(txtArray);
console.log(txtArray[1].length);


function typeText(num){
    let n=num;
    let i=0;
    const intervalId =setInterval(function(){
        divText[n].innerHTML += txtArray[n][i];
        i++;

        if(i === txtArray[n].length){
            clearInterval(intervalId);
        }


    },80);

    console.log(n);
    if(n<(txtArray.length-1)){
        console.log(n);

        setTimeout(typeText, 2000, n+1)
    }
    else{
        clearTimeout;
    }

}

setTimeout(typeText, 2000,0);
