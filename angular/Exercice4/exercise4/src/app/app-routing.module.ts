import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BooksComponent } from "./books/books.component";
import { AuthorsComponent } from "./authors/authors.component";
import { GenresComponent } from "./genres/genres.component";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
    {
        path: "",
        redirectTo: "/books",
        pathMatch: "full"
    },
    {
        path: "books",
        component: BooksComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "authors",
        component: AuthorsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "genres",
        component: GenresComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "signup",
        component: SignupComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: [AuthGuard]
})

export class AppRoutingModule {

}