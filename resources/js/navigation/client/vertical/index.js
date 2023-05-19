import dashboard from './dashboard'
import branches from './branches'
import staffs from './staffs'
import reports from './reports'
import subscribe from './subscribe'


let menus=[]


menus=  [...subscribe,...dashboard,...branches,...staffs,...reports]

export default menus
