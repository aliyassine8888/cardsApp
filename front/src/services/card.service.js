import axios from 'axios';


// // Add a response interceptor
// axios.interceptors.response.use(function (response) {
//   // Do something with response data
//   return response;
// }, function (error) {
//   // Do something with response error
//   return Promise.reject(error);
// });


const cardService = {
  getAll: async () => {
    let res = await axios.get(`/api/cards`);
    return res.data || [];
  },
  add: async ({ name, pan, limit }) => {
      let res = null;
      try{
       res = await axios.post(`/api/card/`, {
        headers: {
          'Content-Type': 'application/json'
        }, name, pan, limit
      })

    }
    catch (error) {
      return { exception: true, message: `${error.message} ${error.response.data.error.details[0].message}` };
    }
    return res.data || {};
  },
  edit: async ({ name, pan, limit, balance, id }) => {
    let res = await axios.put(`/api/card/`, {
      headers: {
        'Content-Type': 'application/json'
      }, name, pan, limit, balance, id
    })
    return res.data || {};
  },
  delete: async (id) => {
    let res = await axios.delete(`/api/card/${id}`);
    return res.data || [];
  }
};

export default cardService;