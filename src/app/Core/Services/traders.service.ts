import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { ITrader } from '../Models/Trader';

@Injectable({
  providedIn: 'root',
})
export class TraderService extends GenericService<ITrader, number>{
  constructor(httpClient: HttpClient){
    super('traders', httpClient)
  }

  getFilteredPersons(searchString: string){
    this.httpClient.get<ITrader[]>(`${this.URL}/filtered?searchString=${searchString}`);
  }

  getPaginatedTraders(pageNo: number, pageSize: number){
    this.httpClient.get<ITrader[]>(`${this.URL}/paginated?PageNumber=${pageNo}&PageSize=${pageSize}`);
  }
}
