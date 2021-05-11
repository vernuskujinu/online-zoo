const sideOpen = document.querySelector('.side_bar_item');
const sideListClose = document.querySelectorAll('.side_list');
const sideListOpen = document.querySelectorAll('.side_list_open');
const sideClose = document.querySelector('.side_bar_item_open');
const video = document.querySelector('.video');
const videos = document.querySelectorAll('.videos');
const videoList = document.querySelectorAll('.video_list');
const meetSpis = document.querySelectorAll('.meet_spis');
const comments = document.querySelectorAll('.comments');
const popupLinks = document.querySelectorAll('.popup_link');
const popupCloseIcon = document.querySelector('.exit');
const popupCloseAll = document.querySelector('.exit_all');
const body = document.querySelector('body');
const chooseAmount = document.querySelectorAll('.amount');
const necessary1 = document.querySelectorAll('.necessary1');
const necessary2 = document.querySelectorAll('.necessary2');
const necessary3 = document.querySelectorAll('.necessary3');
const next2 = document.querySelector('.next2');

let delay = 17000;
let videoNumber;
let currentVideo = 0;
let currentSide = 0;
let currentMeet = 0;
let k = 0;
let count = true;
let necessaryCheck1 = true;
let necessaryCheck2 = true;

document.addEventListener('click', event => {
if (event.target.classList.contains('side_bar_open')) {
sideOpen.style.display = 'none';
sideClose.style.display = 'block';
}
if (event.target.classList.contains('side_bar_open_open')) {
sideClose.style.display = 'none';
sideOpen.style.display = 'block';
}
if (event.target.classList.contains('animal_location8')) {
location.href = 'eagle.html';
} else if (event.target.classList.contains('animal_location4')) {
location.href = 'lemur.html';
} else if (event.target.classList.contains('animal_location5')) {
location.href = 'gorilla.html';
} else if (event.target.classList.contains('animal_location6')) {
location.href = 'panda.html';
}
if (event.target.classList.contains('side_bar_down')) {
currentSide = currentSide % (sideListClose.length - 3);
if (currentSide === 4) {
for (let i = 0; i < sideListClose.length; i++) {
sideListClose[i].classList.toggle('non_active');
sideListOpen[i].classList.toggle('non_active');
}
currentSide++;
} else {
sideListClose[currentSide].classList.toggle('non_active');
sideListClose[currentSide + 4].classList.toggle('non_active');
sideListOpen[currentSide].classList.toggle('non_active');
sideListOpen[currentSide + 4].classList.toggle('non_active');
currentSide++;
}
}
if (event.target.classList.contains('side_bar_down_open')) {
currentSide = currentSide % (sideListOpen.length - 3);
if (currentSide === 4) {
for (let i = 0; i < sideListClose.length; i++) {
sideListClose[i].classList.toggle('non_active');
sideListOpen[i].classList.toggle('non_active');
}
currentSide++;
} else {
sideListClose[currentSide].classList.toggle('non_active');
sideListClose[currentSide + 4].classList.toggle('non_active');
sideListOpen[currentSide].classList.toggle('non_active');
sideListOpen[currentSide + 4].classList.toggle('non_active');
currentSide++;
}
}
if (event.target.classList.contains('button_right_zoos')) {
if (currentVideo !== 4) {
currentVideo = currentVideo % (videos.length - 3);
videos[currentVideo].classList.toggle('non_active');
videos[currentVideo + 3].classList.toggle('non_active');
currentVideo++;
}
}
if (event.target.classList.contains('button_left_zoos')) {
if (currentVideo !== 0) {
currentVideo = currentVideo % (videos.length - 3);
videos[currentVideo - 1].classList.toggle('non_active');
videos[currentVideo + 2].classList.toggle('non_active');
currentVideo--;
}
}
if (event.target.classList.contains('space')) {
videoNumber = event.target.dataset.video;
let src = video.src;
video.src = videoList[videoNumber - 1].src;
}
if (event.target.classList.contains('arrow1') || event.target.classList.contains('arrow1_img')) {
currentMeet = currentMeet % ((meetSpis.length / 4) + 1);
if (currentMeet
 
!== 0) {
meetSpis[currentMeet - 1].classList.toggle('non_active');
meetSpis[currentMeet + meetSpis.length / 4 - 1].classList.toggle('non_active');
meetSpis[currentMeet + meetSpis.length / 2 - 1].classList.toggle('non_active');
meetSpis[currentMeet + meetSpis.length / 2 + 3].classList.toggle('non_active');
currentMeet--;
} else {
for (let i = 0; i < meetSpis.length; i++) {
meetSpis[i].classList.toggle('non_active');
}
currentMeet = 4;
}
}
if (event.target.classList.contains('arrow2') || event.target.classList.contains('arrow2_img')) {
currentMeet = currentMeet % ((meetSpis.length / 4) + 1);
if (currentMeet !== 4) {
meetSpis[currentMeet].classList.toggle('non_active');
meetSpis[currentMeet + meetSpis.length / 4].classList.toggle('non_active');
meetSpis[currentMeet + meetSpis.length / 2].classList.toggle('non_active');
meetSpis[currentMeet + meetSpis.length / 2 + 4].classList.toggle('non_active');
currentMeet++;
} else {
for (let i = 0; i < meetSpis.length; i++) {
meetSpis[i].classList.toggle('non_active');
}
currentMeet++;
}
}
if (event.target.classList.contains('vector1') || event.target.classList.contains('vector1_img')) {
clearTimeout(time);
time = setTimeout(t, 60000);
for (let i = 0; i < comments.length; i++) {
comments[i].classList.add('to_left');
}
setTimeout(function () {
for (let i = 0; i < comments.length; i++) {
comments[i].classList.toggle('non_active');
comments[i].classList.remove('to_left');
}
}, 2000)

}
if (event.target.classList.contains('vector2') || event.target.classList.contains('vector2_img')) {
clearTimeout(time);
time = setTimeout(t, 60000);
for (let i = 0; i < comments.length; i++) {
comments[i].classList.add('to_right');
}
setTimeout(function () {
for (let i = 0; i < comments.length; i++) {
comments[i].classList.toggle('non_active');
comments[i].classList.remove('to_right');
}
}, 2000)

}
if (event.target.classList.contains('comments')) {
clearTimeout(time);
setTimeout(t, 60000);
}
})





let time = setTimeout(t, delay);
function t() {
for (let i = 0; i < comments.length; i++) {
comments[i].classList.add('to_left');
}
setTimeout(function () {
for (let i = 0; i < comments.length; i++) {
comments[i].classList.toggle('non_active');
comments[i].classList.remove('to_left');
}
}, 2000)
time = setTimeout(t, delay);
}


document.querySelector('.other_amount_field').addEventListener('click', () => {
for (i = 0; i < chooseAmount.length; i++) {
if (chooseAmount[i].classList.contains('active')) {
chooseAmount[i].classList.remove('active');
}
}
document.querySelector('.other_amount_button').classList.add('active');
document.querySelector('.other_amount_field').classList.add('focus');
})
if (popupLinks.length > 0) {
for (let index = 0; index < popupLinks.length; index++) {
const popupLink = popupLinks[index];
popupLink.addEventListener('click', function () {
if (document.querySelector('.donation_ammount').value != '') {
document.querySelector('.other_amount_field').value = document.querySelector('.donation_ammount').value;
count = false;
document.querySelector('.other_amount_button').classList.add('active');
document.querySelector('.other_amount_field').classList.add('focus');
}
if (popupLink.dataset.value !== undefined && count != false) {
if (popupLink.classList.contains('other')) {
document.querySelector('.other_amount_field').classList.add('focus');
}
for (let i = 0; i < chooseAmount.length; i++) {
if (chooseAmount[i].dataset.values === popupLink.dataset.value) {
chooseAmount[i].classList.add('active');
}
}
}
const popupName = popupLink.dataset.link;
const currentPopup = document.getElementById(popupName);
popupOpen(currentPopup);
})
}
}
popupCloseIcon.addEventListener('click', function () {
popupClose1(popupCloseIcon.closest('.popup'));
})
popupCloseAll.addEventListener('mouseover', function () {
if (necessary2.length > 0 && necessary3.length > 0) {
for (let i = 0; i <
 
necessary2.length; i++) {
if (!necessary2[i].checkValidity()) {
necessaryCheck2 = false;
}
}
for (let i = 0; i < necessary3.length; i++) {
if (necessary3[i].value === "Mounth" || necessary3[i].value === "Year") {
necessaryCheck2 = false;
}
}
if (necessaryCheck2 == true) {
popupCloseAll.classList.add('hover2');
}
else {
necessaryCheck2 = true;
popupCloseAll.classList.remove('hover2');
}
}
})
popupCloseAll.addEventListener('click', function () {
if (necessary2.length > 0) {
for (let i = 0; i < necessary2.length; i++) {
if (!necessary2[i].checkValidity()) {
necessaryCheck2 = false;
}
}
for (let i = 0; i < necessary3.length; i++) {
if (necessary3[i].value === "Mounth" || necessary3[i].value === "Year") {
necessaryCheck2 = false;
}
}
if (necessaryCheck2 == true) {
popupClose1(popupCloseAll.closest('.popup'));
}
else {
necessaryCheck2 = true;
}
}
})
next2.addEventListener('mouseover', function () {
if (necessary1.length > 0) {
for (let i = 0; i < necessary1.length; i++) {
if (!necessary1[i].checkValidity()) {
necessaryCheck1 = false;
}
}
if (necessaryCheck1 == true) {
next2.classList.add('hover1');
}
else {
next2.classList.remove('hover1');
necessaryCheck1 = true;
}
}
})
next2.addEventListener('click', function () {
if (necessary1.length > 0) {
for (let i = 0; i < necessary1.length; i++) {
if (!necessary1[i].checkValidity()) {
necessaryCheck1 = false;
}
}
if (necessaryCheck1 == true) {
const popupName = next2.dataset.link;
const currentPopup = document.getElementById(popupName);
if (currentPopup) {
const popupActive = document.querySelector('.open');
if (popupActive) {
popupClose(popupActive);
}
else {
bodyLock();
}
currentPopup.classList.add('open');
currentPopup.addEventListener('click', function (e) {
if (!e.target.closest('.content')) {
popupClose1(currentPopup);
}
})
}
}
else {
necessaryCheck1 = true;
}
}
})
document.addEventListener('click', function (e) {
if (e.target.classList.contains('amount')) {

for (i = 0; i < chooseAmount.length; i++) {
if (chooseAmount[i].classList.contains('active')) {
chooseAmount[i].classList.remove('active');
if (e.target.classList.contains('other_amount_button')) {
document.querySelector('.other_amount_field').classList.add('focus');
} else {
document.querySelector('.other_amount_field').classList.remove('focus');
}
}
}
e.target.classList.add('active');
}
if (e.target.classList.contains('special')) {
e.target.classList.toggle('active');
document.querySelector('.other_amount_field').classList.remove('focus');
}
})

function popupOpen(currentPopup) {
if (currentPopup) {
const popupActive = document.querySelector('.open');
if (popupActive) {
popupClose(popupActive);
}
else {
bodyLock();
}
currentPopup.classList.add('open');
currentPopup.addEventListener('click', function (e) {
if (!e.target.closest('.content')) {
popupClose1(currentPopup);
}
})
}
}
function popupClose1(popupActive) {
popupActive.classList.remove('open');
bodyUnlock();
for (let i = 0; i < chooseAmount.length; i++) {
if (chooseAmount[i].classList.contains('active')) {
chooseAmount[i].classList.remove('active');
}
}
if (document.querySelector('.other_amount_field').classList.contains('focus')) {
document.querySelector('.other_amount_field').classList.remove('focus');
}

}
function popupClose(popupActive) {
popupActive.classList.remove('open');
bodyUnlock();
if (document.querySelector('.other_amount_field').classList.contains('focus')) {
document.querySelector('.other_amount_field').classList.remove('focus');
}
}
function bodyLock() {
const lockPadding = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
body.style.paddingRight = lockPadding;
body.classList.add('scroll');
}
function bodyUnlock() {
body.style.paddingRight = '0px';
body.classList.remove('scroll');
}