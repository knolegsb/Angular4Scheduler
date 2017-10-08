import './rxjs-operators';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PaginationModule } from 'ngx-bootstrap';
import { DatepickerModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { ProgressbarModule } from 'ngx-bootstrap';
import { SlimLoadingBarService, SlimLoadingBarComponent } from 'ng2-slim-loading-bar';
import { TimepickerModule } from 'ngx-bootstrap';

import { AppComponent }   from './app.component';
import { routing } from './app.route';
import { HomeComponent } from './home/home.component';
import { ScheduleListComponent } from './schedules/schedule-list.component';
import { ScheduleEditComponent } from './schedules/schedule-edit.component';
import { UserListComponent } from "./users/user-list.component";
import { UserCardComponent } from "./users/user-card.component";
import { DateFormatPipe } from './shared/pipes/date-format.pipe';
import { HighlightDirective } from './shared/directives/highlight.directive';
import { MobileHideDirective } from './shared/directives/mobile-hide.directive';

import { DataService } from './shared/services/data.service';
import { ConfigService } from './shared/utils/config.service';
import { ItemsService } from './shared/utils/items.service';
import { MappingService } from './shared/utils/mapping.service';
import { NotificationService } from './shared/utils/notification.service';
import { UrlSerializer } from '@angular/router';
import { LowerCaseUrlSerializer } from './shared/utils/lower-case-url-serializer';


@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        routing,
        DatepickerModule.forRoot(),
        ModalModule.forRoot(),
        ProgressbarModule.forRoot(),
        PaginationModule.forRoot(),
        TimepickerModule.forRoot()
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        ScheduleListComponent,
        ScheduleEditComponent,
        UserListComponent,
        UserCardComponent,
        HighlightDirective,
        MobileHideDirective,
        DateFormatPipe,
        SlimLoadingBarComponent
    ],
    providers: [
        ConfigService,
        DataService,
        ItemsService,
        MappingService,
        NotificationService,
        SlimLoadingBarService,
        {
            provide: UrlSerializer,
            useClass: LowerCaseUrlSerializer
        }
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }