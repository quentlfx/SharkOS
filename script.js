setInterval(function() {
        document.querySelector('#time').innerHTML = new Date().toLocaleTimeString();
    }, 1000);


dragElement(document.getElementById("welcome"));
function dragElement(elmnt) {
    var intitalx = 0
    var intitaly =0
    var x = 0
    var y =0

    if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = startdraging;
    }else {
        elmnt.onmousedown = startdraging;
    }

    function startdraging(e) {
        e = e || window.event;
        e.preventDefault();
        intitalx = e.clientX;
        intitaly = e.clientY;
        document.onmouseup = stopdraging;
        document.onmousemove = draging;
    }

    function draging(e) {
        e = e || window.event;
        e.preventDefault();
        x = intitalx - e.clientX;
        y = intitaly - e.clientY;
        intitalx = e.clientX;
        intitaly = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - y) + "px";
        elmnt.style.left = (elmnt.offsetLeft - x) + "px";
    }

    function stopdraging() {
        document.onmouseup = null;
        document.onmousemove = null;
    }

}


var welcomeScreen = document.querySelector("#welcome")

function closeWindow(element) {
  element.style.display = "none"
}

function openWindow(element) {
    element.style.display = "flex"
}


var welcomeclose = document.querySelector("#welcomeclose")


var welcomeopen = document.querySelector("#welcomeopen")

welcomeclose.addEventListener("click", function() {
  closeWindow(welcomeScreen);
});

welcomeopen.addEventListener("click", function() {
  openWindow(welcomeScreen);
});

var selectedIcon = undefined