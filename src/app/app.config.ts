import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { PreloadAllModules, provideRouter, withComponentInputBinding, withPreloading } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding(),
    withPreloading(PreloadAllModules)),
    provideHttpClient(), importProvidersFrom(provideFirebaseApp(() => initializeApp({
      "projectId":"releases-app-6eb0f",
      "appId":"1:564594943708:web:5043b7481281954609f619",
      "storageBucket":"releases-app-6eb0f.appspot.com",
      "apiKey":"AIzaSyA0bz7JjoDfHOMEPDBDeyX7o-ogQcXo9AU",
      "authDomain":"releases-app-6eb0f.firebaseapp.com",
      "messagingSenderId":"564594943708",
      "measurementId":"G-L5YE5M2D3B"}))), 
      importProvidersFrom(provideAuth(() => getAuth())),
      importProvidersFrom(provideFirebaseApp(() => 
      initializeApp({
        "projectId":"releases-app-6eb0f",
        "appId":"1:564594943708:web:5043b7481281954609f619",
        "storageBucket":"releases-app-6eb0f.appspot.com",
        "apiKey":"AIzaSyA0bz7JjoDfHOMEPDBDeyX7o-ogQcXo9AU",
        "authDomain":"releases-app-6eb0f.firebaseapp.com",
        "messagingSenderId":"564594943708",
        "measurementId":"G-L5YE5M2D3B"
      }))), 
      importProvidersFrom(provideAuth(() => getAuth())),
       importProvidersFrom(provideFirestore(() => 
       getFirestore()))
  ]
};
