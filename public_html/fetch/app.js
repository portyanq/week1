
const but = document.querySelector("#bt");
but.addEventListener('click', () => {
    let inp = document.querySelector("#inp").value;
    fetch(`${inp}`)
    .then(response => {
        document.querySelector("#inp").value = response.text()
    }) 
})



// let response = await fetch(url);
// if (response.ok) { 
//   let answer = await response.text();
// }
