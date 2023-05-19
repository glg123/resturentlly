export default [
  {
    title: 'Dashboards',
    icon: { icon: 'tabler-smart-home' },
    children: [
      {
        title: 'Analytics',
        to: 'staff-analytics',
        action: 'read',
        subject: 'rest_maneger',
      },
      {
        title: 'eCommerce',
        to: 'staff-ecommerce',
        action: 'read',
        subject: 'rest_maneger',
      },
      {
        title: 'CRM',
        to: 'staff-crm',
        action: 'read',
        subject: 'rest_maneger',
      },
    ],
    //badgeContent: '2',
    badgeClass: 'bg-light-primary text-primary',
  },
]
