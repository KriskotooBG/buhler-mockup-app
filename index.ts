import './style/css/style.css';

import machines_db from './mockupdb/machines.json'
import { Header } from './src/UIElements/Header';
import { NavigationBar } from './src/UIElements/NavigationBar';
import { ProductionLineMachines } from './src/TypeScript/ProductionLineMachines';
import { Machine } from './src/UIElements/Machine';


const productionLineOne = new ProductionLineMachines();




/**
 * A small mockup function to display the machines from the file
 */
function displayMachines():void{
	productionLineOne.getAllMachines().forEach(machine => {
    console.log(machine)
    document.getElementById("underheaderNavRow").appendChild(machine.generateNavigationMarkup());


		document.getElementById("mainViewWrapper").appendChild(machine.generateOverviewMarkup());
    if(!productionLineOne.isLastMachine(machine.id)) document.getElementById("mainViewWrapper").appendChild(machine.generateLineMarkerMarkup());

    machine.onMainClick = (id:string, event:Event) => {
      console.log(id)
    }
	});
}


/**
 * A small mockup function to load the machines from a file
 */
function loadMachinesFromFile():void{
	machines_db.forEach(machine => {
		const entry = new Machine(machine.uid, machine.type, machine.displayName);
		entry.status = machine.status;

		productionLineOne.addMachine(entry);
	});
}




function init():void{
  document.body.prepend((new Header(true)).generateMarkup());
  document.body.appendChild((new NavigationBar()).generateMarkup());

  loadMachinesFromFile();
  displayMachines();
}
init();