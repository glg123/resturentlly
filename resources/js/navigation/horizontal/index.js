import dashboard from './dashboard'
import admins from "./admins"

const userData = JSON.parse(localStorage.getItem('userData') || '{}')
const userRole = userData && userData.role ? userData.role : null
let menus=[]

if (userRole !== 'admin') {

  menus=  [...dashboard]
} else {

  menus= [...dashboard, ...admins]
}
export default menus
