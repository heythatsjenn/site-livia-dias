//Código da barra de navegação

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click',()=> {
    nav.classList.toggle('nav-active');
  });

  navLinks.forEach((link,index) =>{
    if(link.style.animation) {
      link.style.animation=''
    } else {
      link.style.animation=`navLinkFade 0.5s ease forwards ${index /7 + 2}s`;
    }
  });
}
navSlide();

// Código da API do mapa
var mymap = L.map('mapa').setView([-22.8706192, -43.3399598], 17);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoiaGV5dGhhdHNqZW5uIiwiYSI6ImNrYjJicjlkMTA5dHAydnM3b3NxOHR1bWsifQ.d9X4G2w7vENAbuwV-7sYRA'
}).addTo(mymap);

var marker = L.marker([-22.8706192, -43.3399598]).addTo(mymap);
