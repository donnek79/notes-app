const routes = (handler) => [
  {
    method: 'POST',
    path: '/users',
    handler: (request, h) => handler.postUserHandler(request, h),
  },
  {
    method: 'GET',
    path: '/users/{id}',
    handler: (request) => handler.getUserByIdHandler(request),
  },
  {
    method: 'GET',
    path: '/users',
    handler: (request, h) => handler.getUsersByUsernameHandler(request, h),
  },
];

module.exports = routes;
