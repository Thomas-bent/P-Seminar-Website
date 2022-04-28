import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { VideosComponent } from './videos/videos.component';
import { BackstageComponent } from './backstage/backstage.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { TeamMateComponent } from './team-mate/team-mate.component';
import { TopicContainerComponent } from './topic-container/topic-container.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ErrorPageComponent,
    VideosComponent,
    BackstageComponent,
    AboutComponent,
    HeaderComponent,
    TeamMateComponent,
    TopicContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
