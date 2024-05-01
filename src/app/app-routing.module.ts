import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './component/home-page/home-page.component';
import { ResumeComponent } from './component/resume/resume.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'resume', component:ResumeComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
