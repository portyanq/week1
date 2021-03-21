
const but = document.querySelector("#bt");
but.addEventListener('click', () => {
    const inp = document.querySelector("#inp").value;
    fetch(`${inp}`)
    .then(response => response.json())
    .then(commits => console.log(commits[0]));   
})



// let response = await fetch(url);
// if (response.ok) { 
//   let answer = await response.text();
// }
