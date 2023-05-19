export default [


  {
    title: 'Clients',
    icon: { icon: 'tabler-check' },
    children: [
      {
        title: 'List',
        to: 'staff-apps-clients-list' ,
        action: 'read',
        subject: 'rest_maneger',
      },
      { title: 'AddNew',
        to: 'staff-apps-clients-add-add_new',
        action: 'read',
        subject: 'rest_maneger',
      },
    ],
  },

]
