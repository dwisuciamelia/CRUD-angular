import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user/user.model';
import { UserService } from '../../services/user/user.service';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { PageEvent } from '@angular/material/paginator';
import { DetailUserComponent } from './detail-user/detail-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  users?: User[];
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    password: '',
  };

  totalItems: number;
  pageSize = 10;
  currentPage = 0;
  dismissible = true;

  constructor(public userService: UserService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.retrieveUser();
  }

  retrieveUser(): void {
    this.userService.getAll({ limit: 10, offset: 0 }).subscribe({
      next: (data) => {
        this.users = data.rows;
        this.totalItems = data.count;
      },
      error: (e) => console.log(e),
    });
  }

  pageChanged(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.userService
      .getAll({ limit: 10, offset: this.pageSize * this.currentPage })
      .subscribe({
        next: (data) => {
          this.users = data.rows;
          this.totalItems = data.count;
        },
        error: (e) => console.log(e),
      });
  }

  addUser(): void {
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: '800px',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.currentPage = 0;
      this.retrieveUser();
    });
  }

  editUser = async (id: string) => {
    this.userService.id = id;
    const dialogRef = this.dialog.open(EditUserComponent, {
      width: '800px',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.currentPage = 0;
      this.retrieveUser();
    });
  };

  viewUser(id: string): void {
    this.userService.id = id;
    const dialogRef = this.dialog.open(DetailUserComponent, {
      width: '800px',
      disableClose: true,
    });
  }

  deleteUser(id: string): void {
    this.userService.delete(id).subscribe({
      next: () => {
        this.userService
          .getAll({ limit: 10, offset: this.pageSize * this.currentPage })
          .subscribe({
            next: (data) => {
              this.users = data.rows;
              this.totalItems = data.count;
            },
            error: (e) => console.log(e),
          });
      },
      error(err) {
        console.log(err);
      },
    });
  }
}
