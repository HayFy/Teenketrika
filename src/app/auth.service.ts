import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { getAuth, signInWithEmailAndPassword, signOut  } from "firebase/auth";
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  user!: User;

  constructor( public router : Router) { }

  login(email: string, password: string){
    const auth = getAuth();
    signInWithEmailAndPassword(auth,email, password)
      .then(res => {
        console.log('You are successfully signed up !', res);
        this.router.navigate(['/dashboard']);
      })
      .catch(error => {
        window.alert("Login ou mots de passe incorrect  "+error.message);
        console.log('Something is wrong:', error.message);
      })
  }

  logout (){
    const auth = getAuth();
    signOut(auth).then((res) => {
      // Sign-out successful.
      console.log("Sign-out successful", res);
      this.router.navigate(['']);
    }).catch((error) => {
      // An error happened.
      console.log("An error happened",error)
    });
  }



}
