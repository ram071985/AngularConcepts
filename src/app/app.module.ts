import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChatAppComponent } from './chat-app.component';
import { AuthComponent } from './views/auth/auth.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [ChatAppComponent, AuthComponent],
  imports: [BrowserModule, NgbModule, FormsModule],
  bootstrap: [ChatAppComponent],
})
export class AppModule {}
