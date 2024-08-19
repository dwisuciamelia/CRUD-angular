import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { User } from '../../../models/user/user.model';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrl: './detail-user.component.css',
})
export class DetailUserComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    password: '',
  };
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUserById(this.userService.id);
  }

  getUserById(id: string): void {
    this.userService.getById(id).subscribe({
      next: (data) => {
        this.user = data;
      },
      error: (e) => console.log(e),
    });
  }
}
