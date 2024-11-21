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

    // add clock
    const h2 = document.createElement("h2");
    h2.setAttribute("id","clock")
    h2.innerText = Date().split(" ")[4]
    document.body.appendChild(h2)
    setInterval( function () { h2.innerText = Date().split(" ")[4]}, 1000 )


    // birthday countdown 
    const countdownDiv = document.createElement("div")
    let times = getTimeTillBirthday()

    countdownDiv.innerHTML = `
        <p> 
            Days:<span id= "days">${times.days} </span> 
            Hours:<span id= "hours">${times.hours}</span>
            Minutes:<span id="minutes">${times.minutes}</span>
            Seconds: <span id="seconds">${times.seconds}</span>
        </p>
        <p>
            till BIRTHMAS 
        </p>
    `;

    document.body.appendChild(countdownDiv)

    setInterval( function () {updateTimeTillBirthday()}, 1000)
    
    

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

function getTimeTillBirthday(){
    let timesLeft = {
        days: undefined,
        hours: undefined,
        minutes: undefined,
        seconds: undefined
        
        // 86,400,000ms/ day
        // 3,600,000ms / hour
        // 60,000ms / minute
        // 1000ms / second
    }
    const birthday = Date.parse("18 May 2025 00:12:00 GMT");
    let timeTil = birthday - Date.now();
    timesLeft.days = Math.floor(timeTil / 86400000) ;
    timeTil = (timeTil % 86400000);
    timesLeft.hours = Math.floor(timeTil / 3600000);
    timeTil = ( timeTil % 3600000)
    timesLeft.minutes = Math.floor( timeTil / 60000 );
    timeTil = ( timeTil % 60000 );
    timesLeft.seconds = Math.floor(timeTil / 1000);

    return timesLeft
}

function updateTimeTillBirthday(){
    const times = getTimeTillBirthday();
    document.querySelector("#seconds").innerText = times.seconds
    document.querySelector("#minutes").innerText = times.minutes
    document.querySelector("#hours").innerText = times.hours
    document.querySelector("#days").innerText = times.days
}