

//html elements with this id
var malek=document.getElementById("hello")
malek.innerHTML="gomycode"

//first element with selector desired
var btn=document.querySelector("button")
btn.innerHTML="delete"

btn.setAttribute("id","btn")
console.log(btn)

btn.style.color="red"

var table=document.getElementById("list")
// table.lastElementChild.innerHTML="black"
// var li=document.createElement('li')
// li.innerHTML="white"
// table.appendChild(li)

// document.write("<button style='color:blue'>next</button><p>ayoub</p>")

// btn.addEventListener('click',function(){
//     malek.remove()
// })
// var button=document.querySelectorAll("button")

// button[1].addEventListener('click',function(){
//     button[1].nextElementSibling.innerHTML='omar'
// })

var minus=document.getElementById("minus")
var plus=document.getElementById('plus')

minus.addEventListener('click',function(){
    minus.nextElementSibling.innerHTML--
})
plus.addEventListener("click",function(){
    plus.previousElementSibling.innerHTML++
})



