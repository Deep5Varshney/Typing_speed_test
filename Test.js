const setOfWords = ["Hi guys ,welcome to this typing speed test" , "Hope you will like it as well as enjoy it",
" click on Start and type the sentences given below the main heading, there is no time limit", "After writing, click on Done"];

const msg = document.getElementById("msg");
const typewords = document.getElementById("mywords");
const btn = document.getElementById("btn");
let startTime , endTime;

const playGame = () =>{
    let randomNumber = Math.floor(Math.random()*setOfWords.length);
    msg.innerText = setOfWords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText  = "Done";
}

const endPlay = () =>{
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime-startTime)/1000);
    //console.log(totalTime);
    let totalStr = typewords.value;
    let wordCount = wordCounter(totalStr);

    let speed = Math.round((wordCount/totalTime)*60);

    let finalMsg = "You typed total at  " +speed+ " words per minute.  " ;
    finalMsg += compareWords(msg.innerText,totalStr);
    msg.innerText = finalMsg;
}

const compareWords = (str1,str2) =>{
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let ctn = 0;


    words1.forEach(function(item,index){
        if(item==words2[index]){
            ctn++;
        }
    })

    let errorWords = (words1.length-ctn);
    return(ctn + " Correct out of  " +words1.length+ " words and the total number of error are " +errorWords+ " . ");
}

const wordCounter = (str) =>{
    let response = str.split(" ").length;
   // console.log(response);
    return response;
}

btn.addEventListener("click", function(){
    if(this.innerText == "Start"){
        typewords.disabled = false;
        playGame();
    }else if(this.innerText == "Done"){
        typewords.disabled = true;
        btn.innerText  = "Start";
        endPlay();
    }
})