import { HomeComponent } from "../Home/CustomerApp.HomeComponent"

export const MainRoutes = [
    { path: 'Home', children: [], componet: HomeComponent },
    { path: 'Customer', loadChildren: () => import('../Customer/CustomerApp.CustomerModule').then(x => x.CustomerModule)  },
    { path: 'Supplier', loadChildren: () => import('../Supplier/CustomerApp.SupplierModule').then(x => x.SupplierModule) },
    { path: '', children: [], component: HomeComponent }
];

