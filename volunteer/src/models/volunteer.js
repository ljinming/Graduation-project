import { volunteer } from './urls';

export default [
  {
    key:'volunteer.history',
    method:'post',
    url: () => `${volunteer}scorehistory/query`,
  }
]