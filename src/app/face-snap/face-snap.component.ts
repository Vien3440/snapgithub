import { Component, Input, OnInit,  } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';


/* Décorateur. 
Apporter des modifications à une classe*/
@Component({
   selector: 'app-face-snap',
   templateUrl: './face-snap.component.html',
   styleUrls: ['./face-snap.component.scss']
})

  
//  Le ! permet de ne pas remonter d'erreur 
//  pour avoir créé des propriétés sans les initialiser 
export class FaceSnapComponent implements OnInit {

   /*Pour qu'une propriété puisse être injectée depuis
   l'extérieur d'un Component  ici "FaceSnapComponent" , il faut lui ajouter le décorateur  @Input()*/
   @Input() faceSnap!  : FaceSnap;
   button_text!: string;

//   titel!: string;
//   description!: string;
//   date!: Date;
//   nb_snap!: number;
//   img_url!: string;


   ngOnInit(){
      this.button_text = "+1 snap"
      /* Méthode en dure  */
      
//      this.titel = "Stalker Anomaly Gamma";
//      this.description = "Partez à l’aventure en arpentant l’un des plus beaux sentiers de randonnée de chernobyl !";
//      this.date = new Date();
//      this.nb_snap = 33;
//      this.img_url = "https://cdnb.artstation.com/p/assets/images/images/017/938/725/large/k-anomalyfield-02.jpg?1557923649" 
//      
   }

   onAddSnap(  ){
         if( this.button_text == "+1 snap"){
            this.button_text = "-1 snap"
            this.faceSnap.nb_snap++; 
         }else{
            this.button_text = "+1 snap"
            this.faceSnap.nb_snap--;
         }
   } 
}
