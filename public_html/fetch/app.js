
const but = document.querySelector("#bt");
but.addEventListener('click', async () => {
    const inp = document.querySelector("#inp").value;
    const response = fetch(`/${inp}`);
    if (response.ok) { 
        const answer = await response.text();
        console.log(answer)
      }    
})



// let response = await fetch(url);
// if (response.ok) { 
//   let answer = await response.text();
// }
