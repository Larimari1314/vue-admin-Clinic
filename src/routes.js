import Login from './views/Login.vue'
// import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import PatientInformationManagement from './views/nav1/PatientInformationManagement.vue'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
import DrugManagement from './views/nav3/DrugManagement.vue'
import DepartmentManagement from './views/nav2/DepartmentManagement.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'
import echarts from './views/charts/echarts.vue'
import DoctorInformationManagement from "./views/nav2/DoctorInformationManagement";
import DepartmentDoctorList from "./views/nav2/DepartmentDoctorList.vue";
import NotFound from "./views/error.vue";

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },{
        path: '/',
        component: Home,
        name: '',
        hidden: true,
        children: [
        { path: '/DepartmentDoctorList', component: DepartmentDoctorList }]

    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '患者管理',
        iconCls: 'fa fa-users',//图标样式class
        children: [
            { path: '/main', component: Main, name: '主页', hidden: true },
            { path: '/PatientInformationManagement', component: PatientInformationManagement, name: '患者信息管理' },
            { path: '/form', component: Form, name: 'Form' },
            { path: '/user', component: user, name: '列表' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '诊所员工管理',
        iconCls: 'fa fa-user-md',
        children: [
            { path: '/DoctorInformationManagement', component: DoctorInformationManagement, name: '医生信息管理'},
            { path: '/DepartmentManagement', component: DepartmentManagement, name: '科室管理' },
            { path: '/page5', component: Page5, name: '页面5' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '诊所信息管理',
        iconCls: 'fa fa-hospital-o',
        children: [
            { path: '/DrugManagement', component: DrugManagement, name: '药品管理' },
            { path: '/page6', component: Page6, name: '导航三' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'Charts',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: '/echarts', component: echarts, name: 'echarts' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;