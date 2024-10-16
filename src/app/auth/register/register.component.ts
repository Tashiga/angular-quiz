import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(8)
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(8)
      ])
    }, {
      validators: this.passwordMatchValidator
    });
  }

  // Validator personnalisé pour vérifier que les mots de passe correspondent
  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  addUser() {
    if (this.registerForm.valid) {
      this.authService.addUser(this.registerForm.value);
      this.router.navigate(['/login']);
    }
  }
}