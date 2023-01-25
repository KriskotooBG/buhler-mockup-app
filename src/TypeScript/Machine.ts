




export class Machine {
  public readonly id: string;       /*For the sake of simplicity in this demo, we use a string IDs*/
  public readonly type: string;     /*For the sake of simplicity in this demo, we use string types*/
  public readonly displayName: string;
  private _status: string = "init"; /*For the sake of simplicity in this demo, we use the status directly as a class name for the styling*/

  private _onNavClickUsr:Function;
  private _onMainClickUsr:Function;




  /**
   * Machine class constructor, used to instantiate a new Machine object.
   * @param {string} id The id of the machine
   * @param {string} type The type of the machine
   * @param {string} displayName The display name of the machine
   */
  constructor(id: string, type: string, displayName: string){
    this.id = id;
    this.type = type;
    this.displayName = displayName;
  }

  public generateOverviewMarkup():HTMLDivElement{
    const root = document.createElement("div");
    root.classList.add("machine", "machineMainDisplay", this._status);
    root.setAttribute("data-machineid", this.id);


    const statusIcon = document.createElement("span");
    statusIcon.classList.add("material-icons", "machineMainStatusIcon");
    statusIcon.innerText = Machine.getStatusIconNameFromStatus(this._status);

    const displayIcon = document.createElement("span");
    displayIcon.classList.add("material-icons", "machineDisplayIcon");
    displayIcon.innerText = Machine.getDisplayIconFromMachineType(this.type);

    const nameDisplay = document.createElement("span");
    nameDisplay.classList.add("machineDisplayNameLabel");
    nameDisplay.innerText = this.displayName;


    root.appendChild(statusIcon);
    root.appendChild(displayIcon);
    root.appendChild(nameDisplay)

    root.addEventListener("click", this._onMainClick);

    return root;
  }

  public generateLineMarkerMarkup():HTMLDivElement{
    const root = document.createElement("div");
    root.classList.add("markerLine");

    return root
  }

  public generateNavigationMarkup():HTMLDivElement{
    const root = document.createElement("div");
    root.classList.add("machine", "machineNavDisplay", this._status);
    root.setAttribute("data-machineid", this.id);


    const icon = document.createElement("span");
    icon.classList.add("material-icons", "machineStatusIcon");
    icon.innerText = Machine.getStatusIconNameFromStatus(this._status);

    const nameDisplay = document.createElement("span");
    nameDisplay.classList.add("machineDisplayName");
    nameDisplay.innerText = this.displayName;



    root.appendChild(nameDisplay);
    root.appendChild(icon);
    
    root.addEventListener("click", this._onNavClick);

    return root;
  }

  public get status():string{
    return this, this._status;
  }
  public set status(newStatus:string){



    this._status = newStatus;





  }


  public set onNavClick(handler:Function){
    this._onNavClickUsr = handler;
  }
  public set onMainClick(handler:Function){
    this._onMainClickUsr = handler;
  }





  private _onNavClick(e:Event){
    console.log(this.id)
    if(this._onNavClickUsr !== undefined) this._onNavClickUsr(this.id, e);
  }
  private _onMainClick(e:Event){
    if(this._onMainClickUsr !== undefined) this._onMainClickUsr(this.id, e);
  }




  static getStatusIconNameFromStatus(status:string):string{
    switch(status){
      case "running": return "settings_backup_restore";
      case "warning": return "warning";
      case "alarm":   return "error_outline";
      default: case "init": return "sync";
    }
  }


  static getDisplayIconFromMachineType(type:string):string{
    switch(type){
      case "scale":     return "system_update_alt";
      case "attacher":  return "chrome_reader_mode";
      case "packer":    return "call_to_action";
      case "closer":    return "grid_on";
    }
  }
}
