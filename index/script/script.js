var a = document.getElementById('img6')
let b = document.getElementById('image6')
let c = document.getElementById('text6')
let d = document.getElementById('thirty')

a.onclick = function () {
   a.classList.add("hidden");
   b.classList.remove("hidden")
   c.classList.remove("hidden")
   d.classList.add("big")
}
b.onclick = function () {
   b.classList.add("hidden")
   a.classList.remove("hidden")
   c.classList.add("hidden")
   d.classList.remove("big")
}

