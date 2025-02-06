import React from 'react';
import { Link } from 'react-router-dom';
import { Edit, Trash2, Eye } from 'lucide-react';
import type { User } from '../types/user';
import { cn } from '../lib/utils';

interface UserCardProps {
  user: User;
  onDelete: (id: number) => void;
  className?: string;
}

export function UserCard({ user, onDelete, className }: UserCardProps) {
  return (
    <div className={cn(
      "bg-white rounded-lg shadow-md overflow-hidden transition-all duration-200 hover:shadow-lg",
      className
    )}>
      <div className="p-6">
        <div className="flex items-center space-x-4">
          <img
            src={user.avatar}
            alt={`${user.first_name} ${user.last_name}`}
            className="w-16 h-16 rounded-full ring-2 ring-blue-100"
          />
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 truncate">
              {user.first_name} {user.last_name}
            </h3>
            <p className="text-sm text-gray-600 truncate">{user.email}</p>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end space-x-2">
          <Link
            to={`/users/${user.id}`}
            className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
            title="View Details"
          >
            <Eye className="w-5 h-5" />
          </Link>
          <Link
            to={`/users/edit/${user.id}`}
            className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors"
            title="Edit User"
          >
            <Edit className="w-5 h-5" />
          </Link>
          <button
            onClick={() => onDelete(user.id)}
            className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition-colors"
            title="Delete User"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}