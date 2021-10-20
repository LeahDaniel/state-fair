const gamesTarget = document.querySelector(".games")
const foodTarget = document.querySelector(".food")
const ridesTarget = document.querySelector(".rides")
const sideshowTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")

export const FullPackageTicketHolders = () => {
    eventHub.addEventListener("fullTicketPurchased", customEvent => {
        gamesTarget.innerHTML += `<div class= "person bigSpender"></div>`
        foodTarget.innerHTML += `<div class= "person bigSpender"></div>`
        ridesTarget.innerHTML += `<div class= "person bigSpender"></div>`
        sideshowTarget.innerHTML += `<div class= "person bigSpender"></div>`
    })
}