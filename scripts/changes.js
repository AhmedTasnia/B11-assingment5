document.getElementById("completed-btn1").addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board Updated Successfully");
    const mainText = document.getElementById("main-text").innerText;
    const convertedValue = parseInt(mainText);

    const mainText2 = document.getElementById("main-Text2").innerText;
    const convertedValue2 = parseInt(mainText2);

    const sum = convertedValue + 1;
    document.getElementById("main-text").innerText = sum;

    const deduct = convertedValue2 - 1;
    document.getElementById("main-Text2").innerText = deduct;

})
document.getElementById("completed-btn2").addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board Updated Successfully");
    const mainText = document.getElementById("main-text").innerText;
    const convertedValue = parseInt(mainText);

    const mainText2 = document.getElementById("main-Text2").innerText;
    const convertedValue2 = parseInt(mainText2);

    const sum = convertedValue + 1;
    document.getElementById("main-text").innerText = sum;

    const deduct = convertedValue2 - 1;
    document.getElementById("main-Text2").innerText = deduct;

})
document.getElementById("completed-btn3").addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board Updated Successfully");
    const mainText = document.getElementById("main-text").innerText;
    const convertedValue = parseInt(mainText);

    const mainText2 = document.getElementById("main-Text2").innerText;
    const convertedValue2 = parseInt(mainText2);

    const sum = convertedValue + 1;
    document.getElementById("main-text").innerText = sum;

    const deduct = convertedValue2 - 1;
    document.getElementById("main-Text2").innerText = deduct;

})
document.getElementById("completed-btn4").addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board Updated Successfully");
    const mainText = document.getElementById("main-text").innerText;
    const convertedValue = parseInt(mainText);

    const mainText2 = document.getElementById("main-Text2").innerText;
    const convertedValue2 = parseInt(mainText2);

    const sum = convertedValue + 1;
    document.getElementById("main-text").innerText = sum;

    const deduct = convertedValue2 - 1;
    document.getElementById("main-Text2").innerText = deduct;

})
document.getElementById("completed-btn5").addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board Updated Successfully");
    const mainText = document.getElementById("main-text").innerText;
    const convertedValue = parseInt(mainText);

    const mainText2 = document.getElementById("main-Text2").innerText;
    const convertedValue2 = parseInt(mainText2);

    const sum = convertedValue + 1;
    document.getElementById("main-text").innerText = sum;

    const deduct = convertedValue2 - 1;
    document.getElementById("main-Text2").innerText = deduct;

})
document.getElementById("completed-btn6").addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board Updated Successfully");
    const mainText = document.getElementById("main-text").innerText;
    const convertedValue = parseInt(mainText);

    const mainText2 = document.getElementById("main-Text2").innerText;
    const convertedValue2 = parseInt(mainText2);

    const sum = convertedValue + 1;
    document.getElementById("main-text").innerText = sum;

    const deduct = convertedValue2 - 1;
    document.getElementById("main-Text2").innerText = deduct;

})

document.getElementById("notification1").style.display = "none";
document.getElementById("notification2").style.display = "none";
document.getElementById("notification3").style.display = "none";
document.getElementById("notification4").style.display = "none";
document.getElementById("notification5").style.display = "none";
document.getElementById("notification6").style.display = "none";
document.getElementById("enable-btn1").style.display  = "none";
document.getElementById("enable-btn2").style.display  = "none";
document.getElementById("enable-btn3").style.display  = "none";
document.getElementById("enable-btn4").style.display  = "none";
document.getElementById("enable-btn5").style.display  = "none";
document.getElementById("enable-btn6").style.display  = "none";


document.getElementById("completed-btn1").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("notification1").style.display = "block";
    document.getElementById("completed-btn1").disabled = true;
    document.getElementById("completed-btn1").style.display = "none";
    document.getElementById("enable-btn1").style.display  = "block";
})
document.getElementById("completed-btn2").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("notification2").style.display = "block";
    document.getElementById("completed-btn2").style.display = "none";
    document.getElementById("enable-btn2").style.display  = "block";
})
document.getElementById("completed-btn3").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("notification3").style.display = "block";
    document.getElementById("completed-btn3").style.display = "none";
    document.getElementById("enable-btn3").style.display  = "block";
})
document.getElementById("completed-btn4").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("notification4").style.display = "block";
    document.getElementById("completed-btn4").style.display = "none";
    document.getElementById("enable-btn4").style.display  = "block";

})
document.getElementById("completed-btn5").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("notification5").style.display = "block";
    document.getElementById("completed-btn5").style.display = "none";
    document.getElementById("enable-btn5").style.display  = "block";
})
document.getElementById("completed-btn6").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("notification6").style.display = "block";
    document.getElementById("completed-btn6").style.display = "none";
    document.getElementById("enable-btn6").style.display  = "block";    
})

document.getElementById("clear-btn").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("notification1").style.display = "none";
    document.getElementById("notification2").style.display = "none";
    document.getElementById("notification3").style.display = "none";
    document.getElementById("notification4").style.display = "none";
    document.getElementById("notification5").style.display = "none";
    document.getElementById("notification6").style.display = "none";

})