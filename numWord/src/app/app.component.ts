import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  checkCount(cnt): string {
    if (cnt === '' || isNaN(Number(cnt))) {
      return;
    }
    return 'У вас';
  }
}
