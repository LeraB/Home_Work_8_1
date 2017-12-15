var wraper = document.getElementById("body"),
    i = 0;

wraper.addEventListener("dblclick", function (event) {
    var newItem_li = document.createElement("li");
    newItem_li.innerHTML = '<div class="content"><p>Bla</p></div> <div class="close" onclick="del(this)"></div>';
    i++;
    newItem_li.id = i;
    newItem_li.classList.add('item');
    document.getElementById("body").appendChild(newItem_li);

    newItem_li.style.top = event.clientY - document.getElementById("body").offsetTop + 15 + "px";
    newItem_li.style.left = event.clientX - document.getElementById("body").offsetLeft - 20 + "px";

    var clRect = wraper.getBoundingClientRect()

    if (newItem_li.offsetLeft > wraper.offsetWidth - newItem_li.offsetWidth) {
        newItem_li.style.left = wraper.offsetWidth - newItem_li.offsetWidth + 'px'
    }
    if (newItem_li.offsetTop > wraper.offsetHeight - newItem_li.offsetHeight) {
        newItem_li.style.top = wraper.offsetHeight - newItem_li.offsetHeight + 'px'
    }


    function move(event) {

        newItem_li.style.top = event.clientY - clRect.top + 'px';
        newItem_li.style.left = event.clientX - clRect.left + 'px';

        if (newItem_li.offsetLeft > wraper.offsetWidth - newItem_li.offsetWidth) {
            newItem_li.style.left = wraper.offsetWidth - newItem_li.offsetWidth + 'px';
        }
        if (newItem_li.offsetTop > wraper.offsetHeight - newItem_li.offsetHeight) {
            newItem_li.style.top = wraper.offsetHeight - newItem_li.offsetHeight + 'px';
        }
    }

    newItem_li.ondragstart = function () {
        return false;
    };
    newItem_li.onmousedown = function (e) {

        wraper.onmousemove = function (e) {
            move(e);
        };

        newItem_li.onmouseup = function (e) {
            newItem_li.onmouseup = null;
            wraper.onmousemove = null;
        }
    }
});

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

