import { Routes } from '@angular/router';
import { Login } from './features/pages/login/login';
import { SignUp } from './features/pages/sign-up/sign-up';
import { Home } from './features/pages/home/home';
import { Chats } from './features/pages/chats/chats';
import { Account } from './features/pages/account/account';
import { Notifications } from './features/pages/notifications/notifications';

export const routes: Routes = [
    {
        path:"",
        component:Login,
        pathMatch:"full"
    },
    {
        path:"sign-up",
        component:SignUp,
        pathMatch:"full"
    },
     {
        path:"home",
        component:Home,
        pathMatch:"full"
    },
    {
        path: "chats",
        component: Chats,
        pathMatch: "full"
    },
    {
        path: "account",
        component: Account,
        pathMatch: "full"
    },
    {
        path: "notifications",
        component: Notifications,
        pathMatch: "full"
    }
];
