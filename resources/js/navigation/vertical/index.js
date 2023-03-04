import dashboard from './dashboard'
import admins from "./admins"
import restaurants from "./restaurants"
import plans from "./plans"
import users from "./users"
import user_subscribes from "./user_subscribes"
const userData = JSON.parse(localStorage.getItem('userData') || '{}')
const userRole = userData && userData.role ? userData.role : null
let menus=[]

if (userRole !== 'admin') {

  menus=  [...dashboard]
} else {

  menus= [...dashboard, ...admins , ...restaurants , ...plans, ...users , ...user_subscribes]
}
export default menus
