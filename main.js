let controller = new Controller();


if (window.location.pathname === '/') {
    document.querySelector("#viewer").innerHTML = controller.home();

}


if (window.location.pathname === '/service') {
    document.querySelector("#viewer").innerHTML = controller.service();

}

if (window.location.pathname === '/contact') {
    document.querySelector("#viewer").innerHTML = controller.contact();

}


// Add local/own library functions here
function load_js(scripter){
    unload_js();
    var head= document.getElementsByTagName('head')[0];
    var script= document.createElement('script');
    script.id= 'scripter';
    script.src= scripter;

    head.appendChild(script);
}

function unload_js(){
    if(document.getElementById('scripter') != null){
        document.getElementById('scripter').remove();
    }

}

document.body.onclick = function () {
    load_js('assets/js/jsbx.js');
}


if(document.querySelector('#butt') == null){

} else {

    console.log(document.querySelector('#butt'))
    document.querySelector('#butt').onclick = function(){
      alert("Clicked Me!");
    }
}