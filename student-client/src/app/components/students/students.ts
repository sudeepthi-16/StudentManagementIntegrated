import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './students.html',
  styleUrls: ['./students.css']
})
export class StudentsComponent implements OnInit {
  students: any[] = [];
  student = { name: '', class: '', section: '' };
  editId: number | null = null;

  constructor(private service: StudentService, private router: Router) {}

  ngOnInit() {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/login']);
      
    } else {
      this.loadStudents();
    }
  }

  loadStudents() {
    this.service.getStudents().subscribe(res => this.students = res);
  }

  saveStudent() {
    if (this.editId) {
      this.service.updateStudent(this.editId, this.student).subscribe(() => {
        this.reset();
        this.loadStudents();
      });
    } else {
      this.service.addStudent(this.student).subscribe(() => {
        this.reset();
        this.loadStudents();
      });
    }
  }

  editStudent(s: any) {
    this.editId = s.id;
    this.student = { ...s };
  }

  deleteStudent(id: number) {
    this.service.deleteStudent(id).subscribe(() => this.loadStudents());
  }

  reset() {
    this.student = { name: '', class: '', section: '' };
    this.editId = null;
  }
}
