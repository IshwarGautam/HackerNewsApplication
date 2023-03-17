import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-profile',
  templateUrl: './data-profile.component.html',
  styleUrls: ['./data-profile.component.css'],
})
export class DataProfileComponent {
  @Input() timestamp: number = 0;
  @Input() score = 0;
  @Input() by = '';
  @Input() type = '';

  openUrl(url: string) {
    if (url) {
      window.open(url, '_blank');
    }
  }
}
