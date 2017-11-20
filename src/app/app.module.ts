import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './appRouting.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/pageNotFound.component';
import { HomeComponent } from './components/home.component';
import { YoutubePlayerComponent } from './components/youtubePlayer.component';

import { YoutubeService } from './services/youtube.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    YoutubePlayerComponent
  ],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
