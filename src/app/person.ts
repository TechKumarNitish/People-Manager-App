import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from './models/person.model';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private API = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Person[]> {
    return this.http.get<Person[]>(this.API);
  }

  get(id: string): Observable<Person> {
    return this.http.get<Person>(`${this.API}/${id}`);
  }

  create(person: Person): Observable<Person> {
    return this.http.post<Person>(this.API, person);
  }

  update(id: string, person: Person): Observable<Person> {
    return this.http.put<Person>(`${this.API}/${id}`, person);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.API}/${id}`, {});
  }
}
