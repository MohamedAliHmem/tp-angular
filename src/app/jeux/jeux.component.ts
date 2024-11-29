import { Component } from '@angular/core';
import { Jeux } from '../model/jeux.model';
import { JeuxService } from '../jeux.service';

@Component({
  selector: 'app-jeux',
  templateUrl: './jeux.component.html',
  styleUrls: ['./jeux.component.css']
})
export class JeuxComponent {
  jeu?: Jeux[];


  constructor(private jeuxService: JeuxService ) {
    // this.jeux = jeuxService.listeJeux();
  }



  ngOnInit(): void {
    this.chargerProduits();
  }

  chargerProduits() {

    this.jeuxService.listeJeux().subscribe(j => {
      console.log(j);
      this.jeu = j;
    });
  }

   

}
