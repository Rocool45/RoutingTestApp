import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FairDetailsComponent } from "./shared/fairs/fair-details/fair-details.component";
import { UserBashbaordComponent } from "./shared/user/user-bashbaord/user-bashbaord.component";
import { ProductDashboardComponent } from "./shared/product/product-dashboard/product-dashboard.component";
import { FairDashboardComponent } from "./shared/fairs/fair-dashboard/fair-dashboard.component";
import { UserCardComponent } from "./shared/user/user-card/user-card.component";
import { UserFormComponent } from "./shared/user/user-form/user-form.component";
import { ProductCardComponent } from "./shared/product/product-card/product-card.component";
import { ProductFormComponent } from "./shared/product/product-form/product-form.component";
import { PageNotFoundComponent } from "./shared/component/page-not-found/page-not-found.component";
import { DashboardComponent } from "./shared/component/dashboard/dashboard.component";
import { AuthComponent } from "./shared/component/auth/auth.component";
import { AuthGuard } from "./shared/service/auth.guard";

const AppRoutes :Routes=[
    {
        path:"",
        component:AuthComponent,
    },
    {
        path:"home",
        component:DashboardComponent
    },
    {
        path:"",
        redirectTo:"home",
        pathMatch:"full"
    },
    {
        path:"fairs",
        component:FairDashboardComponent,
        canActivateChild:[AuthGuard],
        children:[
            {
                path:":id",
                component:FairDetailsComponent
            },
        ]
        },
    {
        path:"users",
        component:UserBashbaordComponent,
        canActivate:[AuthComponent],
        children:[
            {
                path:"userform",
                component:UserFormComponent
            },
            {
                path:":id",
                component:UserCardComponent
            },
             {
                path:":id/editform",
                component:UserFormComponent
            },
        ]
    },
    {
        path:"product",
        component:ProductDashboardComponent,
        canActivate:[AuthComponent],
        children:[
            {
                path:'form',
                component:ProductFormComponent
            },
            {
                path:":id",
                component:ProductCardComponent
            }
        ]
    },
    {
        path:"page-not-found",
        component:PageNotFoundComponent
    },
    {
        path:"**",
        redirectTo:"page-not-found"
    }
]

@NgModule({
    imports:[RouterModule.forRoot(AppRoutes)],
    exports:[]
})
export class AppRoutingModule {

}