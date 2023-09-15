import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { Router, ActivatedRoute } from '@angular/router';


//import * as firebase from 'firebase/app';
//import { FirebaseAuth } from 'angularfire2';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {





  constructor(private router: Router, private activatedRouter: ActivatedRoute) {
    const firebaseConfig = {
      apiKey: "AIzaSyCnLzu8_NpBNeAobqENn4hHhcC3YDr4viQ", // Tu clave de API
      authDomain: "ComprasApp.firebaseapp.com", // Reemplaza "TU-PROYECTO" con el nombre de tu proyecto
      projectId: "comprasapp-936c4", // Reemplaza "TU-PROYECTO" con el ID de tu proyecto
      storageBucket: "ComprasApp.appspot.com", // Reemplaza "TU-PROYECTO" con el nombre de tu proyecto
      messagingSenderId: "180182580459",
      //appId: "comprasapp-936c4",
      //measurementId: "TUMEASUREMENTID" // Opcional, si estás utilizando Firebase Analytics
    };

    // Inicializa Firebase
    const app = initializeApp(firebaseConfig);
    //this.miauth = getAuth(app);

  }


  registroUsuario(userdata: any) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, userdata.email, userdata.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..

        console.log(errorCode, errorMessage);


      });
  }

  inicioSesion(userdata: { email: any; password: any; }) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, userdata.email, userdata.password)
      .then(response => {
        console.log(response);
        this.router.navigate(['/']);
      })
      .catch(
        error => {
          const errorCode = error.code;
        const errorMessage = error.message;
        // ..

        console.log(errorCode, errorMessage);
        }
      )
  }

}
