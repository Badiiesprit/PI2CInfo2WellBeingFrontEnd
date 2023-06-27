import { INavData } from '@coreui/angular';
export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' }
  },
  {
    name: 'Center',
    url: '/admin/center',
    children: [
      {
        name: 'Liste',
        url: '/admin/center'
      },
      {
        name: 'Ajouter',
        url: '/admin/center/add'
      }
    ] ,
    iconComponent: { name: 'cil-cursor' }
  },
  {
    name: 'Category',
    url: '/admin/category',
    children: [
      {
        name: 'Liste',
        url: '/admin/category'
      },
      {
        name: 'Ajouter',
        url: '/admin/category/add'
      }
    ],
    iconComponent: { name: 'cil-calculator' }
  },
  {
    name: 'Service',
    url: '/service',
    iconComponent: { name: 'cil-drop' },

    children: [
      {
        name: 'lister',
        url: '/service/lister',

      },

    ],
  },
 
];