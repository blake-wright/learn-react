import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
      Authorization: 'Client-ID qIytKUR6sOKbYeKzTbhW5HWJs8OzCs0AuYBiGH23-So'
    }
})