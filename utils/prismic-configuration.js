module.exports = {
  // -- Prismic API endpoint
  // Determines which repository to query and fetch data from
  // Configure your site's access point here
  apiEndpoint: 'https://lucassilveira.prismic.io/api/v2',

  // -- Access Token if the repository is not public
  // Generate a token in your dashboard and configure it here if your repository is private
  accessToken: process.env.REACT_APP_PRISMIC_TOKEN,
  // Cliente Secret: 9c59be56c3a73b03728ff4e844f490da
  // Client ID: YXWD2hQAACYASItt
  // Token: MC5ZWFdEMmhRQUFDY0FTSXR1.YHvvv73vv71E77-977-9RB7vv70pTB7vv71DQC7vv70t77-9Kn3vv710Y0nvv73vv73vv73vv70H77-9

  // -- Link resolution rules
  // Manages links to internal Prismic documents
  // Modify as your project grows to handle any new routes you've made
  linkResolver: function (doc) {
    if (doc.type === 'page') {
      return `/${doc.lang}/${doc.uid}`
    }
    if (doc.type === 'homepage') {
      return `/${doc.lang}`
    }
    return '/'
  },

  // Additional helper function for Next/Link component
  hrefResolver: function (doc) {
    if (doc.type === 'page') {
      return `/${doc.lang}/${doc.uid}`
    }
    if (doc.type === 'homepage') {
      return `/${doc.lang}`
    }
    return '/'
  },
}
