import instance from './interceptor';

// TODO: 나중에 api 요청 추가해주세요!

function testAPI() {
  return instance.get('/');
}

export { testAPI };
