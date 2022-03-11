const cutURL = function (router, fromEnd) {
  return router.pathname.split("/").slice(0, fromEnd).join("/");
};

export default cutURL;
