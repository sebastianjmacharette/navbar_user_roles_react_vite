import React, { useState, useEffect } from 'react';

const UserRoleDisplay = ({ user, role }) => {
  let roleText;
  if (role === 'ROLE_ADMIN') {
    roleText = 'ADMINISTRADOR';
  } else if (role === 'ROLE_MANAGER') {
    roleText = 'GERENCIA';
  } else if (role === 'ROLE_EMPLOYEE') {
    roleText = 'PERSONAL';
  } else {
    roleText = 'ROL DESCONOCIDO';
  }

  return (
    <span className="flex items-center uppercase text-sm font-medium text-gray-900 dark:text-white me-3">
      <span className="flex w-2.5 h-2.5 bg-green-500 rounded-full me-1.5 flex-shrink-0" />
      usuario: {user} {roleText}
    </span>
  );
};

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('username');
    const storedToken = localStorage.getItem('token');
    const storedRole = localStorage.getItem('role');

    if (storedUser) {
      setUser(storedUser);
    }

    if (storedToken) {
      setToken(storedToken);
    }

    if (storedRole) {
      setRole(storedRole);
    }
  }, []);

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
          </a>
          <div className="flex items-center mr-10 space-x-6 rtl:space-x-reverse">
            {user && role && <UserRoleDisplay user={user} role={role} />}
            <a href="#" className="text-sm text-blue-600 dark:text-blue-500 hover:underline">Login</a>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <a href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="text-gray-900 dark:text-white hover:underline">Company</a>
              </li>
              <li>
                <a href="#" className="text-gray-900 dark:text-white hover:underline">Team</a>
              </li>
              <li>
                <a href="#" className="text-gray-900 dark:text-white hover:underline">Features</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
