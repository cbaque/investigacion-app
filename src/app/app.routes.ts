import { Routes } from '@angular/router';
import { authGuard } from '@guard/auth.guard';

export const routes: Routes = [
    {
        path: "auth",
        loadComponent: () => import('./auth/pages/signin/signin.component').then(c => c.SigninComponent),
    },
    {
        path: "unauthorized",
        loadComponent: () => import('./auth/pages/unauthorized/unauthorized.component').then(c => c.UnauthorizedComponent),
    },
    {
        path: "dashboard",
        canActivate: [authGuard],
        loadComponent: () => import('./dashboard/dashboard.component').then(c => c.DashboardComponent),
        children: [
            {
                path: "",
                loadComponent: () => import("./dashboard/pages/summary/summary.component").then(c => c.SummaryComponent)
            },
            {
                path: "users",
                loadComponent: () => import('./dashboard/pages/users/userIndex/users.component').then(c => c.UsersComponent),
                data: {
                    breadcrumb: "Usuarios"
                }
            },
            {
                path: "users-new",
                loadComponent: () => import('./dashboard/pages/users/userCreate/userCreate.component').then(c => c.UserCreateComponent),
                data: {
                    breadcrumb: "Crear Usuario"
                }
            },

            {
                path: "states",
                loadComponent: () => import('./dashboard/pages/states/states.component').then(c => c.StatesComponent),
                data: {
                    breadcrumb: "Disposiciones"
                }
            },
            {
                path: "provisions",
                loadComponent: () => import('./dashboard/pages/provision/provision.component').then(c => c.ProvisionComponent),
                data: {
                    breadcrumb: "Crear Disposición"
                }
            }
        ]
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    { 
        path: '**', 
        loadComponent: () => import('./auth/pages/signin/signin.component').then(c => c.SigninComponent),
    }
];
