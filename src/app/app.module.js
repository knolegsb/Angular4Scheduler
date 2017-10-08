"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./rxjs-operators");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var animations_1 = require("@angular/platform-browser/animations");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var ngx_bootstrap_2 = require("ngx-bootstrap");
var ngx_bootstrap_3 = require("ngx-bootstrap");
var ngx_bootstrap_4 = require("ngx-bootstrap");
var ng2_slim_loading_bar_1 = require("ng2-slim-loading-bar");
var ngx_bootstrap_5 = require("ngx-bootstrap");
var app_component_1 = require("./app.component");
var app_route_1 = require("./app.route");
var home_component_1 = require("./home/home.component");
var schedule_list_component_1 = require("./schedules/schedule-list.component");
var schedule_edit_component_1 = require("./schedules/schedule-edit.component");
var user_list_component_1 = require("./users/user-list.component");
var user_card_component_1 = require("./users/user-card.component");
var date_format_pipe_1 = require("./shared/pipes/date-format.pipe");
var highlight_directive_1 = require("./shared/directives/highlight.directive");
var mobile_hide_directive_1 = require("./shared/directives/mobile-hide.directive");
var data_service_1 = require("./shared/services/data.service");
var config_service_1 = require("./shared/utils/config.service");
var items_service_1 = require("./shared/utils/items.service");
var mapping_service_1 = require("./shared/utils/mapping.service");
var notification_service_1 = require("./shared/utils/notification.service");
var router_1 = require("@angular/router");
var lower_case_url_serializer_1 = require("./shared/utils/lower-case-url-serializer");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            animations_1.BrowserAnimationsModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_route_1.routing,
            ngx_bootstrap_2.DatepickerModule.forRoot(),
            ngx_bootstrap_3.ModalModule.forRoot(),
            ngx_bootstrap_4.ProgressbarModule.forRoot(),
            ngx_bootstrap_1.PaginationModule.forRoot(),
            ngx_bootstrap_5.TimepickerModule.forRoot()
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            schedule_list_component_1.ScheduleListComponent,
            schedule_edit_component_1.ScheduleEditComponent,
            user_list_component_1.UserListComponent,
            user_card_component_1.UserCardComponent,
            highlight_directive_1.HighlightDirective,
            mobile_hide_directive_1.MobileHideDirective,
            date_format_pipe_1.DateFormatPipe,
            ng2_slim_loading_bar_1.SlimLoadingBarComponent
        ],
        providers: [
            config_service_1.ConfigService,
            data_service_1.DataService,
            items_service_1.ItemsService,
            mapping_service_1.MappingService,
            notification_service_1.NotificationService,
            ng2_slim_loading_bar_1.SlimLoadingBarService,
            {
                provide: router_1.UrlSerializer,
                useClass: lower_case_url_serializer_1.LowerCaseUrlSerializer
            }
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map