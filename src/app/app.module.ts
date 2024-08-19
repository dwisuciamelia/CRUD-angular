import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { UserComponent } from './views/user/user.component';
import { TokenInterceptor } from './jwt.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AddUserComponent } from './views/user/add-user/add-user.component';
import {
  MatDialogModule,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { StepOneComponent } from './views/form/form-step/step-one/step-one.component';
import { StepTwoComponent } from './views/form/form-step/step-two/step-two.component';
import { FormComponent } from './views/form/form.component';
import { ProgressionButtonComponent } from './views/progression-button/progression-button.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatList, MatListItem, MatNavList } from '@angular/material/list';
import { EditUserComponent } from './views/user/edit-user/edit-user.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DetailUserComponent } from './views/user/detail-user/detail-user.component';
import {
  AlertComponent,
  ButtonCloseDirective,
  ButtonDirective,
  TemplateIdDirective,
} from '@coreui/angular';
import { LoginComponent } from './views/login/login.component';
import { LoginService } from './services/login/login.service';
import { AuthGuard } from './guards/auth.guard';
import { LoginLayoutComponent } from './components/login-layout/login-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent,
    StepOneComponent,
    StepTwoComponent,
    FormComponent,
    ProgressionButtonComponent,
    NavbarComponent,
    EditUserComponent,
    DetailUserComponent,
    LoginComponent,
    LoginLayoutComponent,
  ],
  imports: [
    MatDialogModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatNavList,
    MatListItem,
    MatList,
    MatPaginatorModule,
    AlertComponent,
    ButtonCloseDirective,
    ButtonDirective,
    TemplateIdDirective,
  ],
  providers: [
    LoginService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
