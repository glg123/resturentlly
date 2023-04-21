export default [


  {
    title: 'Countries',
    icon: { icon: 'tabler-code' },
    children: [
      {
        title: 'List',
        to: 'admin-apps-country-list' ,
        action: 'read',
        subject: 'countries_list',
      },
      { title: 'AddNew',
        to: 'admin-apps-country-add-add_new',
        action: 'read',
        subject: 'countries_add',
      },
    ],
  },

]
