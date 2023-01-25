import { Machine } from "./Machine";




export class ProductionLineMachines{
  private _machinesGroup:Map<string, Machine> = new Map();

  constructor(){}




  public addMachine(machine: Machine):void{
    if(!machine.id) throw new TypeError('machine.id is invalid!');
    if(this._machinesGroup.has(machine.id)) throw new Error('A machine with this ID is already in this production line!');

    this._machinesGroup.set(machine.id, machine);
  }



  public removeMachineById(id: string):void{
    if(!id || typeof id !== 'string') throw new TypeError('machine id must be a string!');
    if(!this._machinesGroup.has(id)) throw new Error('A machine with this ID is not in this production line!');

    this._machinesGroup.delete(id);
  }



  public isLastMachine(id:string):boolean{
    if(!id || typeof id !== 'string') throw new TypeError('machine id must be a string!');
    if(!this._machinesGroup.has(id)) throw new Error('A machine with this ID is not in this production line!');
    let index = -1;

    Array.from(this._machinesGroup.values()).forEach((machine, i) => {
      if(machine.id == id) index = i;
    });

    if(index >= (this._machinesGroup.size - 1)) return true;
    else return false;
  }



  public getAllMachines():Array<Machine>{
    return Array.from(this._machinesGroup.values());
  }



  public getMachineById(id: string):Machine | undefined{
    if(!id || typeof id !== 'string') throw new TypeError('machine id must be a string!');
    if(!this._machinesGroup.has(id)) throw new Error('A machine with this ID is not in this production line!');

    return this._machinesGroup.get(id);
  }



  public getAllByStatus(status: string):Array<Machine>{
    return (Array.from(this._machinesGroup.values())).filter((machine) => { machine.status == status; });
  }
}
