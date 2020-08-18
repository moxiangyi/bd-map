import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      account: ['', []],
      password: ['']
    })
  }

  login(): void {
    let snackBarTitle = '';
    if (!this.form.value.account) {
      snackBarTitle = '请输入用户名~~~';
    } else if (!this.form.value.password) {
      snackBarTitle = '请输入密码~~~';
    }
    if (snackBarTitle) {
      this.openSnackBar(snackBarTitle);
      return;
    }
    if (this.form.value.account === 'ftqyjglj' && this.form.value.password === '123456') {
      this.router.navigate(['/pages']);
    } else {
      this.openSnackBar('用户名或密码不正确，请重新输入');
    }
  }

  openSnackBar(title) {
    this.snackBar.open(title, 'X', {
      duration: 2000,
      verticalPosition: 'top'
    });
  }

}
