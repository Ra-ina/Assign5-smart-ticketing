// console.log('connected');

let count = 1;
let totalPrice = 0;
const allBtns = document.getElementsByClassName('btn1');

for (const btn1 of allBtns) {
    // SET THE TICKET TO 550
    btn1.addEventListener('click', function () {
        btn1.classList.add('bg-green-300');
        const settingTicket = document.getElementById('ticketSet');
        settingTicket.innerText = + count;
        count++;

        // THE TICKET PRICE
        const ticketPrice = document.getElementById('priceOfTicket');
        const ticket = ticketPrice.innerText;
        const convertTypeofTicket = parseInt(ticket);
        document.getElementById('priceOfTicket').innerText = parseInt(ticket);

        const btnText = btn1.innerText

        // SET THE PRICE
        const settingPrice = document.getElementById('priceSet');
        const li = document.createElement('li')
        li.style.display = 'flex'
        li.style.justifyContent = "space-between"
        const para = document.createElement('p');
        para.innerText = btnText;
        const para2 = document.createElement('p');
        para2.innerText = convertTypeofTicket;
        li.appendChild(para)
        li.appendChild(para2)
        settingPrice.appendChild(li);

        // SET TOTAL PRICE
        totalPrice = totalPrice + convertTypeofTicket;
        document.getElementById('totalPrice').innerText = totalPrice;

        const grandTotal = document.getElementById('grandTotal')
        const grandTotalPrice = grandTotal.innerText;
        const convertTypeofTotal = parseInt(grandTotalPrice);

        const seatsLeft = document.getElementById('seatsLeft');
        const seatsLeftText = seatsLeft.innerText;
        const convertTypeofSeatsLeft = parseInt(seatsLeftText);
        const newSeats = convertTypeofSeatsLeft - 1;
        seatsLeft.innerText = newSeats;

    })

}
// COUPON PART BUT ITS NOT WORKING YET.
const couponBtn = document.getElementById('btnApply');
couponBtn.addEventListener('click', function () {
    const couponCode = document.getElementById('coupon-input').value;
    const input = couponCode.split(' ').join('').toUpperCase();
    if (couponCode === 'NEW15') {
        grandTotal = grandTotal - (ticketPrice * 0.15);
        setInnerText('grandTotal', grandTotal);
        document.getElementById('coupon-field').classList.add('hidden');
    }
    else if (couponCode === 'Couple 20') {

        grandTotal = grandTotal - (ticketPrice * 0.20);
        setInnerText('grandTotal', grandTotal);
        document.getElementById('coupon-field').classList.add('hidden');
    }
    else {
        alert('invalid coupon code');
    }
})


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
