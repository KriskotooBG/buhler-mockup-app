class Machine {
  public readonly id: string; /*For the sake of simplicity in this demo, we use a string IDs*/
  public readonly type: string; /*For the sake of simplicity in this demo, we use string types*/
  public readonly displayName: string;
  private _status: string =
    'init'; /*For the sake of simplicity in this demo, we use the status directly as a class name for the styling*/

  /**
   * Machine class constructor, used to instantiate a new Machine object.
   * @param {string} id The id of the machine
   * @param {string} type The type of the machine
   * @param {string} displayName The display name of the machine
   */
  constructor(id: string, type: string, displayName: string) {
    this.id = id;
    this.type = type;
    this.displayName = displayName;
  }

  public generateOverviewMarkup(): HTMLDivElement {
    const markup = document.createElement('div');
    markup.innerText = this.displayName;
    markup.classList.add('machine', this._status);

    return markup;
  }

  public generateNavigationMarkup(): HTMLDivElement {
    const markup = document.createElement('div');
    markup.innerText = this.displayName;
    markup.classList.add('machine', this._status);

    return markup;
  }

  public get status(): string {
    return this, this._status;
  }
  public set status(newStatus: string) {
    this._status = newStatus;
  }
}
