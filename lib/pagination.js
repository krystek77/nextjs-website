export function pagination(data, context, limit = 6) {
  const page = context.params?.page ? Number(context.params.page) : 1;
  const pageNumber = Math.ceil(data.length / limit);
  const dataPerPage = data.slice(limit * (page - 1), limit * page);
  return {
    items: dataPerPage,
    pageNumber: pageNumber,
    page: page,
  };
}

export function paginationPaths(data, limit = 6) {
  const pageNumber = Math.ceil(data.length / limit);
  const paths = Array.from({ length: pageNumber }).map((_, index) => {
    return {
      params: { page: (index + 1).toString() },
    };
  });
  return paths;
}
