export default [


  {
    title: 'Bookings',
    icon: { icon: 'tabler-check' },
    children: [
      {
        title: 'List',
        to: 'staff-apps-bookings-list' ,
        action: 'read',
        subject: 'rest_maneger',
      },
      { title: 'AddNew',
        to: 'staff-apps-bookings-add-add_new',
        action: 'read',
        subject: 'rest_maneger',
      },
    ],
  },

]
