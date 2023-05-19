export default [


  {
    title: 'Floors',
    icon: { icon: 'tabler-check' },
    children: [
      {
        title: 'List',
        to: 'staff-apps-floors-list' ,
        action: 'read',
        subject: 'rest_maneger',
      },
      { title: 'AddNew',
        to: 'staff-apps-floors-add-add_new',
        action: 'read',
        subject: 'rest_maneger',
      },
    ],
  },

]
