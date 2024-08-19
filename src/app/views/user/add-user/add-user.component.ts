import { Component, Inject, OnInit } from '@angular/core';
import { User } from '../../../models/user/user.model';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css',
})
export class AddUserComponent implements OnInit {
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

  ngOnInit(): void {}

  saveUser(): void {
    const data = {
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      password: this.user.password,
      role: this.user.role,
    };

    this.userService.create(data).subscribe({
      next: () => {
        this.userService.getAll({});
      },
      error: (e) => {
        console.log(e);
        this.userService.visible = true;
        setTimeout(() => {
          this.userService.visible = false;
        }, 5000);
      },
    });
  }
}
