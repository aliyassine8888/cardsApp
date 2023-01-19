import axios from 'axios';

const cardService = {
  getAll: async () => {
    let res = await axios.get(`/api/cards`);
    return res.data || [];
  },
  add: async (name, lastName) => {
    let res = await axios.post(`/api/card/`, { name, lastName })
    return res.data || {};
  },
  edit: async (name, lastName, id) => {
    let res = await axios.put(`/api/card/`, { name, lastName, id })
    return res.data || {};
  },
  delete: async (id) => {
    let res = await axios.delete(`/api/card/${id}`);
    return res.data || [];   
  }
};

export default cardService;