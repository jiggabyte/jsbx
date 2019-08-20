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