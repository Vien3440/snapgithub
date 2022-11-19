import { Component, OnInit,  } from '@angular/core';


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
   titel!: string;
   description!: string;
   date!: Date;
   nb_snap!: number;
   img_url!: string;

   ngOnInit(){
      this.titel = "Stalker Anomaly Gamma";
      this.description = "Partez à l’aventure en arpentant l’un des plus beaux sentiers de randonnée de chernobyl !";
      this.date = new Date();
      this.nb_snap = 33;
      this.img_url = "https://cdnb.artstation.com/p/assets/images/images/017/938/725/large/k-anomalyfield-02.jpg?1557923649" 
   }
   

   
}



