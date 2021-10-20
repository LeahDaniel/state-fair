import { FoodTicketHolders } from "./food/FoodTicketHolders.js";
import { FullPackageTicketHolders } from "./full/FullPackageTicketHolders.js";
import { GameTicketHolders } from "./games/GameTicketHolders.js";
import { RideTicketHolders } from "./rides/RideTicketHolders.js"
import { SideshowTicketHolders } from "./sideshows/SideshowTicketHolders.js";


RideTicketHolders()
FoodTicketHolders()
GameTicketHolders()
SideshowTicketHolders()
FullPackageTicketHolders()


const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")
const ticketCounterLocation = document.querySelector(".customers")

const rideEvent = new CustomEvent("rideTicketPurchased")
const foodEvent = new CustomEvent("foodTicketPurchased")
const gameEvent = new CustomEvent("gameTicketPurchased")
const showEvent = new CustomEvent("sideshowTicketPurchased")
const fullEvent = new CustomEvent("fullTicketPurchased")

let ticketCounter = 0

eventHub.addEventListener(
    "click",
    (clickEvent) => {
        if (clickEvent.target.id === "rideTicket") {
            eventHub.dispatchEvent(rideEvent)
            ticketCounter += 1
        } else if (clickEvent.target.id === "foodTicket"){
            eventHub.dispatchEvent(foodEvent)
            ticketCounter += 1
        } else if (clickEvent.target.id === "gameTicket"){
            eventHub.dispatchEvent(gameEvent)
            ticketCounter += 1
        } else if (clickEvent.target.id === "showTicket"){
            eventHub.dispatchEvent(showEvent)
            ticketCounter += 1
        } else if (clickEvent.target.id === "fullTicket"){
            eventHub.dispatchEvent(fullEvent)
            ticketCounter += 4
        }
        ticketCounterLocation.innerHTML= `
        <div>Total Tickets Purchased: ${ticketCounter}</div>`
    }
)

export const TicketCounter = () => {
    ticketCounterLocation.innerHTML= `
    <div>Total Tickets Purchased: ${ticketCounter}</div>`
}

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
        </div>
        <div class="ticketBooth">
            <button id="foodTicket">Food Ticket</button>
        </div>
        <div class="ticketBooth">
            <button id="gameTicket">Game Ticket</button>
        </div>
        <div class="ticketBooth">
            <button id="showTicket">Sideshow Ticket</button>
        </div>
        <div class="ticketBooth">
            <button id="fullTicket">Full Package Ticket</button>
        </div>
    `
}

