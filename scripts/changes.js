function updateValues(incrementId, incrementValue, decrementId, decrementValue) {
    const mainText = document.getElementById(incrementId).innerText;
    const convertedValue = parseInt(mainText);

    const mainText2 = document.getElementById(decrementId).innerText;
    const convertedValue2 = parseInt(mainText2);

    document.getElementById(incrementId).innerText = convertedValue + incrementValue;
    document.getElementById(decrementId).innerText = convertedValue2 - decrementValue;
}

document.getElementById("completed-btn1").addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board Updated Successfully");
    updateValues("main-text", 1, "main-Text2", 1);
})

document.getElementById("completed-btn2").addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board Updated Successfully");
    updateValues("main-text", 1, "main-Text2", 1);
})

document.getElementById("completed-btn3").addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board Updated Successfully");
    updateValues("main-text", 1, "main-Text2", 1);
})

document.getElementById("completed-btn4").addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board Updated Successfully");
    updateValues("main-text", 1, "main-Text2", 1);
})

document.getElementById("completed-btn5").addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board Updated Successfully");
    updateValues("main-text", 1, "main-Text2", 1);
})

document.getElementById("completed-btn6").addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board Updated Successfully");
    updateValues("main-text", 1, "main-Text2", 1);
})

let clickCount = 0;
        for (let i = 1; i <= 6; i++) {
            document.getElementById(`completed-btn${i}`).addEventListener("click", function() {
                clickCount++;
                if (clickCount === 6) {
                    alert("Congrats! You have completed all the current tasks.");
                }
            });
        }

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

    const now = new Date();
    const formattedDate = now.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    document.getElementById("date").textContent = formattedDate;  

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now2 = new Date();
    const currentDay = daysOfWeek[now2.getDay()];
    document.getElementById("day").textContent = currentDay; 

    const now3 = new Date();
    const time = now.toLocaleTimeString(); 
    document.getElementById("time1").textContent = time;
    document.getElementById("time2").textContent = time;
    document.getElementById("time3").textContent = time;
    document.getElementById("time4").textContent = time;
    document.getElementById("time5").textContent = time;
    document.getElementById("time6").textContent = time;

    function getRandomColor() {
        return (Math.random() * 256);  
    }
    document.getElementById("theme-btn").addEventListener("click", function () {
        document.body.style.backgroundColor = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`; 
    });

