export default [
  {
    title: 'Dashboards',
    icon: { icon: 'tabler-smart-home' },
    children: [
      {
        title: 'Analytics',
        to: 'admin-analytics',
        action: 'read',
        subject: 'analytics',
      },
      {
        title: 'eCommerce',
        to: 'admin-ecommerce',
        action: 'read',
        subject: 'ecommerce',
      },
      {
        title: 'CRM',
        to: 'admin-crm',
        action: 'read',
        subject: 'crm',
      },
    ],
    //badgeContent: '2',
    badgeClass: 'bg-light-primary text-primary',
  },
]
