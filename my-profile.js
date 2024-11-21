window.onload = () => {
    
    // Part 1A

    // Create <h1 id="name"> of my name
    const h1 = document.createElement("h1")
    h1.innerText = "Demi"
    h1.setAttribute('id', "name")
    document.body.appendChild(h1)

    // create UL
    const aboutMe = ["I think I am", "I am I am", "I glad I am", "I know I am"]
    const ul = createUl(aboutMe)
    ul.setAttribute("class", "my-details")

    
    // append ul to body
    document.body.appendChild(ul)
}

// part 1B
function createUl(array){
    const ul = document.createElement("ul");
    // create li
    for ( const ele of array ){
        let newLi = document.createElement("li")
        newLi.innerText = ele
        newLi.setAttribute("class", "details")
        ul.appendChild(newLi)
    }
    return ul
}