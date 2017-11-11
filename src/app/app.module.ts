import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContactService} from './contact-service.service';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

  const routes: Routes = [
  { path: '', component: ContactListComponent },
   { path: 'contact/:id', component: ContactComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
