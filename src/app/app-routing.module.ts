import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FaceSnapsListComponent } from "./face-snaps-list/face-snaps-list.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";

// Ce tableau va lier les routes de l'application aux components
const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'facesnaps', component: FaceSnapsListComponent}
] ;

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
      ],
      exports: [
          RouterModule
        ]
})
export class AppRoutingModule {

}