import {Injectable} from '@angular/core';
import {NavAutoView} from "../../shared/nav-auto-view";
import {Router} from "@angular/router";

@Injectable()
export class AutoSalesNavService {

  private currentViewIndex: number;
  private viewList: NavAutoView[];
  private view: string = "/sales";
  private subView: string = "/auto";

  constructor(private router: Router) {

    // On Initialization, Create This Object To Be Available Globally
    this.viewList = [

      new NavAutoView(0, this.view + this.subView + '/target-premium', false),
      new NavAutoView(1, this.view + this.subView + '/personal-info' + '/name', false),
      new NavAutoView(2, this.view + this.subView + '/personal-info' + '/address', false),
      new NavAutoView(3, this.view + this.subView + '/personal-info' + '/history', false),
      new NavAutoView(4, this.view + this.subView + '/vehicles', false),
      new NavAutoView(5, this.view + this.subView + '/quote-summary', false)

    ];

    // Set Current View Index To 0
    this.currentViewIndex = 0;

  }


  /**
   *
   * Log Message to Console
   *
   * @param message
   */

  logToConsole(message: string) {
    console.log(message);
  }

  /**
   *
   * Start New Quote
   *
   * Initiates all of the necessary variable to begin a new quote
   *
   */

  createNewQuote() {

    console.log("Creating New Flow");
    this.currentViewIndex = 0;

  }

  /**
   *
   * Go To View
   *
   */

  goToView(viewIndex: number) {
    this.router.navigate([this.viewList[viewIndex].routerLink]);
  }

  /**
   *
   * Get Next View
   *
   */

  goToNextView() {

    //TODO ensure the navigation is completed by returning boolean
    this.router.navigate([this.viewList[(this.currentViewIndex += 1)].routerLink]);
  }

  /**
   *
   * Get Previous View
   *
   */

  goToPreviousView() {
    this.router.navigate([this.viewList[(this.currentViewIndex -= 1)].routerLink]);
  }

}
