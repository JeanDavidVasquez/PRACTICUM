import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideFirebaseApp(() => initializeApp({"projectId":"serviciosenfermeria-7655b","appId":"1:655605016337:web:43acb5f7992d364f8b0eb0","storageBucket":"serviciosenfermeria-7655b.appspot.com","apiKey":"AIzaSyDX4s8_DDx_Ktj7lF9swGug9If7w5RpmSI","authDomain":"serviciosenfermeria-7655b.firebaseapp.com","messagingSenderId":"655605016337","measurementId":"G-5EP5HBGSQ7"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
