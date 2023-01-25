import '../../style/css/header.css';




export class Header{
	private readonly tickSelf:boolean;


	/**
	 * HeaderUI class. Creates the markup of the header of the application.
	 * @param {boolean} tickSelf Determines if the `tick` method of this class should be called internally or externally.
	 */
	constructor(tickSelf:boolean = true){
		this.tickSelf = tickSelf;
	}





	public generateMarkup():HTMLElement{
		const headerElem = document.createElement("header");
		headerElem.setAttribute("id", "mainHeader");


		const logoImage = document.createElement("img");
		logoImage.setAttribute("id", "headerLogoImage");
		logoImage.setAttribute("alt", "Buhler logo");
		logoImage.src = "../style/icons/Logo_Bühler_AG.png";




		const clockAndUserWrapper = document.createElement("div");
		clockAndUserWrapper.setAttribute("id", "headerClockAndUserWrapper");
		

		const clockWrapperElem = document.createElement("div");
		clockWrapperElem.setAttribute("id", "headeClockWrapper");
		clockWrapperElem.classList.add("headerClockUserElements");


		const clockIcon = document.createElement("span");
		clockIcon.classList.add("material-icons-outlined");
		clockIcon.innerText = "schedule";


		const clockDisplayElem = document.createElement("span");
		clockDisplayElem.setAttribute("id", "headerClockDisplay");
		clockDisplayElem.innerText = (new Date()).toLocaleString();

		
		clockWrapperElem.appendChild(clockIcon);
		clockWrapperElem.appendChild(clockDisplayElem);




		const accountDisplayWrapper = document.createElement("div");
		accountDisplayWrapper.setAttribute("id", "headerUserWrapper");
		accountDisplayWrapper.classList.add("headerClockUserElements");


		const userIcon = document.createElement("span");
		userIcon.classList.add("material-icons-outlined");
		userIcon.innerText = "account_circle";


		const usernameDisplayElem = document.createElement("span");
		usernameDisplayElem.setAttribute("id", "headerUsernameDisplay");
		usernameDisplayElem.innerText = "Administrator";


		accountDisplayWrapper.appendChild(userIcon);
		accountDisplayWrapper.appendChild(usernameDisplayElem);


		clockAndUserWrapper.appendChild(clockWrapperElem);
		clockAndUserWrapper.appendChild(accountDisplayWrapper);




		headerElem.appendChild(logoImage);
		headerElem.appendChild(clockAndUserWrapper);






		if(this.tickSelf) setInterval(this.tick, 500);
		return headerElem;
	}



	/**
	 * This function takes care of updating the UI.
	 * Here, it is used to update the clock on the header.
	 */
	public tick():void{
		document.getElementById("headerClockDisplay").innerText = (new Date()).toLocaleString();
	}
}