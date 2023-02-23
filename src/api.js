import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID q2rv8_hPEv1JH79Ibn6L2BcvYDEcia7roFITbQsGKno'
    },
    params: {
      query: term,
    }
  });
  return response.data.results;
}

export default searchImages;