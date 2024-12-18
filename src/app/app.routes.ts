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
                loadComponent: () => import('./dashboard/pages/research/research/research.component').then(c => c.ResearchComponent),
                data: {
                    breadcrumb: "Investigación"
                },
                children: [
                    {
                        path: "",
                        loadComponent: () => import('./dashboard/pages/research/projects/projects.component').then(c => c.ProjectsComponent),
                        data: {
                            breadcrumb: "Investigación/Proyectos"
                        }
                    },
                    {
                        path: "projects",
                        loadComponent: () => import('./dashboard/pages/research/projects/projects.component').then(c => c.ProjectsComponent),
                        data: {
                            breadcrumb: "Investigación/Proyectos"
                        }
                    },
                    {
                        path: "advances",
                        loadComponent: () => import('./dashboard/pages/research/advanced/advanced.component').then(c => c.AdvancedComponent),
                        data: {
                            breadcrumb: "Investigación/Avances"
                        }
                    },
                    {
                        path: "closing",
                        loadComponent: () => import('./dashboard/pages/research/closing/closing.component').then(c => c.ClosingComponent),
                        data: {
                            breadcrumb: "Investigación/Cierres"
                        }
                    },
                    {
                        path: "certification",
                        loadComponent: () => import('./dashboard/pages/research/certification/certification.component').then(c => c.CertificationComponent),
                        data: {
                            breadcrumb: "Investigación/Certificación"
                        }
                    },
                ]
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
                        loadComponent: () => import('./dashboard/pages/linkage/proposal/proposalIndex/proposalIndex.component').then(c => c.ProposalIndexComponent),
                        data: {
                            breadcrumb: "Propuestas"
                        }
                    },
                    {
                        path: "proposal-new",
                        loadComponent: () => import('./dashboard/pages/linkage/proposal/proposalCreate/proposalCreate.component').then(c => c.ProposalCreateComponent),
                        data: {
                            breadcrumb: "Crear Propuesta"
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
