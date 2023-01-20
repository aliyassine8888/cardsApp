import axios from 'axios';

const cardService = {
  getAll: async () => {
    let res = await axios.get(`/api/cards`);
    return res.data || [];
  },
  add: async ({ name, pan, limit }) => {
    let res = await axios.post(`/api/card/`, {
      headers: {
        'Content-Type': 'application/json'
      }, name, pan, limit
    })
    return res.data || {};
  },
  edit: async ({ name, pan, limit, balance, id }) => {
    let res = await axios.put(`/api/card/`, {
      headers: {
        'Content-Type': 'application/json'
      }, name, pan, limit, balance, id })
    return res.data || {};
  },
  delete: async (id) => {
    let res = await axios.delete(`/api/card/${id}`);
    return res.data || [];
  }
};

export default cardService;