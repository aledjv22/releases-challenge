import { Injectable, signal } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, 
  signOut, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';

import { User } from '@models/user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  isLogged = signal(false);
  user = signal<User>({ email: '', password: ''});

  constructor(private auth: Auth) { }

  register({ email, password }: User) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login({ email, password }: User) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  loginWithGoogle() {
    this.isLogged.set(true);
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  logout() {
    this.isLogged.set(false);
    return signOut(this.auth);
  }

}