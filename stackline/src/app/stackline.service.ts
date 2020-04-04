import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StacklineService {

  constructor(private http: HttpClient) { }
  private stacklineJson = '../assets/stackline.json';

  public getStackLineData(): Observable<any> {
    return this.http.get(this.stacklineJson);
  }
}
