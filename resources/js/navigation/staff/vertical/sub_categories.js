export default [


  {
    title: 'SubCategories',
    icon: { icon: 'tabler-check' },
    children: [
      {
        title: 'List',
        to: 'staff-apps-sub_categories-list' ,
        action: 'read',
        subject: 'rest_maneger',
      },
      { title: 'AddNew',
        to: 'staff-apps-sub_categories-add-add_new',
        action: 'read',
        subject: 'rest_maneger',
      },
    ],
  },

]
