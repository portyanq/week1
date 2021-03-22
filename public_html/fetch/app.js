
const but = document.querySelector("#bt");

but.addEventListener('click', async () => {
    let inp = document.querySelector("#inp").value;
    fetch(`${inp}`)
        .then(response => {
            return response.text();
        })
        .then(res => {
            document.querySelector("#inp").value = res
        })
})


// https://jsonplaceholder.typicode.com/users
