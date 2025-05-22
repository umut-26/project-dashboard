'use client';

import React from 'react';
import Image from 'next/image';
import { User } from '@/app/UsersTab/Data';
import { MoreVertical } from 'lucide-react';

interface UserTableProps {
  users: User[];
  searchQuery: string;
}

export default function UserTable({ users, searchQuery }: UserTableProps) {
  // Durum renkleri için stil eşleşmeleri
  const statusStyles: Record<string, string> = {
    Active: 'bg-green-100 text-green-800',
    Suspended: 'bg-blue-100 text-blue-800',
    Pending: 'bg-yellow-100 text-yellow-800'
  };
  // Arama sorgusu ile filtreleme
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.role.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="overflow-x-auto overflow-y-auto" style={{ maxHeight: 'calc(100vh - 16rem)' }}> {/* Ekran yüksekliğine göre ayarlanan scroll */}
      <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-gray-50 sticky top-0 z-10">
          <tr>
            <th scope="col" className="p-4 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th scope="col" className="p-4 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
              Email
            </th>
            <th scope="col" className="p-4 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
              Role
            </th>
            <th scope="col" className="p-4 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th scope="col" className="p-4 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
              Last Login
            </th>
            <th scope="col" className="relative p-4 sm:px-6 sm:py-3">
              <span className="sr-only">Actions</span>
            </th>          
            </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredUsers.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="p-3 sm:p-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10 rounded-full overflow-hidden">
                    {/* Next/Image kullanarak optimize edilmiş resim */}
                    <Image 
                      className="object-cover" 
                      src={"/images/abc.png"} 
                      alt={user.name} 
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <div className="text-xs sm:text-sm font-medium text-gray-900">{user.name}</div>
                  </div>
                </div>
              </td>
              <td className="p-3 sm:p-4 whitespace-nowrap hidden md:table-cell">
                <div className="text-xs sm:text-sm text-gray-500">{user.email}</div>
              </td>
              <td className="p-3 sm:p-4 whitespace-nowrap">
                <div className="text-xs sm:text-sm text-gray-900">{user.role}</div>
              </td>
              <td className="p-3 sm:p-4 whitespace-nowrap">
                <span className={`px-2 py-1 text-xs leading-4 font-semibold rounded-full ${statusStyles[user.status]}`}>
                  {user.status}
                </span>
              </td>
              <td className="p-3 sm:p-4 whitespace-nowrap text-xs sm:text-sm text-gray-500 hidden lg:table-cell">
                {user.lastLogin}
              </td>
              <td className="p-3 sm:p-4 whitespace-nowrap text-right text-xs sm:text-sm font-medium">
                <button className="text-gray-400 hover:text-gray-500 transition-colors">
                  <MoreVertical size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}