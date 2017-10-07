"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var schedule_list_component_1 = require("./schedules/schedule-list.component");
var schedule_edit_component_1 = require("./schedules/schedule-edit.component");
var user_list_component_1 = require("./users/user-list.component");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'users', component: user_list_component_1.UserListComponent },
    { path: 'schedules', component: schedule_list_component_1.ScheduleListComponent },
    { path: 'schedules/:id/edit', component: schedule_edit_component_1.ScheduleEditComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.route.js.map