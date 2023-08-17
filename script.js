const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

// ERROR

const errday = document.getElementById("errday");
const errmonth = document.getElementById("errmonth");
const erryear = document.getElementById("erryear");

const validday = document.getElementById("validday");
const validmonth = document.getElementById("validmonth");
const validyear = document.getElementById("validyear");

// INPUT YEAR

const dateday = document.getElementById("dateday");
const datemonth = document.getElementById("datemonth");
const dateyear = document.getElementById("dateyear");


const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;
const currentDay = currentDate.getDate();


day.addEventListener("input", ()=>{
    if(day.value.length === 0){
        errday.classList.toggle("active");
        dateday.classList.toggle("active");
        day.classList.toggle("red");
        day.classList.remove("active");
    } else if(day.value.length < 2){
        day.classList.remove("red");
        day.classList.remove("active");
        errday.classList.remove("active");
        dateday.classList.remove("active");
        validday.classList.remove("active");
    } else if(day.value > 31){
        dateday.classList.toggle("active");
        validday.classList.toggle("active");
        day.classList.toggle("red");
    }
})

month.addEventListener("input", ()=>{
    if(month.value.length === 0){
        errmonth.classList.toggle("active");
        datemonth.classList.toggle("active");
        month.classList.toggle("red");
    } else if(month.value.length < 2){
        errmonth.classList.remove("active");
        datemonth.classList.remove("active");
        month.classList.remove("red");
        validmonth.classList.remove("active");
    } 
    
    if (month.value > 12){
        datemonth.classList.toggle("active");
        validmonth.classList.toggle("active");
        month.classList.toggle("red");
    } 
    
})

year.addEventListener("input", ()=>{
    if(year.value.length === 0){
        erryear.classList.toggle("active");
        dateyear.classList.toggle("active");
        year.classList.toggle("red");
    } else if(year.value.length < 4){
        erryear.classList.remove("active");
        dateyear.classList.remove("active");
        year.classList.remove("red");
        validyear.classList.remove("active");
    } else if(year.value > currentYear){
        dateyear.classList.toggle("active");
        validyear.classList.toggle("active")
        year.classList.toggle("red");
    }
})

// IMAGE SEND

const imagesend = document.getElementById("imagesend");

// MAIN YEAR

const mainyears = document.getElementById("mainyears");
const mainmonths = document.getElementById("mainmonths");
const maindays = document.getElementById("maindays");

imagesend.addEventListener("click", ()=>{

const birthyear = year.value;
const birthmonth = month.value;
const birthday = day.value;

let years = currentYear - birthyear;
let months = currentMonth - birthmonth;
let days = currentDay - birthday;

if (months < 0 || (months === 0 && days < 0)) {
    years--;
    months += 12;
}

if (days < 0) {
    const daysInLastMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
    days += daysInLastMonth;
    months--;
}

const ageInDays = (years * 365) + (months * 31) + days;
const ageInYears = Math.floor(ageInDays / 365);
const remainingDays = ageInDays - (ageInYears * 365);
const ageInMonths = Math.floor(remainingDays / 31);
const ageInDaysLeft = remainingDays - (ageInMonths * 31);

function mainerrors(){
    mainyears.value = '--';
    mainmonths.value = '--';
    maindays.value = '--';
}

function mainvalue(){
    mainyears.value = ageInYears;
    maindays.value = ageInDaysLeft;
    mainmonths.value = ageInMonths;
}

    // DAYS

    if((birthday === "") || (birthday == 0) || (birthday > 32) || (birthday.includes("-"))){
            mainerrors();
            return;
    } 

    if((birthmonth > 12) || (birthmonth === "") || (birthmonth == 0) || (birthmonth.includes("-"))){
            mainerrors();
            return;
    } 

    if((birthyear > currentYear) || (birthyear === "") || (birthyear == 0) || (birthyear.includes("-"))){
            mainerrors();
            return;

    } 

    if(birthmonth == 2 && birthday > 28){
            mainerrors();
            return;
    }

    if((birthmonth == 4 && birthday > 30) || (birthmonth == 6 && birthday > 30) || (birthmonth == 9 && birthday > 30) || (birthmonth == 11 && birthday > 30)){
            mainerrors();
            return;
    }
    
    if((birthmonth == 1 && birthday > 31) || (birthmonth == 3 && birthday > 31) || (birthmonth == 5 && birthday > 31) || (birthmonth == 7 && birthmonth > 31) || (birthmonth == 8 && birthday > 31) || (birthmonth == 10 && birthday > 31) || (birthmonth == 12 && birthday > 31)){
            mainerrors();
            return;
    }   

    else{
        mainvalue();    

    }
    
    // if(months > currentMonth) {

    //     years = Math.abs(birthyear - currentYear) - 1;

    //     months = Math.abs(Math.floor(ageinmonths - 1 + 12 ) % 12);

    //     mainvalue();
    // } 

});

window.onload = function(){
    year.value = '';
    day.value = '';
    month.value = '';
    mainyears.value = '--';
    mainmonths.value = '--';
    maindays.value = '--';
}