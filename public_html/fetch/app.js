
const url = "https://jsonplaceholder.typicode.com/users"
const but = document.querySelector("#bt");

but.addEventListener('click', async () => {
    let inp = document.querySelector("#inp").value;
    fetch(url)
        .then(response => {
            return response.text();
        })
        .then(res => {
            document.querySelector("#inp").value = res
        })
})




//fetch(`${inp}`)

// https://jsonplaceholder.typicode.com/users


// let response = await fetch(url);
// if (response.ok) { 
//   let answer = await response.text();
// }
