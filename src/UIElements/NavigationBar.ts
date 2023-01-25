import '../../style/css/navigation_bar.css';




export class NavigationBar{

	/**
	 * NavigationBar class. Creates the markup for the navigation bar of the application.
	 */
	constructor(){}


	
	/**
	 * Generates the markup required to display the Navigation bar element.
	 * @returns {HTMLElement} The navigation bar element markup.
	 */
	public generateMarkup():HTMLElement{
		const navBar = document.createElement("nav");
		navBar.setAttribute("id", "underheaderNavRow");
	

		return navBar;
	}
}