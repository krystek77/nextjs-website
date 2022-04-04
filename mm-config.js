const CONNECTION_URL = `mongodb+srv://krystian:krystian123456@pralma.fdnne.mongodb.net/2022_pralma?retryWrites=true&w=majority`;
/*
 * Free cluster do not work. Someone said. It is work with mongodb 3.4 url
 */
module.exports = {
  url: CONNECTION_URL,
  databaseName: '2022_pralma',

  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },

  directory: 'migrations',
  collection: 'parameters',
};
