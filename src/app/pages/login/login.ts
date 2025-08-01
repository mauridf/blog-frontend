import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  user: User = { username: '', password: '' };
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.user).subscribe({
      next: (res) => {
        // Armazena no localStorage
        localStorage.setItem('blog_user', res.userId);
        localStorage.setItem('blog_username', res.username);
        localStorage.setItem('blog_token', res.token);

        // Redireciona para a página de postagens ou dashboard
        this.router.navigate(['/home']);
      },
      error: (err) => {
        this.errorMessage = 'Usuário ou senha inválidos';
        console.error(err);
      },
    });
  }
}
