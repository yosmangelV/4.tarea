import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {   AudioPage,
           DescripcionPage,
           LlamadasPage,
           MensajePage,
           TabsPage
        } from '../pages/index.paginas';

@NgModule({
  declarations: [
    MyApp,
    AudioPage,
    DescripcionPage,
    LlamadasPage,
    MensajePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      backButtonText:'Atras'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AudioPage,
    DescripcionPage,
    LlamadasPage,
    MensajePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
