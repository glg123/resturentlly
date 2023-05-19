import dashboard from './dashboard'
import staffs from "./staffs"
import categories from "./categories"
import sub_categories from "./sub_categories"
import permission from "./permission"
import floors from "./floors"
import materials from "./materials"
import meals from "./meals"
import tables from "./tables"
import bookings from "./bookings"
import cashiers from "./cashiers"
import cooker from "./cooker"
import clients from "./clients"
import promotions from "./promotions"

const userData = JSON.parse(localStorage.getItem('userData') || '{}')
const userRole = userData && userData.role ? userData.role : null
let menus=[]

  menus= [...dashboard, ...staffs , ...permission , ...categories , ...sub_categories,  ...floors , ...materials, ...meals , ...tables , ...bookings, ...cashiers,...cooker,...clients,...promotions ]

export default menus
