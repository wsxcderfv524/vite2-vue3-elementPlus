export default {
    path: '/user',
    component: () => import('components/layout.vue'),
    children: [
        {
            path: '/',
            redirect: 'userList'
        },
        {
            path: 'userList',
            name: 'userList',
            component: () => import('views/user/user_list.vue'),
        },
       
    ]

}