// console.log('connected');





// THE TICKET PRICE
const ticketPrice = document.getElementById('priceOfTicket');
const ticket = ticketPrice.innerText;
const convertTicket = parseInt(ticket);
document.getElementById('priceOfTicket').innerText = parseInt(ticket);

const seatText=seat.innerText

// next and return button functions
const nextBtn = document.getElementById('NextBtn');
nextBtn.addEventListener('click', function () {
    document.getElementById('header').classList.add('hidden');
    document.getElementById('main').classList.add('hidden');
    document.getElementById('footer').classList.add('hidden');
    document.getElementById('successPop').classList.remove('hidden');

});
const returnBtn = document.getElementById('ReturnBtn');
returnBtn.addEventListener('click', function () {
    location.reload()
});