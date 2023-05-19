export default [


  {
    title: 'Admins',
    icon: { icon: 'tabler-user-minus' },
    children: [
      {
        title: 'List',
        to: 'admin-apps-admins-list',
        action: 'read',
        subject: 'admins_list',
      },
      { title: 'AddNew',
        to: 'admin-apps-admins-add-add_new' ,
        action: 'read',
        subject: 'admins_add',
      },
    ],
  },

]
