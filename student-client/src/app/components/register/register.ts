import { Component } from '@angular/core';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {
  username = '';
  password = '';
  message = '';

  constructor(private auth: AuthService, private router: Router) {}

  register() {
    this.auth.register(this.username, this.password).subscribe({
      next: () => {
        this.message = 'Registration successful';
        this.router.navigate(['/login']);
      }
    });
  }
  goToLogin() {
  this.router.navigate(['/login']);
}

}
