import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import User from '../../Models/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit  {

  @ViewChild('loginDialog') loginDialog!: ElementRef<HTMLDialogElement>;
  @ViewChild("loginForm") form!: NgForm;
  @Output() closing:EventEmitter<void>;

  user:User;

  constructor()
  {
    this.closing= new EventEmitter<void>();
    this.user = new User(0, '', '', '');
  }
  ngAfterViewInit(): void {
    this.loginDialog.nativeElement.showModal();
  }
  closeDialog()
  {
    this.loginDialog.nativeElement.close();
    this.closing.emit();
  }
  onFormSubmitted() {
    console.log(this.form);
    console.log(this.form.value.name);
    console.log(this.user);
  }
}
