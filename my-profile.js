window.onload = () => {
    console.log("onload")
    const h1 = document.createElement("h1")
    h1.innerText = "Demi"
    h1.setAttribute('id', "name")
    document.body.appendChild(h1)
}