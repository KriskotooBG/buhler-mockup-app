




export class HeaderUI{
	private readonly tickSelf:boolean;
	private hasMarkup:boolean = false;

	constructor(tickSelf:boolean = true){
		this.tickSelf = tickSelf;
	}




	public generateMarkup():HTMLDivElement{
		const root = document.createElement("div");
		root.setAttribute("id", "sysUIWrapper");
		


		const clockWrapperElem = document.createElement("div");
		clockWrapperElem.setAttribute("id", "sysUiClockDisplayWrapper");
		clockWrapperElem.classList.add("sysUiElements");

		const clockIcon = document.createElement("span");
		clockIcon.classList.add("material-icons");
		clockIcon.innerText = "schedule";

		const clockDisplayElem = document.createElement("span");
		clockDisplayElem.setAttribute("id", "sysUiClockDisplay");
		clockDisplayElem.innerText = (new Date()).toLocaleString();

		clockWrapperElem.appendChild(clockIcon);
		clockWrapperElem.appendChild(clockDisplayElem);




		const accountDisplayWrapper = document.createElement("div");
		accountDisplayWrapper.setAttribute("id", "sysUiAccountDisplayWrapper");
		accountDisplayWrapper.classList.add("sysUiElements");

		const userICon = document.createElement("span");
		userICon.classList.add("material-icons");
		userICon.innerText = "account_circle";

		const usernameDisplayElem = document.createElement("span");
		usernameDisplayElem.setAttribute("id", "sysUiAccountNameDisplay");
		usernameDisplayElem.innerText = "Administrator";

		accountDisplayWrapper.appendChild(userICon);
		accountDisplayWrapper.appendChild(usernameDisplayElem);


		root.appendChild(clockWrapperElem);
		root.appendChild(accountDisplayWrapper);


		this.hasMarkup = true;
		if(this.tickSelf){
			setInterval(this.tick, 500)
		}
		return root;
	}


	public tick(){
		document.getElementById("sysUiClockDisplay").innerText = (new Date()).toLocaleString();
	}
}