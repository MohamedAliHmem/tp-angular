import { Injectable } from '@angular/core';
import { Jeux } from './model/jeux.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JeuxService {

  apiURL: string = 'http://localhost:8081/jeux/api/all';


  Jeux! : Jeux[]; //un tableau de produits
  //categories : Categorie[];
 

  constructor(private http : HttpClient) { 
    
  }

  listeJeux(): Observable<Jeux[]>{
    return this.http.get<Jeux[]>(this.apiURL);
    }
}
