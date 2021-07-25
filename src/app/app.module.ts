import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChatAppComponent } from './chat-app.component';
import { AuthComponent } from './auth/auth.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  declarations: [ChatAppComponent, AuthComponent, ServersComponent],
  imports: [BrowserModule, NgbModule, FormsModule, HttpClientModule],
  providers:[],
  bootstrap: [ChatAppComponent],
})
export class AppModule {}
