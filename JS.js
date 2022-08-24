function myClick() {
  var x = document.getElementById("card");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

}
  
function myfunction(){
generate = () => Math.trunc(Math.random() *10+1);

attempts=[];

const getResult = function(finalValue){
  let guessNumber= prompt("Guess any Number.. ");
  attempts.push(guessNumber);
  result=guessNumber>finalValue?1:guessNumber<finalValue?-1:0;
  return result;

}


let hits=3;
let random = generate();
console.log(random);
let res ;
  while(hits>0){
  {
  res = getResult(random);

  som=[];
  if(res===1){

     ab= " is to high.."+ --hits + "tries left.";
  }
  else if(res=== -1){

     ab= " is to low.."+ --hits + "tries left.";
  }

  else{

     $("correct").textcontent= "correct";
    break;
  }


  document.getElementById("answer").innerHTML="Correct Answer  is  "+ random;
  if (res !==0){
    let arr =  "you entered..";
  let a =arr;


      let c = attempts.toString();

  let d = a+" " + c +" ";
   document.getElementById("result").innerHTML=d;}
}}
console.log(attempts);
}
function myrules(){

}
function click() {  var x = document.getElementById("card");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

}
