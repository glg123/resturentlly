export default [


  {
    title: 'Materials',
    icon: { icon: 'tabler-check' },
    children: [
      {
        title: 'List',
        to: 'staff-apps-materials-list' ,
        action: 'read',
        subject: 'rest_maneger',
      },
      { title: 'AddNew',
        to: 'staff-apps-materials-add-add_new',
        action: 'read',
        subject: 'rest_maneger',
      },
    ],
  },

]
