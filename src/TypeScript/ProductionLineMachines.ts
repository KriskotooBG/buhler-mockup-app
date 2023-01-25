import { Machine } from "../UIElements/Machine";




export class ProductionLineMachines{
  private machines:Map<string, Machine> = new Map();



  /**
   * Production Line class constructor, used to instantiate a new Production Line object.
   * This class acts both as a UI element generator, and the data about the current production line.
   */
  constructor(){}



  /**
	 * Generates the markup required to display the overview production line graphics.
	 * @returns {HTMLElement} The production line graphics markup.
	 */
  public generateMarkup(){
    const root = document.createElement("div");
    root.setAttribute("id", "mainViewWrapper");

    return root;
  }





  /**
   * Adds a new machine to the production line
   * @param {Machine} machine The machine object to be added to the production line
   * @throws {TypeError} Throws TypeError when the machine object does not contain a valid id
   * @throws {Error} Throws Error when a machine with that id is already in the production line
   */
  public addMachine(machine: Machine):void{
    if(!machine.id) throw new TypeError('machine.id is invalid!');
    if(this.machines.has(machine.id)) throw new Error('A machine with this ID is already in this production line!');

    this.machines.set(machine.id, machine);
  }



  /**
   * Removes a machine by its id from the production line
   * @param {string} id The id of the machine to be removed.
   * @throws {TypeError} Throws TypeError when the machine id is not valid
   * @throws {Error} Throws Error when a machine with that id is not in the production line
   */
  public removeMachineById(id: string):void{
    if(!id || typeof id !== 'string') throw new TypeError('machine id must be a string!');
    if(!this.machines.has(id)) throw new Error('A machine with this ID is not in this production line!');

    this.machines.delete(id);
  }



  /**
   * Checks if the given machine ID is last in the productionLine
   * @param {string} id The id of the machine to be checked.
   * @returns {boolean} True if the machine is last, false otherwise
   * @throws {TypeError} Throws TypeError when the machine id is not valid
   * @throws {Error} Throws Error when a machine with that id is not in the production line
   */
  public isLastMachine(id:string):boolean{
    if(!id || typeof id !== 'string') throw new TypeError('machine id must be a string!');
    if(!this.machines.has(id)) throw new Error('A machine with this ID is not in this production line!');
    let index = -1;

    Array.from(this.machines.values()).forEach((machine, i) => {
      if(machine.id == id) index = i;
    });

    if(index >= (this.machines.size - 1)) return true;
    else return false;
  }



  /**
   * Returns all of the machines in the production line as an array.
   * @returns {Array<Machine>} The array of Machine objects in the production line
   */
  public getAllMachines():Array<Machine>{
    return Array.from(this.machines.values());
  }



  /**
   * Returns the machine for the given ID
   * @param {string} id The id of the machine to be returned.
   * @returns {Machine} The machine object associated with `id`
   * @throws {TypeError} Throws TypeError when the machine id is not valid
   * @throws {Error} Throws Error when a machine with that id is not in the production line
   */
  public getMachineById(id: string):Machine{
    if(!id || typeof id !== 'string') throw new TypeError('machine id must be a string!');
    if(!this.machines.has(id)) throw new Error('A machine with this ID is not in this production line!');

    return this.machines.get(id);
  }



  /**
   * Returns all machines for given status
   * @param {string} status The status of the machines to be returned.
   * @returns {Array<Machine>} The machines currently in the given state
   */
  public getAllByStatus(status: string):Array<Machine>{
    return (Array.from(this.machines.values())).filter((machine) => { machine.status == status; });
  }
}
