import UserCache from '@caches/UserCache';
import { message } from 'antd';

export const onEffect = async (action, res) => {
  try {
    const body = await res.json();
    action.status = res.status;
    action.loading = false;
    if (body.status === 401) {
      action.result = body.content;
      return action;
    } else if (action.url.startsWith('/api/')) {
      action.message = body.message;
      action.success = res.status === 200;
      if (Object.prototype.hasOwnProperty.call(body, 'success')) {
        action.success = action.success && body.success;
        if (!body.success) {
          action.error = body.errorMsg;
        }
      }
      action.result = body.content;
      return action;
    }
  } catch (err) {
    message.error(err.message);
    action.success = false;
    action.error = '服务端异常';
  }
  return action;
};

export const onFetchOption = (option, item) => {
  if (item.key !== 'user.login') {
    if (UserCache.user) {
      option.headers = option.headers || {};
      option.headers.userId = UserCache.user.userId;
      option.headers[ 'Access-Token' ] = UserCache.user.userId;
    }
  }
  return option;
};
