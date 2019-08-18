import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'hora';
  time: any;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getTime();
  }

  getTime() {
    this.appService.getTime().subscribe(
      data => { this.time = data },
      err => console.error(err),
      () => console.log('Done loading time.')
    )
  }
}
