//document.getElementById('company').innerHTML = "Joe's Bed and Breakfast"
 
document.querySelector('#company').innerText = "Joes Bed and Breakfast"
 
document.querySelector('header > h2').innerText = "Best B&B This side of Logan"


let userName = prompt("what is your name?")

let message = "Hello" + userName + ", welcom to the best lodging in Utah"

document.querySelector('#greeting').innerText = message