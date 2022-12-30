cl=console.log;
//1>>Document.getElementById('')
//to get inner content

const heading=document.getElementById('heading');
const getinnerHTML=heading.innerHTML;
cl(getinnerHTML)

const getinnerText=heading.innerText;
cl(getinnerText);
const gettextContent=heading.textContent;
cl(gettextContent)

heading.innerHTML= `DOM -<strong>bringing html element</strong>`;
cl(heading.innerText)
//heading.innerText= `DOM -<strong>Selection Method</strong>`;
heading.textContent=`DOM-selection metods!!!`;
cl(heading.textContent)

heading.style.backgroundColor ='red';
heading.style.color= "#fff";
 heading.style.padding= "20px";
const skillset1=document.getElementById("skillset1");
cl(skillset1,typeof skillset1)
//class add 
skillset1.classList.add('list-group');
skillset1.classList.add("mb-4");


//class remove;
skillset1.classList.remove("mb-4");
skillset1.classList.remove("list-group");
//add
skillset1.classList.add("list-group");

const btnHideShow=document.getElementById("btnHideShow");
const btnToggle=document.getElementById("btnToggle");
const box=document.getElementById("box");
btnHideShow.addEventListener("click",function(){
  box.classList.remove("d-none")
 });

btnToggle.addEventListener("click",function(){
	 box.classList.toggle("d-none")
});
	
//2>>document.querySelector()

const firstli=document.querySelector("li");
cl(firstli,typeof firstli)//object
firstli.classList.add("bg-info")
const skillselectorset2firstli=document.querySelector("#skillset2 li");
skillselectorset2firstli.classList.add("bg-info")
let anchor = document.querySelector(".btn")
cl(anchor);
let link = anchor.getAttribute("href")
cl(link);
anchor.setAttribute("href","www.google.com")


//Multiple selection Method;
//3>>document.getElementsByClassName
const newlist = document.getElementsByClassName("list-group-item");
cl(newlist ,typeof newlist )
const newarray = Array.from( newlist )
cl(newarray)
//innerHTML
newarray.forEach(function(_ele){
      cl(_ele.innerHTML)
});
//innerText
newarray.forEach(function(_ele){
  cl(_ele.innerText)
});
//Textcontent
newarray.forEach(function(_ele){
  cl(_ele.textContent)
})
//style
newarray.forEach(function(_ele){
  _ele.style.backgroundColor = "red";
});
//fontweight
newarray.forEach(function(_ele){
  _ele.style.fontWeight = 700 ;
});
//fontsize
newarray.forEach(function(_ele){
  _ele.style.fontSize = "15px";
})
//color
newarray.forEach(function(_ele){
  _ele.style.color = "gold"
})
//add class
newarray.forEach(function(_ele){
  _ele.classList.add("active")
})
//remove class
newarray.forEach(function(_ele){
  _ele.classList.remove("active")
});
//tooggle
newarray.forEach(function(_ele){
  _ele.classList.toggle("active")
});

//4>>document.getElementsByTagName/

//let allli = document.getElementsByTagName("li");

let allli = Array.from(document.getElementsByTagName("li"));
cl(allli,typeof allli);
cl(document.getElementsByTagName("li"),typeof document.getElementsByTagName("li"))

allli.forEach(function(_ele){
  _ele.style.backgroundColor = "green";
})


//5>>document.querySelectorAll
let oxygen = document.querySelectorAll("li:nth-child(2n)");
cl(oxygen,typeof oxygen);
const arrayoxygen = Array.from(oxygen);
cl(arrayoxygen);

arrayoxygen.forEach(_ele => {
  _ele.style.backgroundColor = "black";
  _ele.style.fontSize = "20px";
  _ele.style.textTransform = "uppercase";
  cl(_ele.innerText);
  cl(_ele.textContent);
  
  
})

