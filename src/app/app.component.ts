import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'snapgithub';

  /** Initalisation En gros une variable typé **/
  myFaceSnap!: FaceSnap;

  ngOnInit(){
    /**Instentiation avec les différents paramètres **/
    this.myFaceSnap = new FaceSnap("titre", "description", new Date, 333, "urlImg");
    return this.myFaceSnap;
  
  }
}


