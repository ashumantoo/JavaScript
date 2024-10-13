
const TicketManager = require("./ticketManagerEvent.cjs");

const ticketManager = new TicketManager(10);

ticketManager.on("buy", (email, price, timeStamp) => {
    console.log(`${email} has purchase one ticket at price of ${price} on ${timeStamp}`);
});

ticketManager.buy("test@email.com", 20);
ticketManager.buy("someone@gmail.com", 120);