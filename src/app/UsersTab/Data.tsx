// Kullanıcı türünü tanımlıyoruz
export type User = {
  id: number;
  name: string;
  email: string;
  role: 'Admin' | 'Project Manager' | 'Developer' | 'Pending Admin' | 'Designer';
  status: 'Active' | 'Suspended' | 'Pending';
  lastLogin: string;
  avatar: string;
};

// Örnek kullanıcı verileri
export const userData: User[] = [  {
    id: 1,
    name: 'John Smith',
    email: 'john.smith@example.com',
    role: 'Admin',
    status: 'Active',
    lastLogin: '2 days ago',
    avatar: '/images/abc.png',
  },  {
    id: 2,
    name: 'Emma Johnson',
    email: 'emma.johnson@example.com',
    role: 'Project Manager',
    status: 'Suspended',
    lastLogin: 'Feb 15, 2024',
    avatar: '/images/abc.png',
  },  {
    id: 3,
    name: 'James Williams',
    email: 'james.williams@example.com',
    role: 'Developer',
    status: 'Pending',
    lastLogin: 'Mar 10, 2024',
    avatar: '/images/abc.png',
  },
  {
    id: 4,
    name: 'Olivia Brown',
    email: 'olivia.brown@example.com',
    role: 'Pending Admin',
    status: 'Pending',
    lastLogin: 'Nov 23, 2023',
    avatar: '/images/abc.png',
  },{
    id: 5,
    name: 'Michael Davis',
    email: 'michael.davis@example.com',
    role: 'Developer',
    status: 'Active',
    lastLogin: 'Today',
    avatar: '/images/abc.png',
  },
  {
    id: 6,
    name: 'Sophia Miller',
    email: 'sophia.miller@example.com',
    role: 'Designer',
    status: 'Active',
    lastLogin: 'Yesterday',
    avatar: '/images/abc.png',
  },
  {
    id: 7,
    name: 'Daniel Wilson',
    email: 'daniel.wilson@example.com',
    role: 'Project Manager',
    status: 'Suspended',
    lastLogin: 'Apr 5, 2024',
    avatar: '/images/abc.png',
  },
  {
    id: 8,
    name: 'Isabella Moore',
    email: 'isabella.moore@example.com',
    role: 'Developer',
    status: 'Active',
    lastLogin: '3 days ago',
    avatar: '/images/abc.png',
  }
];
