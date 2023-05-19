export default [


  {
    title: 'SmartDevices',
    icon: { icon: 'tabler-check' },
    children: [
      {
        title: 'List',
        to: 'staff-apps-smart_devices-list' ,
        action: 'read',
        subject: 'rest_maneger',
      },
      { title: 'AddNew',
        to: 'staff-apps-smart_devices-add-add_new',
        action: 'read',
        subject: 'rest_maneger',
      },
    ],
  },

]
