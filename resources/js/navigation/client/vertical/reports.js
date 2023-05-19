export default [


  {
    title: 'Reports',
    icon: { icon: 'tabler-help' },
    children: [
      {
        title: 'List',
        to: 'dashboards-apps-admins-list',
        action: 'read',
        subject: 'rest_maneger',
      },
      { title: 'AddNew',
        to: 'dashboards-apps-admins-add-add_new' ,
        action: 'read',
        subject: 'rest_maneger',
      },
      {
        title: 'Chat',
        icon: { icon: 'tabler-message' },
        to: 'apps-chat',
        action: 'read',
        subject: 'rest_maneger',
      },
    ],
    badgeContent: '2',
    badgeClass: 'bg-light-primary text-primary',
  },

]
