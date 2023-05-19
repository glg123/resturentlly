export default [


  {
    title: 'Permissions',
    icon: { icon: 'tabler-check' },
    children: [
      {
        title: 'List',
        to: 'staff-apps-permission-list' ,
        action: 'read',
        subject: 'rest_maneger',
      },
      { title: 'AddNew',
        to: 'staff-apps-permission-add-add_new',
        action: 'read',
        subject: 'rest_maneger',
      },
    ],
  },

]
