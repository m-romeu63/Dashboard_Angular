import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { DashboardViewComponent } from './views/dashboard-view/dashboard-view.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { TableCardComponent } from './components/table-card/table-card.component';
import { LineChartCardComponent } from './components/line-chart-card/line-chart-card.component';
import { BarChartCardComponent } from './components/bar-chart-card/bar-chart-card.component';
import { NgChartsModule } from 'ng2-charts';
import { AuthService } from './services/auth/auth.service';
import { StatService } from './services/stat/stat.service';
import { AuthGuard } from './guards/auth/auth.guard';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { TableDataComponent } from './components/table-data/table-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorsFormComponent } from './components/errors-form/errors-form.component';
import { ErrorViewComponent } from './views/error-view/error-view.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthViewComponent,
    DashboardViewComponent,
    HeaderComponent,
    SideBarComponent,
    SmallCardComponent,
    TableCardComponent,
    LineChartCardComponent,
    BarChartCardComponent,
    DatePickerComponent,
    TableDataComponent,
    ErrorsFormComponent,
    ErrorViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgChartsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, StatService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
