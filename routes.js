const routes = [
  {
    method: "GET",
    path: "/hello/{name?}",
    handler: (request, h) => {
      const { name = "stranger" } = request.params;
      const { lang } = request.query; //query parameter
      if(lang === "id"){
        return `Hai, ${name}!`;
      }
       return `Hello, ${name}!`;
    },
  },
  {
    method: "*",
    path: "/",
    handler: (request, h) => {
      return "Halaman tidak dapat diakses dengan method tersebut";
    },
  },
  {
    method: "GET",
    path: "/about",
    handler: (request, h) => {
      return "About page";
    },
  },

  {
    method: "*",
    path: "/about",
    handler: (request, h) => {
      return "Halaman tidak dapat diakses dengan method";
    },
  },
  {
    method: "*",
    path: "/{any*}",
    handler: (request, h) => {
      return "Halaman tidak ditemukan";
    },
  },
];

// Detailed notation
const handlerDetailed = (request, h) => {
  const response = h.response('success');
  response.type('text/plain');
  response.header('X-Custom', 'some-value');
  return response;
};

// Chained notation
const handlerChained = (request, h) => {
  return h.response('success')
      .type('text/plain')
      .header('X-Custom', 'some-value');
};


module.exports = routes;
