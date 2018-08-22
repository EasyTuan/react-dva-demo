import Request from '@/utils/request';

export const demo = params => Request({
  url: '路径',
  method: 'POST',
  data: params,
});
