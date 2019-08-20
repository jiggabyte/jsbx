class Template {

    constructor (){


    }

    home(homeData){

       return `
       <div id="vs">
       <h2 id="h"> ${homeData.name}</h2>
       <button id="butt">Load</button>
       </div>
       
       `;
    }

    services(serData){

        return `
       <div id="vs">
       <h2 id="h"> ${serData.name}</h2>
       <button id="prod">Products</button>
       </div>
       
       `;
    }

    contact(conData){

        return `
              
       <div id="vz">
       <h2 id="g"> ${conData.name}</h2>
       </div>
       
       
       `;

    }



}