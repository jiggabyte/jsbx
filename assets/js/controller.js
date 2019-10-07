class Controller {

    constructor (){
     self.view = new View();
    }

    home(){
        let homeData = {
            info:"Welcome to JSBX",
        };


        return self.view.home(homeData);
    }

    service(){
        let serData = {
            info:"Services",
        };

        return self.view.service(serData);
    }

    contact(){
        let conData = {
            info:"Contact Us",
        };

        return self.view.contact(conData);

    }



}