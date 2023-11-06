import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../models/game';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameservService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {

   }

   //declarar metodos de la clase

   getGames(){
     return this.http.get(`${this.API_URI}/games`);
   }

   getGame(id: string){
    return this.http.get(`${this.API_URI}/game/${id}`);
  }
  deleteGame(id: string){
    return this.http.delete(`${this.API_URI}/games/${id}`);
  }
  saveGame(game: Game){
    return this.http.post(`${this.API_URI}/games`,GamepadButton);
  }

  updateGame(gameupdate: Game,id: string) : Observable<Game>{
    return this.http.put(`${this.API_URI}/games/${id}`,gameupdate);
  }
}
