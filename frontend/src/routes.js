
import HomePage from '@/components/page/HomePage.vue'
import EmployeeAdd from '@/components/page/EmployeeAddPage.vue'
import EmployeeList from '@/components/page/EmployeeListPage.vue'

export const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/employee/add',
    name: 'EmployeeAdd',
    component: EmployeeAdd

  },
  {
    path: '/employee/list',
    name: 'EmployeeList',
    component: EmployeeList

  }

]

