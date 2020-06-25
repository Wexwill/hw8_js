
let message = function(type, msg) {
    let parentElement = document.createElement('div');
        element = document.createElement('div'),

    parentElement.classList.add('alert_list');
    document.body.insertBefore(parentElement, document.querySelector('.contacts'));

    element.classList.add(type);
    element.innerHTML = msg;
    parentElement.appendChild(element);

    setTimeout(() => {element.remove()}, 3000);
}
let a = document.location.search,
    b = /\?type=(.+)&msg=(.+)/,
    type = a.match(b)[1],
    msg = decodeURIComponent(a.match(b)[2]);
    msg = msg.replace(/\+/g, ' ');
console.log(msg);
message(type, msg);
