var input = document.getElementsByTagName("body"),
    i = 0;

document.getElementById("body").addEventListener("click", function (event) {
    console.log('Bla');
    var newItem_li = document.createElement("div");
     newItem_li.innerHTML = ' <p>Bla</p>';
    i++;
    newItem_li.id = i;
    newItem_li.classList.add('item');
    document.getElementById("body").appendChild(newItem_li);

    newItem_li.style.top =  event.clientY - document.getElementById("body").offsetTop - 10 + "px";
    newItem_li.style.left =  event.clientX - document.getElementById("body").offsetLeft - 20 + "px";
})

