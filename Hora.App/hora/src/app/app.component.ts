import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent implements OnInit {
  title = 'Horizon';
  time: string = '';
  date: string = '';
  history: any[] = [];
  isTracking: boolean = false;
  lastSync: string = '';

  constructor(
    private appService: AppService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.useLocalTime();

    // 1. Tick the clock locally for UI
    this.tick();
    setInterval(() => this.tick(), 1000);

    // 2. Initial Data Load
    this.refreshData();
    // 3. Periodic Background Sync
    setInterval(() => this.refreshData(), 30000);
  }

  refreshData() {
    this.loadHistory();
    this.appService.getServerTime().subscribe(
      () => {
        this.lastSync = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        this.cdr.detectChanges();
      }
    );
  }

  tick() {
    this.updateClock(new Date());
  }

  loadHistory() {
    this.appService.getHistory().subscribe(
      data => {
        this.history = data.sort((a, b) => new Date(b.start).getTime() - new Date(a.start).getTime());
        this.cdr.detectChanges();
      }
    );
  }

  toggleTracking() {
    this.isTracking = !this.isTracking;
    if (this.isTracking) {
      this.appService.saveTime({ Start: new Date().toISOString() }).subscribe(() => {
        this.loadHistory();
      });
    }
  }

  private useLocalTime() {
    this.updateClock(new Date());
  }

  private updateClock(d: Date) {
    const pad = (n: number) => n.toString().padStart(2, '0');
    this.time = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
    this.date = d.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    this.cdr.detectChanges();
  }
}
