import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Expression } from '@angular/compiler';
import { State } from './state.model';

@Injectable({
  providedIn: 'root'
})
export class StatesService {
  states: State[] = [];

  constructor(public httpClient: HttpClient){}

  getDataFromJSONFile() {
    this.httpClient.get<State[]>('@data/json/states.json').subscribe((resp) => {this.states = resp;});
  }
 
  getStates() {
    return this.states;
  }
}
