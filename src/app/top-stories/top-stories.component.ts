import { NgxSpinnerService } from 'ngx-spinner';
import { Component, Input } from '@angular/core';
import { TopStoriesService } from './top-stories.service';

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.css'],
})
export class TopStoriesComponent {
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  topStoryIds: number[] = [];
  tableSizes: number[] = [5, 10, 15, 20, 35, 50];

  @Input() term: string = '';
  @Input() searchTerm: string = '';

  constructor(
    private topStoryService: TopStoriesService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.getStoriesIds();
  }

  getStoriesIds() {
    this.spinner.show();

    this.topStoryService.getTopStories().subscribe((idsArray) => {
      this.topStoryIds = idsArray as number[];

      this.spinner.hide();
    });
  }

  setStoryIndex(index: number, tableSize: number, page: number) {
    return ((index + 1) % (tableSize + 1)) + tableSize * (page - 1);
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getStoriesIds();
  }

  onTableSizeChange(event: any) {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getStoriesIds();
  }
}
