"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var PersonalInfoComponent = (function () {
    function PersonalInfoComponent(personalinfo, auto, autosalesdataService) {
        // clicked() {
        //   console.log(this.auto.personalinfo);
        //   console.log(this.personalinfo);
        //   this.auto.personalinfo = this.personalinfo;
        //   this.autosalesdataService.sendData(this.auto.personalinfo)
        //     .subscribe();
        // }
        /**
         *
         * List of Tabs includes the Label and RouterLink information for Personal Info
         *
         * @type {[{label: string; link: [string]},{label: string; link: [string]}]}
         */
        this.personalInfoTabData = [
            { label: "Name", link: ['name'] },
            { label: "Address", link: ['address'] },
            { label: "History", link: ['history'] }
        ];
        this.personalinfo = personalinfo;
        this.auto = auto;
        this.autosalesdataService = autosalesdataService;
    }
    PersonalInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.autosalesdataService.getUserInfo().subscribe(function (data) {
            console.log('data from :serice' + data.json().firstName);
            _this.personalinfo.firstName = data.json().firstName;
        });
    };
    PersonalInfoComponent = __decorate([
        core_1.Component({
            selector: 'sales-auto-personal-info',
            templateUrl: 'personal-info.component.html',
            styleUrls: ['personal-info.component.css']
        })
    ], PersonalInfoComponent);
    return PersonalInfoComponent;
}());
exports.PersonalInfoComponent = PersonalInfoComponent;
