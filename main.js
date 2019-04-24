var data  = {
    name:"Jigga",
    age:36
};

console.log(window.location.pathname);

var homer = new Template();

if(window.location.pathname == '/'){
    document.querySelector("#viewer").innerHTML = homer.home(data);

}

var datax  = {
    name:"Six",
    age:36
};

if(window.location.pathname == '/services'){
    document.querySelector("#viewer").innerHTML = homer.services(datax);

}

var datas  = {
    name:"Byte",
    age:36
};

if(window.location.pathname == '/contact'){
    document.querySelector("#viewer").innerHTML = homer.contact(datas);

}




if(document.querySelector('#butt') == null){
    //alert("No Butt")
} else {
   // alert(typeof document.querySelector('#butt'))
    console.log(document.querySelector('#butt'))
    document.querySelector('#butt').onclick = function(){
        document.querySelector("#viewer").innerHTML = homer.contact(datas);
        //window.location = '/contact';
    }
}






