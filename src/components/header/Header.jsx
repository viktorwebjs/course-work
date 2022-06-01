import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  {
    id: 1,
    path: 'Main',
    title: 'Main',
  },
  {
    id: 2,
    path: 'Contact',
    title: 'Contact',
  },
  {
    id: 3,
    path: 'Blog',
    title: 'Blog',
  },
  {
    id: 4,
    path: 'AboutUs',
    title: 'About As',
  },
];

export default function Header() {
  return (
    <>
      <div className="wrapper">
        {links.map((i) => (
          <>
            <Link key={i.id} to={`${i.path}`} className="links">
              {i.title}
            </Link>
          </>
        ))}
      </div>
    </>
  );
}
