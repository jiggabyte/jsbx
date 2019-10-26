// Add DOM Manipulation Code here
if(document.querySelector('#notax') == null){

} else {

    console.log(document.querySelector('#notax'))
    document.querySelector('#notax').onclick = function(){
        alert("Clicked Me!");
    }
}
