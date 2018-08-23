import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatListModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import 'hammerjs';

import { AppComponent } from './app.component';
import { KeepComponent } from './keep/keep.component';
import { KeepDetailComponent } from './keep-detail/keep-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule }    from '@angular/common/http';
import { KeepAddFormComponent } from './keep-add-form/keep-add-form.component';
import { KeepSearchComponent } from './keep-search/keep-search.component';

const routes: Routes = [
  {path: 'keeps', component: KeepComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'details/:id', component: KeepDetailComponent},
  {path: 'keep/add', component: KeepAddFormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    KeepComponent,
    KeepDetailComponent,
    MessagesComponent,
    DashboardComponent,
    KeepAddFormComponent,
    KeepSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatListModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
