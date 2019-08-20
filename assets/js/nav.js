let menu = new Template();
let viewer = new View();


    if (window.location.pathname == '/') {
        document.querySelector("#viewer").innerHTML = menu.home(homeData);

    }


    if (window.location.pathname == '/services') {
        document.querySelector("#viewer").innerHTML = menu.services(serData);

    }

    if (window.location.pathname == '/contact') {
        document.querySelector("#viewer").innerHTML = menu.contact(conData);

    }

