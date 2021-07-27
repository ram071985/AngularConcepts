import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChatAppComponent } from './chat-app.component';
import { AuthComponent } from './auth/auth.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { ServerComponent } from './server/server.component';

@NgModule({
  declarations: [ChatAppComponent, AuthComponent, ServersComponent, WarningAlertComponent, SuccessAlertComponent, ServerComponent],
  imports: [BrowserModule, NgbModule, FormsModule, HttpClientModule],
  providers:[],
  bootstrap: [ChatAppComponent],
})
export class AppModule {}
