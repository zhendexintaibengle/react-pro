import IndexPage from '../pages/indexpage/Index';

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
  }
];

export default routeConfig;