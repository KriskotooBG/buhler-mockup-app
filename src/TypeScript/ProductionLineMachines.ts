class ProductionLineMachines {
  private _machineGroup: { [key: string]: Machine } = {};

  constructor() {}

  public addMachine(machine: Machine): void {
    if (!machine.id) throw new TypeError('machine.id is invalid!');
    if (this._machineGroup[machine.id] !== undefined)
      throw new Error(
        'A machine with this ID is already in this production line!'
      );

    this._machineGroup[machine.id] = machine;
  }
  public removeMachineById(id: string) {
    if (!id || typeof id !== 'string')
      throw new TypeError('machine id must be a string!');
    if (this._machineGroup[id] === undefined)
      throw new Error('A machine with this ID is not in this production line!');

    delete this._machineGroup[id];
  }

  public getMachineById(id: string): Machine | undefined {
    if (!id || typeof id !== 'string')
      throw new TypeError('machine id must be a string!');
    if (this._machineGroup[id] === undefined)
      throw new Error('A machine with this ID is not in this production line!');

    return this._machineGroup[id];
  }
  public getAllByStatus(status: string): Array<Machine> {
    return Object.values(this._machineGroup).filter((machine) => {
      machine.status == status;
    });
  }
}
