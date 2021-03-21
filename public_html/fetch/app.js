
const but = document.querySelector("#bt");
but.addEventListener('click', () => {
    const inp = document.querySelector("#inp").value;
    const response = fetch(`${inp}`);
    if (response.ok) { 
        const answer = response.json();
        console.log(answer[0])
      }    
})



// let response = await fetch(url);
// if (response.ok) { 
//   let answer = await response.text();
// }
