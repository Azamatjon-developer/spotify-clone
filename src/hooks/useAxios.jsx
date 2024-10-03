import axios from 'axios'

export const useAxios = () =>
  axios.create({
    baseURL: 'https://spotify-clone-plum-psi-67.vercel.app/',
  })


  