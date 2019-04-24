class Template {

    constructor (){


    }


    home(data){

       return `
       <div id="vs">
       <h2 id="h"> ${data.name}</h2>
       <button id="butt">Load</button>
       </div>
       
       `;
    }

    services(data){

        return `
       <div id="vs">
       <h2 id="h"> ${data.name}</h2>
       <button id="prod">Products</button>
       </div>
       
       `;
    }

    contact(datas){

        return `
              
       <div id="vz">
       <h2 id="g"> ${datas.name}</h2>
       </div>
       
       
       `;

    }



}