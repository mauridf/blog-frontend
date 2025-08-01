import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../../services/post';
import { AuthService } from '../../services/auth';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];
  newPost: Partial<Post> = {
    title: '',
    content: '',
  };

  currentUser: any;

  constructor(
    private postService: PostService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getAll().subscribe({
      next: (data) => (this.posts = data),
      error: () => alert('Erro ao carregar posts'),
    });
  }

  createPost() {
    const authorId = this.authService.getCurrentUserId();
    if (!authorId) {
      alert('Usuário não autenticado');
      this.router.navigate(['/login']);
      return;
    }

    this.postService.create({ ...this.newPost, authorId }).subscribe({
      next: () => {
        this.newPost = { title: '', content: '' };
        this.loadPosts();
      },
      error: () => alert('Erro ao criar post'),
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
