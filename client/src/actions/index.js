import axios from 'axios';
import {
  SEND_CONTACT,
  FETCH_PROJECTS
 } from './types';

export const sendMail = values => async dispatch => {
  const res = await axios.post('/api/contact/send', values);
  dispatch({ type: SEND_CONTACT });
}

export const fetchProjects = () => async dispatch => {
  const res = await axios.post('/api/projects');
  dispatch({ type: FETCH_PROJECTS, payload: res.data });
}
