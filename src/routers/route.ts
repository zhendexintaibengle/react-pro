import IndexPage from '../pages/indexpage/Index';
import UserTableList from '../pages/userList/UserTableList';

type RouteList = { path: string, component: any, indexRoute?: object, childRoutes?: Array<any> };



const routeConfig: Array<RouteList> = [
  {
    path: '/',
    component: IndexPage,
    // indexRoute: { component: IndexPage },
    // childRoutes: [
    //   { path: 'about', component: About },
    //   {
    //     path: 'inbox',
    //     component: Inbox,
    //     childRoutes: [
    //       { path: '/messages/:id', component: Message },
    //       {
    //         path: 'messages/:id',
    //         onEnter: function (nextState, replaceState) {
    //           replaceState(null, '/messages/' + nextState.params.id)
    //         }
    //       }
    //     ]
    //   }
    // ]
  },
  {
    path: '/userlist',
    component: UserTableList,
  }
];

export default routeConfig;