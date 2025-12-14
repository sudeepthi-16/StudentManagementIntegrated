import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'https://localhost:7228/api/students';

  constructor(private http: HttpClient) {}

  private getHeaders() {
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('token')}`
      })
    };
  }

  getStudents() {
    return this.http.get<any[]>(this.apiUrl, this.getHeaders());
  }

  addStudent(student: any) {
    return this.http.post(this.apiUrl, student, this.getHeaders());
  }

  updateStudent(id: number, student: any) {
    return this.http.put(`${this.apiUrl}/${id}`, student, this.getHeaders());
  }

  deleteStudent(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`, this.getHeaders());
  }
}
