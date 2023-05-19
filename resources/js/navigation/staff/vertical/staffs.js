export default [


  {
    title: 'Staffs',
    icon: { icon: 'tabler-user-minus' },
    children: [
      {
        title: 'List',
        to: 'staff-apps-staffs-list',
        action: 'read',
        subject: 'rest_maneger',
      },
      { title: 'AddNew',
        to: 'staff-apps-staffs-add-add_new' ,
        action: 'read',
        subject: 'rest_maneger',
      },
    ],
  },

]
