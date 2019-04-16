import { volunteer } from './urls';

export default [
  {
    key:'volunteer.history',
    method:'get',
    url: (payload) => `${volunteer}scorehistory/${encodeURIComponent(payload.provinceCode)}`,
    loading: (state, action) => {
      const {payload, ...other} = action;
      console.log('-------------------------------------------')
      console.log(state,action)
      // delete other.type;
      // let newState = {...state.volunteer.history};
      // newState.payload = payload;
      // newState.success = false;
      // newState.loading = true;
      // newState = {...newState, ...other};
      // newState.result = [];
      // return newState;
    },
    success: (state, action) => {
    console.log('====================================')
      console.log(state,action)
    }
  }
]