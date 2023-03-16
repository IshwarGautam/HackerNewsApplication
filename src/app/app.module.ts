import { NgModule } from '@angular/core';
import { AvatarModule } from 'ngx-avatars';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { StoryItemComponent } from './story-item/story-item.component';
import { TopStoriesComponent } from './top-stories/top-stories.component';
import { DataProfileComponent } from './data-profile/data-profile.component';
import { StoryCommentComponent } from './story-comment/story-comment.component';
import { StoryCommentsComponent } from './story-comments/story-comments.component';

@NgModule({
  declarations: [
    AppComponent,
    TopStoriesComponent,
    StoryItemComponent,
    StoryCommentsComponent,
    StoryCommentComponent,
    DataProfileComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    AvatarModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
