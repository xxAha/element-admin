import Vue from 'vue'
import {
  Message,
  Form,
  FormItem,
  Button,
  Menu,
  MenuItem,
  MenuItemGroup,
  Submenu,
  Container,
  Aside,
  Header,
  Breadcrumb,
  BreadcrumbItem,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Avatar,
  Main,
  Input

} from 'element-ui'

Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Button)
Vue.use(Avatar)
Vue.use(Main)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(BreadcrumbItem)
Vue.use(Breadcrumb)
Vue.use(Header)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.prototype.$message = Message
