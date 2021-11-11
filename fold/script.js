// Efek Hover <macet>
// const thumb = document.querySelector('.thumb-box');
// const teks = document.querySelector('.teks');

// function hoverIn() {
//     teks.style.zIndex='3';
// };
// thumb.onmouseover = hoverIn;

// function hoverOut() {
//     teks.style.zIndex='1';
// };
// thumb.onmouseout = hoverOut;

// const visi = document.querySelector('.isi .bagan');
// console.log(visi);

const visi = document.getElementsByTagName('h1')[0];

const misi = document.getElementsByTagName('h1')[1];

const pgraph = document.querySelector('.isi .bagan-isi .pgraph');
const ls = document.querySelector('.isi .bagan-isi .ls');
const bagan = document.querySelector('.isi .bagan');
console.log(bagan);

visi.addEventListener('click', function() {
    pgraph.style.transform="translate(0, 0)";
    pgraph.style.transition="all .2s";
});

misi.addEventListener('click', function () {
    ls.style.transform="translate(0, 0)";
    ls.style.transition="all .2s";
});

// visi.addEventListener('click', function() {
//     bagan.style.width="0px";
//     bagan.style.transition="all .6s";
//     // misi.style.display="none";
// });
