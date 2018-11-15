import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { VentasPage } from '../pages/ventas/ventas';
import { ClientesListarPage } from '../pages/clientes-listar/clientes-listar';
import { SolicitudesPage } from '../pages/solicitudes/solicitudes';
import { CreditosPage } from '../pages/creditos/creditos';
import { ChatPage } from '../pages/chat/chat';
import * as firebase from 'firebase'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBZq3XXETDp9Yub7EbKhicVFk7GjV8CZiE",
    authDomain: "chat-ea109.firebaseapp.com",
    databaseURL: "https://chat-ea109.firebaseio.com",
    projectId: "chat-ea109",
    storageBucket: "chat-ea109.appspot.com",
    messagingSenderId: "783659782550"
  };
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'HOME', component: HomePage },
      { title: 'VENTA', component: VentasPage },
      { title: 'CLIENTES', component: ClientesListarPage },
      { title: 'SOLICITUDES', component: SolicitudesPage },
      { title: 'CREDITOS', component: CreditosPage },
      { title: 'CHAT', component:ChatPage}
    ];
    firebase.initializeApp(config);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
