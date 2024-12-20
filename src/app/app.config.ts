import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptorsFromDi, HTTP_INTERCEPTORS, withInterceptors  } from '@angular/common/http';
import { errorInterceptor } from './interceptor/error.interceptor';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideNzIcons } from 'ng-zorro-antd/icon';
import es from '@angular/common/locales/es';


import { 
          ArrowLeftOutline, 
          CheckCircleFill, 
          CheckCircleOutline, 
          HomeFill, 
          HomeOutline, 
          LogoutOutline, 
          PauseCircleOutline, 
          PlayCircleOutline, 
          PlusSquareFill, 
          PlusSquareOutline, 
          ProfileOutline, 
          StopOutline, 
          SyncOutline, 
          UserAddOutline, 
          UserOutline,
          PlusOutline,
          UsergroupAddOutline,
          EditOutline,
          EditTwoTone,
          DeleteTwoTone,
          CloudUploadOutline,
          FolderViewOutline,
          WechatOutline,
          InboxOutline
        } from '@ant-design/icons-angular/icons';

import { IconDefinition } from '@ant-design/icons-angular';
import { jwtInterceptor } from './interceptor/jwt.interceptor';
import { NZ_I18N, es_ES } from 'ng-zorro-antd/i18n';

import { registerLocaleData } from '@angular/common';
const icons: IconDefinition[] = [
  ProfileOutline, 
  UserOutline, 
  LogoutOutline, 
  HomeOutline, 
  HomeFill, 
  CheckCircleFill,
  UserAddOutline,
  SyncOutline,
  PlusSquareFill,
  PlusSquareOutline,
  PlayCircleOutline,
  PauseCircleOutline,
  StopOutline,
  CheckCircleOutline,
  ArrowLeftOutline,
  PlusOutline,
  UsergroupAddOutline,
  EditOutline,
  EditTwoTone,
  DeleteTwoTone,
  CloudUploadOutline,
  FolderViewOutline,
  WechatOutline,
  InboxOutline
];

registerLocaleData(es);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(
      routes,
      withViewTransitions(),
    ),
    provideAnimations(),
    provideHttpClient(
      withInterceptors([errorInterceptor, jwtInterceptor]),
      withInterceptorsFromDi()
    ),
    provideNzIcons(icons),
    { provide: NZ_I18N, useValue: es_ES }
  ]
};
