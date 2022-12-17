import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { State } from './state.model';
import { Observable, delay, of, Subject, tap } from 'rxjs';
import { map, share, multicast, publish, publishLast, publishReplay, refCount} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import * as DATA from '@data/json/states.json';
import { UtilsService } from '@app/core/utils.service';


@Injectable({
  providedIn: 'root'
})
export class StatesService {
  state: State;
  states: State[] = [];
  dataFile: string = '@data/json/states.json';

  constructor(
    public httpClient: HttpClient,
    private utils: UtilsService
  ){
    this.loadData();
  }

  loadData() {
    this.states = DATA;
    // this.httpClient.get<State[]>(this.dataFile).subscribe((resp) => {this.states = resp;});
    // let source$ = ajax(this.dataFile).pipe(
    //   map((state:any) => {
    //     return state.response;
    //   }),
    //   tap((x) => this.utils.log(`State returned at ${new Date().toUTCString()}`))
    // );
    this.utils.log(`states.service.ts - Loaded ${this.states.length} states`);
  }
 
  getStates() {
    this.utils.log(`states.service.ts - Returning ${this.states.length} states`);
    return this.states;
  }

  // async fetchStates() {
  //   try {
  //     // 👇️ const response: Response
  //     const response = await fetch(this.dataFile, {
  //       method: 'GET',
  //       headers: {
  //         Accept: 'application/json',
  //       },
  //     });
  
  //     if (!response.ok) {
  //       throw new Error(`Error! status: ${response.status}`);
  //     }
  
  //     // 👇️ const result: GetResponse
  //     const result = (await response.json()) ;
  
  //     this.utils.log('result is: ', JSON.stringify(result, null, 4));
  
  //     return result;
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       this.utils.log('error message: ', error.message);
  //       return error.message;
  //     } else {
  //       this.utils.log('unexpected error: ', error.toString());
  //       return 'An unexpected error occurred';
  //     }
  //   }
  // }
}
