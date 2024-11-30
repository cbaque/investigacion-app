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
                path: "investigation",
                loadComponent: () => import('./dashboard/pages/research/researchIndex/research.component').then(c => c.ResearchComponent),
                data: {
                    breadcrumb: "Investigación"
                }
            },
            {
                path: "investigation-new",
                loadComponent: () => import('./dashboard/pages/research/researchCreate/researchCreate.component').then(c => c.ResearchCreateComponent),
                data: {
                    breadcrumb: "Crear Investigación"
                }
            },

            {
                path: "scientist",
                loadComponent: () => import('./dashboard/pages/scientist/scientist/scientist.component').then(c => c.ScientistComponent),
                data: {
                    breadcrumb: "Producción"
                },
                children : [
                    {
                        path: "articles",
                        loadComponent: () => import('./dashboard/pages/scientist/articles/articleIndex/articles.component').then(c => c.ArticlesComponent),
                        data: {
                            breadcrumb: "Articulos"
                        }
                    },
                    {
                        path: "books",
                        loadComponent: () => import('./dashboard/pages/scientist/books/books.component').then(c => c.BooksComponent),
                        data: {
                            breadcrumb: "Libros"
                        }
                    },
                    {
                        path: "",
                        loadComponent: () => import('./dashboard/pages/scientist/articles/articleIndex/articles.component').then(c => c.ArticlesComponent),
                        data: {
                            breadcrumb: "Articulos"
                        }
                    },
                    {
                        path: "articles-new",
                        loadComponent: () => import('./dashboard/pages/scientist/articles/articleCreate/articleCreate.component').then(c => c.ArticleCreateComponent),
                        data: {
                            breadcrumb: "Crear Investigación"
                        }
                    },
                ]
            },


            {
                path: "linkage",
                loadComponent: () => import("./dashboard/pages/linkage/linkage/linkage.component").then(c => c.LinkageComponent),
                data: {
                    breadcrumb: "Vinculación"
                },
                children : [
                    {
                        path: "call/applications",
                        loadComponent: () => import('./dashboard/pages/linkage/callApplication/callApplicationIndex/callApplicationIndex.component').then(c => c.CallApplicationIndexComponent),
                        data: {
                            breadcrumb: "Convocatorias"
                        }
                    },
                    {
                        path: "proposal",
                        loadComponent: () => import('./dashboard/pages/linkage/proposal/proposal.component').then(c => c.ProposalComponent),
                        data: {
                            breadcrumb: "Propuestas"
                        }
                    },
                    {
                        path: "",
                        loadComponent: () => import('./dashboard/pages/linkage/callApplication/callApplicationIndex/callApplicationIndex.component').then(c => c.CallApplicationIndexComponent),
                        data: {
                            breadcrumb: "Convocatorias"
                        }
                    },
                ]
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
