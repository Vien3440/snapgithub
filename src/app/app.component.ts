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
  /** Installation tableau typé  **/
  faceSnaps!: FaceSnap[];
  /** Installation  **/
  faceSnap1!: FaceSnap;
  faceSnap2!: FaceSnap;
  faceSnap3!: FaceSnap;
  ngOnInit(){

    /* Instentiation avec les paramètres, 
    ne marche plus car la nouvelle classe ne disose plus de la méthode constructeur 
    */

    // this.myFaceSnap = new FaceSnap("titre", "description", new Date, 333, "urlImg");
    

//    this.myFaceSnap = 
//      {
//        titel: 'Archibald',
//        description: 'Mon meilleur ami depuis tout petit !',
//        img_url: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
//        date: new Date(),
//        nb_snap: 0,
//        localisation: 'ici'
//      };


      this.faceSnaps = [
        {
          titel: 'Archibald',
          description: 'Mon meilleur ami depuis tout petit !',
          img_url: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          date: new Date(),
          nb_snap: 0,
        },
        {
          titel: 'Three Rock Mountain',
          description: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit  morbo vel maleficia ? De apocalypsi gorger omero survivant des morts-vivants dictum mauris. Salut mortuis sans âme creaturas sans âme, imo traque maléfique monstra adventus resi dentevil vultus comedat cerebella viventium. Qui cadavre animé, chauve-souris de cricket max brucks terribilem incessu zomby. Le mangeur de chair vaudou sacerdos, suscitat mortuos comedere carnem virus. Zonbi en lambeaux pour solum oculi eorum defunctis go lum cerebro. Nescio crée un zombie mort-vivant. Sicut malus horreur vaudou putride. Nuit des morts-vivants.',
          img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
          date: new Date(),
          nb_snap: 6,
        },
        {
          titel: 'Un bon repas',
          description: 'Mmmh que c\'est bon !',
          img_url: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
          date: new Date(),
          nb_snap: 33,
          localisation:'la bas'
        }
      ];


    this.faceSnap1 = {
      titel: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      img_url: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      date: new Date(),
      nb_snap: 0,
      localisation: ''
    }

    this.faceSnap2 = {
      titel: 'Archibald',
      description: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit  morbo vel maleficia ? De apocalypsi gorger omero survivant des morts-vivants dictum mauris. Salut mortuis sans âme creaturas sans âme, imo traque maléfique monstra adventus resi dentevil vultus comedat cerebella viventium. Qui cadavre animé, chauve-souris de cricket max brucks terribilem incessu zomby. Le mangeur de chair vaudou sacerdos, suscitat mortuos comedere carnem virus. Zonbi en lambeaux pour solum oculi eorum defunctis go lum cerebro. Nescio crée un zombie mort-vivant. Sicut malus horreur vaudou putride. Nuit des morts-vivants.',
      img_url: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      date: new Date(),
      nb_snap: 0,
      localisation: ''
    }

    this.faceSnap3 = {
      titel: 'Archibald',
      description: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit  morbo vel maleficia ? De apocalypsi gorger omero survivant des morts-vivants dictum mauris. Salut mortuis sans âme creaturas sans âme, imo traque maléfique monstra adventus resi dentevil vultus comedat cerebella viventium. Qui cadavre animé, chauve-souris de cricket max brucks terribilem incessu zomby. Le mangeur de chair vaudou sacerdos, suscitat mortuos comedere carnem virus. Zonbi en lambeaux pour solum oculi eorum defunctis go lum cerebro. Nescio crée un zombie mort-vivant.',
      img_url: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      date: new Date(),
      nb_snap: 0,
      localisation: ''
    }

  }
}


 
 
 
 
 
 
 
 
 
