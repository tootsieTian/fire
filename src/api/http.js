import axios from 'axios'
axios.create({
    timeout: 1000 * 12
});
axios.defaults.crossDomain=true

// let http = {
//     fire: function(){
//         axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//         return axios
//     },
//     dingding: function () {
//         axios.defaults.headers.post['Content-Type'] = 'application/json';
//         axios.defaults.headers.post['EngineCode']= 'vqbijamln279p4wndsu94sfi4'
//         axios.defaults.headers.post['EngineSecret'] = 'ufIAGJVwICvO3Fy1o2pB4k+k7DrPTIIMX2TFGoFxyOKmzRDc9B3kfw=='
//         return axios
//     }
// }
// export default http

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
export default axios
