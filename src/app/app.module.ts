import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule} from 'angularfire2';
// import { AngularFireDatabase } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
import { routes } from './app.routes';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';


// Must export the config
// var firebaseConfig = {
//   apiKey: "api-key",
//   authDomain: "project-id.firebaseapp.com",
//   databaseURL: "https://project-id.firebaseio.com",
//   projectId: "project-id",
//   storageBucket: "project-id.appspot.com",
//   messagingSenderId: "sender-id",
//   appId: "app-id",
//   measurementId: "G-measurement-id",
// };
export const firebaseConfig = {
  apiKey: 'AIzaSyCFqOarhz7PSDema9sCisQ9dTJBdsYrfcw',
  authDomain: 'webfirebase-social-login.firebaseapp.com',
  databaseURL: 'https://webfirebase-social-login.firebaseio.com/',
  storageBucket: 'webfirebase-social-login.appspot.com',
  messagingSenderId: '513461829564'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,
    PathNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    //  AngularFireDatabase,
    routes
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
