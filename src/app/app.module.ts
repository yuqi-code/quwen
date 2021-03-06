import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WechatPopularPage } from '../pages/wechat-popular/wechat-popular'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HTTP } from '@ionic-native/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ItemsListComponent } from '../components/items-list/items-list';
import { ItemComponent } from '../components/item/item';
import { ItemsListService } from "../services/ItemsListService";
import { OpenPageService } from "../services/OpenPageService";
import { SharingService } from "../services/SharingService";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WechatPopularPage,
    ItemsListComponent,
    ItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WechatPopularPage,
    ItemsListComponent,
    ItemComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    InAppBrowser,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ItemsListService,
    OpenPageService,
    SharingService,
  ]
})
export class AppModule {}
