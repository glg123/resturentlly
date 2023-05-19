export default [


  {
    title: 'Promotions',
    icon: { icon: 'tabler-check' },
    children: [
      {
        title: 'List',
        to: 'staff-apps-promotions-list' ,
        action: 'read',
        subject: 'rest_maneger',
      },
      { title: 'AddNew',
        to: 'staff-apps-promotions-add-add_new',
        action: 'read',
        subject: 'rest_maneger',
      },
    ],
  },

]
