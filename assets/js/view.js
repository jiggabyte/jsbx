class View {

    constructor (){

    }

    home(homeData){

        return `
       <div id="vs" class="vs">
       <h2 id="h"> ${homeData.info}</h2>
       
       </div>
       
       `;
    }

    service(serData){
        return `
       <div id="vy" class="vs">
       <h2 id="k"> ${serData.info}</h2>
       </div>
       
       `;
    }

    contact(conData){

        return `
              
       <div id="vz" class="vs">
       <h2 id="g"> ${conData.info}</h2>
       </div>
       
       
       `;

    }



}