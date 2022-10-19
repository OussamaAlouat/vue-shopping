import axios from 'axios';
/* eslint-disable import/prefer-default-export */
export const getAllProducts = () => axios.get(' http://localhost:3000/grocery');
