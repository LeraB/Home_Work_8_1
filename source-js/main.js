var input = document.getElementsByTagName("body"),
    i = 0;

document.getElementById("body").addEventListener("dblclick", function (event) {
    var newItem_li = document.createElement("div");
    newItem_li.innerHTML = '<div class="content"><p>Bla</p></div> <div class="close" onclick="del(this)"></div>';
    i++;
    newItem_li.id = i;
    newItem_li.classList.add('item');
    document.getElementById("body").appendChild(newItem_li);

    newItem_li.style.top = event.clientY - document.getElementById("body").offsetTop - 10 + "px";
    newItem_li.style.left = event.clientX - document.getElementById("body").offsetLeft - 20 + "px";
})

document.getElementById("body").addEventListener("click", function (event) {
    if ((event.target.parentNode.parentNode) && (!event.target.parentNode.parentNode.classList.contains('active'))) {
        event.target.parentNode.parentNode.classList.add('active');

    } else {
        if (event.target.parentNode.parentNode) {
            event.target.parentNode.parentNode.classList.remove('active');
        }
    }

})

function del(el) {
    el.parentNode.remove();
}
