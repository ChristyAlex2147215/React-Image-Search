import axios from 'axios';
import { apikey } from './credentials';

const SearchImages = async (searchKey = 'bee') => {
  try {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      headers: {
        Authorization: 'Client-ID'+" "+apikey
      },
      params: {
        query: searchKey,
        per_page:200
      }
    });

    if (response.data.results && response.data.results.length > 0) {
      const imageUrls = response.data.results.map((result) => result.urls.regular);
      return imageUrls;
    } else {
      throw new Error('No images found.');
    }
  } catch (err) {
    console.error(err);
    throw new Error('An error occurred while getting the images.');
  }
};

export default SearchImages;
