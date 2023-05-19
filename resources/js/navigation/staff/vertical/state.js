export default [


  {
    title: 'States',
    icon: { icon: 'tabler-circle' },
    children: [
      {
        title: 'List',
        to: 'admin-apps-states-list' ,
        action: 'read',
        subject: 'states_list',
      },
      { title: 'AddNew',
        to: 'admin-apps-states-add-add_new',
        action: 'read',
        subject: 'states_add',
      },
    ],
  },

]
