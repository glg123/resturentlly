export default [


  {
    title: 'FAQS',
    icon: { icon: 'tabler-server-2' },
    children: [
      {
        title: 'List',
        to: 'admin-apps-faqs-list' ,
        action: 'read',
        subject: 'faqs_list',
      },
      { title: 'AddNew',
        to: 'admin-apps-faqs-add-add_new',
        action: 'read',
        subject: 'faqs_add',
      },
    ],
  },

]
