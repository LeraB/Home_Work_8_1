var input = document.getElementsByTagName("body"),
    i = 0;


document.getElementById("body").addEventListener("click", getClickPosition, false);

function getClickPosition(e) {
    var newItem_li = document.createElement("div");
    newItem_li.innerHTML = ' <p>Bla</p>';
    i++;
    newItem_li.id = i;
    newItem_li.classList.add('item');
    document.getElementById("body").appendChild(newItem_li);

    var parentPosition = getPosition(document.getElementById("body").x);
    var xPosition = e.clientX - parentPosition.x;// - (newItem_li.clientWidth / 2);
    var yPosition = e.clientY - parentPosition.y;// - (newItem_li.clientHeight / 2);

    newItem_li.style.top = xPosition + "px";
    newItem_li.style.left = yPosition + "px";

    console.log( yPosition + "px");

}

function getPosition(el) {
    var xPosition = 0;
    var yPosition = 0;

    while (el) {
        if (el.id === "body") {
            // deal with browser quirks with body/window/document and page scroll
            var xScrollPos = el.scrollLeft || document.documentElement.scrollLeft;
            var yScrollPos = el.scrollTop || document.documentElement.scrollTop;

            xPosition += (el.offsetLeft - xScrollPos );
            yPosition += (el.offsetTop - yScrollPos);
        } else {
            xPosition += (el.offsetLeft - el.scrollLeft);
            yPosition += (el.offsetTop - el.scrollTop);
        }

        el = el.offsetParent;
    }
    return {
        x: xPosition,
        y: yPosition
    };
}
// }
// document.getElementById("body").addEventListener("click", function (event) {
//     console.log('Bla');
//     var newItem_li = document.createElement("div");
//      newItem_li.innerHTML = ' <p>Bla</p>';
//     i++;
//     newItem_li.id = i;
//     newItem_li.classList.add('item');
//     document.getElementById("body").appendChild(newItem_li);
//     newItem_li.style.top = event.x + "px";
//     newItem_li.style.left = event.y + "px";
//
//     console.log(event.scrollTop);
// })