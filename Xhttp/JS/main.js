const root = document.getElementById("root")
let xHttps = new XMLHttpRequest()
xHttps.open("GET", 'Json.json')
xHttps.onprogress=function () {
    root.innerHTML="Loading....."
}
xHttps.onloadstart=function () {
    root.innerHTML="Loading....."
}
xHttps.onload = function () {
    root.innerText=""
    let text = xHttps.responseText
    text=JSON.parse(text)
    for (let index = 0; index < text.length; index++) {
       let div= document.createElement("div")
       div.innerHTML= (index+1)+". His name is "+text[index].name+" and age is "+text[index].Age+". He read in "+text[index].College
       root.append(div)
        
    }

  
}
 xHttps.send()


function printS(ele) {
    console.log(ele);
} 

let h=()=>{

}
let a=10
