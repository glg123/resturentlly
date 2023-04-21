export default [


  {
    title: 'Cities',
    icon: { icon: 'tabler-armchair' },
    children: [
      {
        title: 'List',
        to: 'admin-apps-cities-list' ,
        action: 'read',
        subject: 'cities_list',
      },
      { title: 'AddNew',
        to: 'admin-apps-cities-add-add_new',
        action: 'read',
        subject: 'cities_add',
      },
    ],
  },

]
