const userData = JSON.parse(localStorage.getItem('userData') || 'null')
let array=[]

// eslint-disable-next-line sonarjs/no-all-duplicated-branches
if(userData.can_add_bran)
{
  array=[
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
  array=[
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
    children: array,
    badgeContent: userData.id,
    badgeClass: 'bg-light-primary text-primary',
  },

]
