import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CookieBannerComponent } from './cookie-banner/cookie-banner.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.openDialog();
  }

  openDialog() {
    const dialogRef = this.dialog.open(CookieBannerComponent, {
      width: 'auto',
      height: 'auto',
      disableClose: true
    });
  }

}
