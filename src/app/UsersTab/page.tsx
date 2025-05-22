'use client';

import React, { useState } from 'react';
import UserSearch from '@/components/users/UserSearch';
import UserTable from '@/components/users/UserTable';
import { userData } from './Data';

export default function Page() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="p-4">
      <div className="mb-6">
        <h1 className="text-lg font-bold text-gray-800 mb-2">Users</h1>
        <hr className="border-gray-400 mb-3" />
      </div>      
      <div className="bg-white rounded-md shadow-sm p-4 mb-4">
        <div className="flex justify-end mb-4">
          <UserSearch onSearch={handleSearch} />
        </div>
        
        <UserTable users={userData} searchQuery={searchQuery} />      </div>
    </div>
  );
}