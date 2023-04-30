// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

const CatFetch = () => axios.get('https://api.thecatapi.com/v1/images/search');

export default CatFetch;
