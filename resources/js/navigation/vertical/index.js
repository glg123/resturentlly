import dashboard from './dashboard'
import admins from "./admins"
import restaurants from "./restaurants"
import permissions from "./permission"
import plans from "./plans"
import users from "./users"
import clients from "./clients"
import cities from "./city"
import states from "./state"
import countries from "./country"
import user_subscribes from "./user_subscribes"
import faqs from "./faqs"

const userData = JSON.parse(localStorage.getItem('userData') || '{}')
const userRole = userData && userData.role ? userData.role : null
let menus=[]

  menus= [...dashboard, ...admins , ...permissions , ...restaurants , ...plans,  ...clients , ...user_subscribes, ...cities , ...states , ...countries, ...faqs ]

export default menus
