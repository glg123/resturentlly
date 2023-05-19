export default [


  {
    title: 'Tables',
    icon: { icon: 'tabler-check' },
    children: [
      {
        title: 'List',
        to: 'staff-apps-tables-list' ,
        action: 'read',
        subject: 'rest_maneger',
      },
      { title: 'AddNew',
        to: 'staff-apps-tables-add-add_new',
        action: 'read',
        subject: 'rest_maneger',
      },
    ],
  },

]
