const userData = JSON.parse(localStorage.getItem('userData') || 'null')
let children=[]
if(userData.can_add_bran)
{
  children: [
    {
      title: 'List',
      to: 'dashboards-apps-branches-list',
      action: 'read',
      subject: 'rest_maneger',
    },
    { title: 'AddNew',
      to: 'dashboards-apps-branches-add-add_new' ,
      action: 'read',
      subject: 'rest_maneger',
    },
  ]
}
else
{
  children: [
    {
      title: 'List',
      to: 'dashboards-apps-branches-list',
      action: 'read',
      subject: 'rest_maneger',
    },

  ]
}
export default [


  {
    title: 'Branches',
    icon: { icon: 'tabler-user-minus' },
    children: children,
    badgeContent: userData.id,
    badgeClass: 'bg-light-primary text-primary',
  },

]
