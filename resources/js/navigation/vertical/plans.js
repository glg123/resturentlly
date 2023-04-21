export default [


  {
    title: 'Plans',
    icon: { icon: 'tabler-businessplan' },
    children: [
      {
        title: 'List',
        to: 'admin-apps-plans-list' ,
        action: 'read',
        subject: 'plans_list',
      },
      { title: 'AddNew',
        to: 'admin-apps-plans-add-add_new',
        action: 'read',
        subject: 'plans_add',
      },
    ],
  },

]
