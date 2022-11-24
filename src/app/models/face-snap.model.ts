export class FaceSnap {

    /* Pour ajouter des propriétés qui seront initialisées par
    les arguments passés au constructor,
    je peut retirer leurs déclarations et initialisations,
    et leur ajouter simplement le modificateur
    public  dans le  constructor  : */
    
    //titel: string;
    //description: string;
    //date: Date;
    //nb_snap: number;
    //img_url: string;

   // constructor(titel:string, description: string, date: Date, nb_snap: number, img_url: string
    //) {
    //    this.titel = titel;
    //    this.description = description;
    //    this.date = date;
    //    this.nb_snap = nb_snap;
    //    this.img_url = img_url;
    //}


    /*La méthode constructeur est une méthode spéciale d'une classe
    pour créer et initialiser une instance d'objet de cette classe.
    */

    
//    constructor(public titel: string,
//                public description: string,
//                public date: Date,
//                public nb_snap: number,
//                public img_url: string,
//                // Le ? permet de rendre optionnelle la proprieté 
//                public localisation?: string){
//
//                }
    

    /* Pour ne pas surcharger l'empreinte du constructeur (trop d'argument).
    Je modifie la classe en supriment le constructeur pour simpliment lister 
    les propriétés et leurs types*/

    titel! : string;
    description!: string;
    date!: Date;
    nb_snap!: number;
    img_url!: string;
    localisation?: string;


    
}