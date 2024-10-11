import React, { useState } from 'react';
import { Card } from '../types';

interface CardFormProps {
  onSubmit: (card: Card) => void;
  onCancel: () => void;
}

const CardForm: React.FC<CardFormProps> = ({ onSubmit, onCancel }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tag, setTag] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, description, tag, link });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-6">
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">标题</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">描述</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="tag" className="block text-sm font-medium text-gray-700 mb-1">标签</label>
        <input
          type="text"
          id="tag"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="link" className="block text-sm font-medium text-gray-700 mb-1">链接</label>
        <input
          type="url"
          id="link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          取消
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          添加卡片
        </button>
      </div>
    </form>
  );
};

export default CardForm;