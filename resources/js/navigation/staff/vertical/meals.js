export default [


  {
    title: 'Meals',
    icon: { icon: 'tabler-check' },
    children: [
      {
        title: 'List',
        to: 'staff-apps-meals-list' ,
        action: 'read',
        subject: 'rest_maneger',
      },
      { title: 'AddNew',
        to: 'staff-apps-meals-add-add_new',
        action: 'read',
        subject: 'rest_maneger',
      },
    ],
  },

]
