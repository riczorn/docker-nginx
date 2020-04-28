/**
 *  Default configuration file, rename config.js to use
 */


const port = 8080;
module.exports = {
  port: port,
  clientId: "",
  clientSecret: "",
  redirectUri: `http://localhost:${port}/callback`,
  // list of scopes: https://lichess.org/api#section/Authentication
  scopes: [
    // 'preference:read',
     'challenge:read',
   ],


/* --- Lichess config --- */
 tokenHost : 'https://oauth.lichess.org',
 authorizePath : '/oauth/authorize',
 tokenPath : '/oauth',
};
