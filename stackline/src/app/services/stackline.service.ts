import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StacklineService {

  constructor(private http: HttpClient) { }
  private stacklineJson = '../../assets/stackline.json';
  private skilljar = '../../assets/skilljar.json';

  public getStackLineData(): Observable<any> {
    return this.http.get(this.stacklineJson);
  }

  public getSkillJarData(): Observable<any> {
    return this.http.get(this.skilljar);
  }

}
