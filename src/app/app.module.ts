import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Bootstrap import
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoComponent } from './todo/todo.component';
import { ParentDivComponent } from './parent-div/parent-div.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserInputComponent } from './user-input/user-input.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastModule } from 'primeng/toast';
import { StyleClassModule } from 'primeng/styleclass';
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    ParentDivComponent,
    UserInputComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    ButtonModule,
    CardModule,
    ToggleButtonModule,
    FontAwesomeModule,
    ToastModule,
    StyleClassModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
