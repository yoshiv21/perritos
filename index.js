// 1. VARIABLES
const areaPerrito = document.getElementById("perrito")
const areaGatito = document.getElementById("gatito")

//https://dog.ceo/api/breed/hound/images/random
fetch("https://dog.ceo/api/breed/schnauzer/images/random").then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
    areaPerrito.innerHTML = `
    <p>Mi próximo perrito<p/>
    <img src ="${data.message}" />
    `
}) 
/*
// ES5
"la suma es" + suma + "y la resta es" + resta + "<p>" + "hola" + "</p>"
​
// ES6
`
    la suma es ${suma} y la resta es ${resta} 
        <p>
            Hola
        </p>
`
*/



fetch("https://aws.random.cat/meow").then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
    areaGatito.innerHTML = `
    <p>Mi gatito querido<p/>
    <p>${data.file}<p/>
    <img class="imagen-gato" src="${data.file}" />
    `
})