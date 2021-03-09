import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PhoneBookComponent } from './phone-book/phone-book.component';
import { UserModalComponent } from './user-modal/user-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PhoneBookComponent,
    UserModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
