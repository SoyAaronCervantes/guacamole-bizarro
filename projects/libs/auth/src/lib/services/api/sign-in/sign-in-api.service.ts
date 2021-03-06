import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { UserCredential } from '@firebase/auth-types';
import { UserInterface } from '../../../interfaces/user.interface';

import { from, Observable } from 'rxjs';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'platform'
})
export class SignInApiService {

  constructor(
    private angularFireAuth: AngularFireAuth
  ) { }

  signInEmailAndPassword$( user: UserInterface ): Observable<UserCredential> {
    return from( this.angularFireAuth.signInWithEmailAndPassword( user.email, user.password ) );
  }

  fetchSignInMethodsForEmail( email: string ): Observable< Array<string> > {
    return from( this.angularFireAuth.fetchSignInMethodsForEmail( email ) );
  }

  get signInWithGoogle$(): Observable<UserCredential> {
    return from( this.angularFireAuth.signInWithPopup( new auth.GoogleAuthProvider() ) );
  }

  get signInWithTwitter$(): Observable<UserCredential> {
    return from( this.angularFireAuth.signInWithPopup( new auth.TwitterAuthProvider() ) );
  }

  get signInWithFacebook$(): Observable<UserCredential> {
    return from( this.angularFireAuth.signInWithPopup( new auth.FacebookAuthProvider() ) );
  }

}
