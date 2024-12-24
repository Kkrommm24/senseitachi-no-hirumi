import { t } from 'i18next';
import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const DropdownSearch = ({ data, setData, removeData, previousSelectedData }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(previousSelectedData || []);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredData = data.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectData = (item) => {
    if (!selectedData.includes(item)) {
      setSelectedData([...selectedData, item]);
      setData(item); // Call the setData function with the selected item
    }
    setSearchTerm('');
    setIsDropdownOpen(false);
  };

  const removeSelectedData = (index) => {
    setSelectedData(selectedData.filter((_, i) => i !== index));
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setIsDropdownOpen(true);
        }}
        onClick={() => setIsDropdownOpen(true)}
        placeholder={t('typing')}
        className="w-full p-2 border rounded"
      />

      {isDropdownOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
          {filteredData.map((item) => (
            <div
              key={item}
              onClick={() => handleSelectData(item)}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-2 mt-2">
        {selectedData.map((item, index) => (
          <div
            key={index}
            className="flex items-center bg-gray-100 rounded-full px-3 py-1"
          >
            <span>{item}</span>
            <button
              type="button"
              onClick={() => {
                removeSelectedData(selectedData.indexOf(item));
                removeData(item); // Call the removeData function with the selected item
              }}
              className="ml-2 text-red-500"
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownSearch;
