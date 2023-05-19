export default [


  {
    title: 'Staffs',
    icon: { icon: 'tabler-user-minus' },
    children: [
      {
        title: 'List',
        to: 'dashboards-apps-admins-list',
        action: 'read',
        subject: 'rest_maneger',
      },
      { title: 'AddNew',
        to: 'dashboards-apps-admins-add-add_new' ,
        action: 'read',
        subject: 'rest_maneger',
      },
    ],
    badgeContent: '2',
    badgeClass: 'bg-light-primary text-primary',
  },

]
