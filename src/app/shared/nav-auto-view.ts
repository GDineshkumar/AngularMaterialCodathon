export class NavAutoView {

  order:number;
  moduleIndex: number;
  subModuleIndex: number;
  routerLink: string[];
  isVisited: boolean;

  constructor(order:number, moduleIndex: number, subModuleIndex: number, routerLink:string[], isVisited: boolean) {
    this.order = order;
    this.moduleIndex = moduleIndex;
    this.subModuleIndex = subModuleIndex;
    this.routerLink = routerLink;
    this.isVisited = isVisited;
  }

}
