import { getModels } from 'utils/requests';

export async function model(categoryName, context, typeName) {
  const data = await getModels(categoryName);
  const model = data[0].subcategories
    .reduce((acc, item) => {
      const category = item.title;
      const types = item.types
        .map((item) => {
          return {
            category,
            line: item.line,
            general_description: item.description,
            models: item.models,
            name: item.name,
          };
        })
        .filter((item) => item.name === typeName);
      acc.push(...types);
      return acc;
    }, [])
    .reduce((acc, item) => {
      if (item.models.length !== 0) {
        let product = null;
        let available_models = [];
        for (const model of item.models) {
          const title = model.model;
          const subtitle = model.label;
          available_models.push({ title, subtitle });
        }
        for (const model of item.models) {
          product = {
            category: item.category,
            line: item.line,
            general_description: item.general_description,
            ...model,
            available_models,
          };
          acc.push(product);
        }
      }
      return acc;
    }, [])
    .find((item) => item.model === context.params.model);
  return model;
}

export async function modelsPaths(categoryName, typeName) {
  const data = await getModels(categoryName);
  const models = data[0].subcategories
    .reduce((acc, item) => {
      const category = item.title;
      const types = item.types
        .map((item) => {
          return {
            category,
            line: item.line,
            general_description: item.description,
            models: item.models,
            name: item.name,
          };
        })
        .filter((item) => item.name === typeName);
      acc.push(...types);
      return acc;
    }, [])
    .reduce((acc, item) => {
      if (item.models.length !== 0) {
        let product = null;
        let available_models = [];
        for (const model of item.models) {
          const title = model.model;
          const subtitle = model.label;
          available_models.push({ title, subtitle });
        }
        for (const model of item.models) {
          product = {
            category: item.category,
            line: item.line,
            general_description: item.general_description,
            ...model,
            available_models,
          };
          acc.push(product);
        }
      }
      return acc;
    }, []);
  const paths = models.map((item) => {
    return {
      params: { model: item.model },
    };
  });
  return paths;
}
