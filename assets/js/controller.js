class Controller {

    constructor (){

    }

    home(){
        let homeData = {
            info:"Welcome to JSBX",
        };

        import('./views/home.js').then(
            (template)=> {
                const templateData = document.querySelector("#viewer");
                templateData.innerHTML = template.home(homeData);
            }
        );
    }

    services(){
        let serData = {
            info:"Services",
        };

        import('./views/services.js').then(
            (template)=> {
                const templateData = document.querySelector("#viewer");
                templateData.innerHTML = template.services(serData);
            }
        );
    }

    contactus(){
        let conData = {
            info:"Contact Us",
        };

        import('./views/contactus.js').then(
            (template)=> {
                const templateData = document.querySelector("#viewer");
                templateData.innerHTML = template.contactus(conData);
            }
        );

    }



}
