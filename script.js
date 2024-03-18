let servicesBtn = document.getElementById('serviceBtn');
let productsBtn = document.getElementById('productsBtn');
let services = document.querySelector('.Services');
let products = document.querySelector('.Products');

servicesBtn.addEventListener('click', ()=>{
    console.log('hey');
    services.scrollIntoView({behavior:'smooth'});
});

productsBtn.addEventListener('click', ()=>{
    products.scrollIntoView({behavior:'smooth'});
});
