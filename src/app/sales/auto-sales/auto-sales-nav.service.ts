import {Injectable} from '@angular/core';
import {NavAutoView} from "../../shared/nav-auto-view";

@Injectable()
export class AutoSalesNavService {

  private currentView: NavAutoView;
  private viewList: NavAutoView[];
  private view: string = "sales";
  private subView: string = "auto";

  constructor() {

    // On Initialization, Create This Object TO Be Available Globally
    this.viewList = [

      new NavAutoView(0, 0, 0, [this.view, this.subView, 'target-premium'], false),
      new NavAutoView(1, 1, 0, [this.view, this.subView, 'personal-info'], false),
      new NavAutoView(2, 1, 1, [this.view, this.subView, 'personal-info', 'name'], false),
      new NavAutoView(3, 1, 2, [this.view, this.subView, 'personal-info', 'address'], false),
      new NavAutoView(4, 1, 3, [this.view, this.subView, 'personal-info', 'history'], false),
      new NavAutoView(5, 2, 0, [this.view, this.subView, 'vehicles'], false),
      new NavAutoView(6, 3, 0, [this.view, this.subView, 'quote-summary'], false)

    ];

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
    this.setCurrentView(this.viewList[0]);

  }

  /**
   *
   * Get Next View
   *
   */

  getNextView(){
    console.log("Getting Next View from "+this.getCurrentView().order);
    console.log("Returning "+(this.getCurrentView().order+1));
    return this.viewList[(this.getCurrentView().order+1)];
  }

  /**
   *
   * Get Previous View
   *
   */

  getPreviousView(){
    console.log("Getting Previous View from "+this.getCurrentView().order);
    console.log("Returning "+(this.getCurrentView().order-1));
    return this.viewList[(this.getCurrentView().order-1)];
  }

  /**
   *
   * Set Current View
   *
   */

  setCurrentView(view: NavAutoView) {
    console.log("Setting Current View: ModuleIndex:" + view.moduleIndex + " SubModuleIndex: " + view.subModuleIndex);
    this.currentView = view;
  }


  /**
   *
   * Get Current View
   *
   */

  getCurrentView() {
    console.log("Getting Last View: OrderIndex:" + this.currentView);
    return this.currentView;
  }


}
