export default [


  {
    title: 'Categories',
    icon: { icon: 'tabler-check' },
    children: [
      {
        title: 'List',
        to: 'staff-apps-categories-list' ,
        action: 'read',
        subject: 'rest_maneger',
      },
      { title: 'AddNew',
        to: 'staff-apps-categories-add-add_new',
        action: 'read',
        subject: 'rest_maneger',
      },
    ],
  },

]
