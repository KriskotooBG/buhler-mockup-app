import '../../style/css/machine.css';




export class Machine{
  public readonly id:string;       /*For the sake of simplicity in this demo, we use a string ID*/
  public readonly type:string;     /*For the sake of simplicity in this demo, we use string types*/
  public readonly displayName:string;
  private _status:string = "init"; /*For the sake of simplicity in this demo, we use the status directly as a class name for the styling*/

  private _hasGeneratedOverviewMarkup:boolean = false;
  private _hasGeneratedNavigationMarkup:boolean = false;




  /**
   * Machine class constructor, used to instantiate a new Machine object.
   * This class acts both as a UI element generator, and stores some data about the machine.
   * @param {string} id The id of the machine
   * @param {string} type The type of the machine
   * @param {string} displayName The display name of the machine
   */
  constructor(id: string, type: string, displayName: string){
    this.id = id;
    this.type = type;
    this.displayName = displayName;
  }




  /**
	 * Generates the markup required to display the overview button for this machine.
	 * @returns {HTMLElement} The machine overview button markup.
	 */
  public generateOverviewButtonMarkup():HTMLDivElement{
    const root = document.createElement("div");
    root.classList.add("machineOverviewBTN");
    root.setAttribute("data-machineid", this.id);
    root.setAttribute("data-status", this._status);


    const statusIcon = document.createElement("span");
    statusIcon.classList.add("material-icons-outlined", "machineOverviewButtonStatusIcon");
    statusIcon.innerText = Machine.getIconIdForStatus(this._status);


    const displayIcon = document.createElement("span");
    displayIcon.classList.add("material-icons-outlined", "machineOverviewButtonDisplayIcon");
    displayIcon.innerText = Machine.getDisplayIconIdForMachineType(this.type);


    const nameDisplay = document.createElement("span");
    nameDisplay.classList.add("machineOverviewButtonNameLabel");
    nameDisplay.innerText = this.displayName;



    root.appendChild(statusIcon);
    root.appendChild(displayIcon);
    root.appendChild(nameDisplay);

    this._hasGeneratedOverviewMarkup = true;
    return root;
  }






  /**
	 * Generates the markup required to display the separator line between the overview buttons
	 * @returns {HTMLElement} The separator element markup.
	 */
  public generateLineMarkerMarkup():HTMLDivElement{
    const root = document.createElement("div");
    root.classList.add("markerLine");

    return root;
  }





  /**
	 * Generates the markup required to display the overview button for this machine.
	 * @returns {HTMLElement} The machine navigation button markup.
	 */
  public generateNavigationButtonMarkup():HTMLDivElement{
    const root = document.createElement("div");
    root.classList.add("machineNavigationBTN");
    root.setAttribute("data-machineid", this.id);
    root.setAttribute("data-status", this._status);



    const statusIcon = document.createElement("span");
    statusIcon.classList.add("material-icons-outlined", "machineNavigationButtonStatusIcon");
    statusIcon.innerText = Machine.getIconIdForStatus(this._status);


    const nameDisplay = document.createElement("span");
    nameDisplay.classList.add("machineNavigationButtonNameLabel");
    nameDisplay.innerText = this.displayName;



    root.appendChild(nameDisplay);
    root.appendChild(statusIcon);

    this._hasGeneratedNavigationMarkup = true;
    return root;
  }








  public get status():string{
    return this._status;
  }
  public set status(newStatus:string){
    if(this._hasGeneratedOverviewMarkup){
      document.querySelector(`div.machineOverviewBTN[data-machineid="${this.id}"]`).setAttribute("data-status", newStatus);
      document.querySelector<HTMLSpanElement>(`div.machineOverviewBTN[data-machineid="${this.id}"] > .material-icons-outlined`).innerText = Machine.getIconIdForStatus(newStatus); 
    }
    if(this._hasGeneratedNavigationMarkup){
      document.querySelector(`div.machineNavigationBTN[data-machineid="${this.id}"]`).setAttribute("data-status", newStatus);
      document.querySelector<HTMLSpanElement>(`div.machineNavigationBTN[data-machineid="${this.id}"] > .material-icons-outlined`).innerText = Machine.getIconIdForStatus(newStatus); 
    }
    

    this._status = newStatus;
  }













  /**
   * Gives the propper icon ID for the given machine `status`
   * @param status The status for which the icon id should be provided
   * @returns The icon ID for the given `status` or 'sync' if the status is unknown
   */
  static getIconIdForStatus(status:string):string{
    switch(status){
      case "running": return "settings_backup_restore";
      case "warning": return "warning";
      case "alarm":   return "error_outline";
      default: case "init": return "sync";
    }
  }


  /**
   * Gives the propper icon ID for the given machine `type`
   * @param type The type for which the icon id should be provided
   * @returns The icon ID for the given `type` or 'sync' if the types is unknown
   */
  static getDisplayIconIdForMachineType(type:string):string{
    switch(type){
      case "scale":     return "system_update_alt";
      case "attacher":  return "chrome_reader_mode";
      case "packer":    return "call_to_action";
      case "closer":    return "grid_on";
      default:          return "sync";
    }
  }
}
