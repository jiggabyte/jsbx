document.body.onclick = function () {
    load_js('assets/js/dyn_x.js');
}


if(document.querySelector('#butt') == null){

} else {

    console.log(document.querySelector('#butt'))
    document.querySelector('#butt').onclick = function(){
      document.querySelector("#viewer").innerHTML = infoData.welcome;
    }
}







