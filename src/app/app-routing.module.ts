import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TagAddComponent } from './tag-add/tag-add.component';
import { TagDetailComponent } from './tag-detail/tag-detail.component';

import { TagComponent } from './tag/tag.component';

const routes: Routes = [
  {path : '',component: TagComponent},
  {path:'home',component: TagComponent},
  {path: 'tag-add',component:TagAddComponent},
  {path:'tag-detail/:id',component: TagDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
