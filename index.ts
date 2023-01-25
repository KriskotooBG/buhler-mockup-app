import './style/css/style.css';

import machines_db from './mockupdb/machines.json'
import { Header } from './src/UIElements/Header';
import { NavigationBar } from './src/UIElements/NavigationBar';
import { ProductionLineMachines } from './src/TypeScript/ProductionLineMachines';
import { Machine } from './src/UIElements/Machine';


const productionLineOne = new ProductionLineMachines();





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





/**
 * Init function: Entry point of the application
 */
function init():void{
  document.body.prepend((new Header(true)).generateMarkup());
  document.body.appendChild((new NavigationBar()).generateMarkup());
  document.body.appendChild(productionLineOne.generateMarkup());


  loadMachinesFromFile();
 


  productionLineOne.getAllMachines().forEach(machine => {
    document.getElementById("underheaderNavRow").appendChild(machine.generateNavigationButtonMarkup());


		document.getElementById("mainViewWrapper").appendChild(machine.generateOverviewButtonMarkup());
    if(!productionLineOne.isLastMachine(machine.id)) document.getElementById("mainViewWrapper").appendChild(machine.generateLineMarkerMarkup());
	});
}
init();