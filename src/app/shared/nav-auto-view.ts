export class NavAutoView {

  order: number;
  routerLink: string;
  isVisited: boolean;

  constructor(order: number, routerLink: string, isVisited: boolean) {
    this.order = order;
    this.routerLink = routerLink;
    this.isVisited = isVisited;
  }

}
