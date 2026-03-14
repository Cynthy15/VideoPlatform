import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { categories } from '../utils/constants';

const Sidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const activeCategory = pathname.startsWith('/search/')
    ? decodeURIComponent(pathname.replace('/search/', ''))
    : 'Home';

  const handleClick = (category) => {
    if (category === 'Home') {
      navigate('/');
    } else {
      navigate(`/search/${encodeURIComponent(category)}`);
    }
  };

  return (
    <nav className="sidebar" aria-label="Main navigation">
      {categories.map((category) => (
        <button
          key={category.name}
          className={activeCategory === category.name ? 'active' : ''}
          onClick={() => handleClick(category.name)}
          type="button"
        >
          <span className="icon">{category.icon}</span>
          <span className="label">{category.name}</span>
        </button>
      ))}
    </nav>
  );
};

export default Sidebar;

