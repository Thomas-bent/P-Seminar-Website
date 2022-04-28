import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BackstageComponent } from './backstage/backstage.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'backstage', component: BackstageComponent},
  { path: 'videos', component: VideosComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
