export default [


  {
    title: 'Permissions',
    icon: { icon: 'tabler-check' },
    children: [
      {
        title: 'List',
        to: 'admin-apps-permission-list' ,
        action: 'read',
        subject: 'permissions_list',
      },
      { title: 'AddNew',
        to: 'admin-apps-permission-add-add_new',
        action: 'read',
        subject: 'permissions_add',
      },
    ],
  },

]
