import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdmissionComponent } from './admission/admission.component';
import { ApplyOnlineComponent } from './apply-online/apply-online.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CivilComponent } from './departments/civil/civil.component';
import { CseComponent } from './departments/cse/cse.component';
import { EceComponent } from './departments/ece/ece.component';
import { EeeComponent } from './departments/eee/eee.component';
import { MechComponent } from './departments/mech/mech.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contactus',
    component: ContactusComponent
  },
  {
    path: 'aboutus',
    component: AboutUsComponent
  },
  {
    path: 'civil',
    component: CivilComponent
  },
  {
    path: 'cse',
    component: CseComponent
  },
  {
    path: 'eee',
    component: EeeComponent
  },
  {
    path: 'ece',
    component: EceComponent
  },
  {
    path: 'mech',
    component: MechComponent
  },
  {
    path: 'admissions',
    component: AdmissionComponent
  },
  {
    path: 'apply-online',
    component: ApplyOnlineComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
