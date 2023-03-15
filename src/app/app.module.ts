import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { StoryItemComponent } from './story-item/story-item.component';
import { TopStoriesComponent } from './top-stories/top-stories.component';

@NgModule({
  declarations: [AppComponent, TopStoriesComponent, StoryItemComponent],
  imports: [BrowserModule, HttpClientModule, NgxPaginationModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
