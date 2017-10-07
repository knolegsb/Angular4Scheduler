import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ScheduleListComponent } from './schedules/schedule-list.component';
import { ScheduleEditComponent } from './schedules/schedule-edit.component';
import { UserListComponent } from "./users/user-list.component";

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'users', component: UserListComponent},
    {path: 'schedules', component: ScheduleListComponent},
    {path: 'schedules/:id/edit', component: ScheduleEditComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);