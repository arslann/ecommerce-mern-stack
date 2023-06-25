'use client';
import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const instance = axios.create({
    baseURL: 'http://localhost:5000', // Update this URL
  });

  const login = async (email, password) => {
    try {
      const response = await instance.post('/api/auth', { email, password });
      console.log(response.data.token);
      setUser(response.data.user);
    } catch (error) {
      setError(error.response.data.errors);
    }
  };

  const register = async (email, password) => {
    try {
      const response = await instance.post('/api/users', { email, password });
      setUser(response.data.user);
    } catch (error) {
      setError(error.response.data.errors);
    }
  };

  const logout = async () => {
    try {
      await instance.post('/api/logout');
      setUser(null);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, error, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
