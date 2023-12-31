import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './containers';
import { DefaultLayoutCxComponent } from './containers-cx';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutCxComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./client/home/homecx.module').then((m) => m.HomecxModule)
      }
    ]
  },
  {
    path: 'centres',
    component: DefaultLayoutCxComponent,
    data: {
      title: 'Centres'
    },
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./client/centres/centres.module').then((m) => m.CentresModule)
      }
    ]
  },
  {
    path: 'services',
    component: DefaultLayoutCxComponent,
    data: {
      title: 'Services'
    },
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./client/services/services.module').then((m) => m.ServicesModule)
      }
    ]
  },
  {
    path: 'offres',
    component: DefaultLayoutCxComponent,
    data: {
      title: 'Offres'
    },
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./client/offres/offres.module').then((m) => m.OffresModule)
      }
    ]
  },
  {
    path: 'blog',
    component: DefaultLayoutCxComponent,
    data: {
      title: 'Blog'
    },
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./client/blog/blog.module').then((m) => m.BlogModule)
      }
    ]
  },
  {
    path: 'admin/category',
    component: DefaultLayoutComponent,
    data: {
      title: 'Category'
    },
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./admin/category/category.module').then((m) => m.CategoryModule)
      }
    ]
  },
  {
    path: 'admin/center',
    component: DefaultLayoutComponent,
    data: {
      title: 'Center'
    },
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./admin/center/center.module').then((m) => m.CenterModule)
      }
    ]
  },
  {
    path: 'service',
    component: DefaultLayoutComponent,
    data: {
      title: 'Service'
    },
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./admin/service/service.module').then((m) => m.ServiceModule)
      },
      {
        path: 'form',
        loadChildren: () =>
          import('./admin/service/service.module').then((m) => m.ServiceModule)
      }
    ]
  },
  {
    path: 'admin/user',
    component: DefaultLayoutComponent,
    data: {
      title: 'User'
    },
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./admin/user/user.module').then((m) => m.UserModule)
      }
    ]
  },
  {
    path: 'admin',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'theme',
        loadChildren: () =>
          import('./views/theme/theme.module').then((m) => m.ThemeModule)
      },
      {
        path: 'base',
        loadChildren: () =>
          import('./views/base/base.module').then((m) => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () =>
          import('./views/buttons/buttons.module').then((m) => m.ButtonsModule)
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./views/forms/forms.module').then((m) => m.CoreUIFormsModule)
      },
      {
        path: 'charts',
        loadChildren: () =>
          import('./views/charts/charts.module').then((m) => m.ChartsModule)
      },
      {
        path: 'icons',
        loadChildren: () =>
          import('./views/icons/icons.module').then((m) => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./views/notifications/notifications.module').then((m) => m.NotificationsModule)
      },
      {
        path: 'widgets',
        loadChildren: () =>
          import('./views/widgets/widgets.module').then((m) => m.WidgetsModule)
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule)
      },

    ]
  },
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
