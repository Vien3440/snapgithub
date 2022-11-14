import { Component } from '@angular/core';


/* Décorateur. 
Apporter des modifications à une classe*/
@Component({
   selector: 'app-face-snap',
   templateUrl: './face-snap.component.html',
   styleUrls: ['./face-snap.component.scss']
})


//  Le ! permet de ne pas remonter d'erreur 
//  pour avoir créé des propriétés sans les initialiser je suis tres bian sa dfzef fef 
export class FaceSnapComponent {
   titel!: string;
   description!: string;
   date!: Date;
   nb_snap!: number;
}

