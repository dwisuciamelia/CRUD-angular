import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../models/user/user.model';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css',
})
export class EditUserComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    password: '',
  };
  roleData = [
    { name: 'Select Role', desc: '' },
    { name: 'Admin', desc: 'admin' },
    { name: 'User', desc: 'user' },
  ];

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

  updateUser(): void {
    const data = {
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      role: this.user.role,
      password: this.user.password,
    };

    this.userService.update(this.user.id, data).subscribe({
      next: () => {
        this.userService.getAll({});
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
