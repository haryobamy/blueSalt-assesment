import { DashboardIcon } from '@/components/icons';
import {
  HourglassIcon,
  ListCheckIcon,
  Settings,
  Shield,
  User,
} from 'lucide-react';

export const Navlinks1 = [
  {
    label: 'Dashboard',
    url: '',
    icon: DashboardIcon,
  },
  {
    label: 'Request',
    url: '',
    icon: HourglassIcon,
  },
];
export const Navlinks2 = [
  {
    label: 'KYC',
    url: '',
    icon: DashboardIcon,
  },
  {
    label: 'Reports',
    url: '',
    icon: DashboardIcon,
  },
  {
    label: 'Tasks',
    url: '',
    icon: ListCheckIcon,
  },
];

export const Navlinks3 = [
  {
    label: 'AuditTrail',
    url: '',
    icon: DashboardIcon,
  },
  {
    label: 'Customers',
    url: '',
    icon: User,
  },
];
export const Navlinks4 = [
  {
    label: 'Users',
    url: '',
    icon: DashboardIcon,
  },
  {
    label: 'Settings',
    url: '',
    icon: Settings,
  },
  {
    label: 'Administration',
    url: '',
    icon: Shield,
  },
];

export const dashboardData = [
  {
    label: 'Requests',
    value: '7,265',
    percentage: 11.02,
    bg: '!bg-[#E5ECF6]',
  },
  {
    label: 'KYC',
    value: '3,671',
    percentage: -0.03,
    bg: '!bg-[#E5ECF6]',
  },
  {
    label: 'Tasks',
    value: '156',
    percentage: 15.03,
    bg: '!bg-[#E3F5FF]',
  },
  {
    label: 'Customers',
    value: '2,318',
    percentage: 6.08,
    bg: '!bg-[#E5ECF6]',
  },
];

export const trafficData = [
  {
    label: 'Google',
    value: 5,
  },
  {
    label: 'YouTube',
    value: 2,
  },
  {
    label: 'Instagram',
    value: 2,
  },
  {
    label: 'Facebook',
    value: 2,
  },
  {
    label: 'Twitter',
    value: 2,
  },
];
