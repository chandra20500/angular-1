import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { RecordsService } from './records.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule } from '@angular/router'
import { AuthGuard } from './auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdbModule } from 'mdb-angular-ui-kit';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    LoginComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard]
      },      
      {
        path: '',
        component: HelloComponent
      }
    ]),
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    MdbModule,
  ],
  providers: [RecordsService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }