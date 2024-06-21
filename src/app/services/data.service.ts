import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get('/assets/dummydata/country-analysis.json');
  }
  getfabricsData(): Observable<any> {
    return this.http.get('/assets/dummydata/all-fabricsdata.json');
  }

  getNominatedFabricData(): Observable<any> {
    return this.http.get('/assets/dummydata/nominated-fabric.json');
  }
  getLoadPriceTopologyData(): Observable<any> {
    return this.http.get('/assets/dummydata/load-price-topology.json');
  }
  getVolumnEvolutionData(): Observable<any> {
    return this.http.get('/assets/dummydata/volumn-evolution-analysis.json');
  }
}
