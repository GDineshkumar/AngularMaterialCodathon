"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var personal_info_history_component_1 = require("./personal-info-history/personal-info-history.component");
var personal_info_address_component_1 = require("./personal-info-address/personal-info-address.component");
var personal_info_name_component_1 = require("./personal-info-name/personal-info-name.component");
var router_1 = require("@angular/router");
var personal_info_component_1 = require("./personal-info.component");
var material_1 = require("@angular/material");
var personInfo_1 = require("./personal-info");
var auto_1 = require("../auto");
var autoDataService_1 = require("../autoDataService");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var PersonalInfoModule = (function () {
    function PersonalInfoModule() {
    }
    PersonalInfoModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                material_1.MaterialModule,
                http_1.HttpModule,
                forms_1.FormsModule
            ],
            declarations: [
                personal_info_component_1.PersonalInfoComponent,
                personal_info_name_component_1.PersonalInfoNameComponent,
                personal_info_address_component_1.PersonalInfoAddressComponent,
                personal_info_history_component_1.PersonalInfoHistoryComponent
            ],
            providers: [auto_1.Auto, autoDataService_1.AutoDataService, personInfo_1.Personalinfo]
        })
    ], PersonalInfoModule);
    return PersonalInfoModule;
}());
exports.PersonalInfoModule = PersonalInfoModule;
