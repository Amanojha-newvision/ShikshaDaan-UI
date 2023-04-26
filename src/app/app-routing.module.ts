import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './_shared/components/welcome/welcome.component';
import { InviteComponent } from './_shared/components/invite/invite.component';

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'invite', component: InviteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
