/**
 * @version     1
 * @package     SwissLichess
 * @copyright   Copyright (C) 2020 Riccardo Zorn. All rights reserved.
 * @license     Commercial
 * @author      Riccardo Zorn <code@fasterjoomla.com> - https://fasterweb.net
 */
'use strict';

const express = require('express');
const path = require('path');
const simpleOauth = require('simple-oauth2');
const axios = require('axios');

const config = require('./config');

/* Create your lichess OAuth app on https://lichess.org/account/oauth/app/create
 * Homepage URL: http://localhost:8080
 * Callback URL: http://localhost:8080/callback

 App registered: Swiss Quattropedoni
 Client ID
 Client Secret
 */

class SwissLichess {
  constructor(app) {
    this.app = app;
  }
  initialise() {
    this.authorise();
    this.setupLichessRouting();


  }
  authorise() {
    this.oauth2 = simpleOauth.create({
      client: {
        id: config.clientId,
        secret: config.clientSecret,
      },
      auth: {
        tokenHost:config.tokenHost,
        tokenPath:config.tokenPath,
        authorizePath:config.authorizePath,
      },
    });

  }

  async setupLichessRouting() {
    // Initial page redirecting to Lichess
    this.app.get('/auth', (req, res) => {
      const state = Math.random().toString(36).substring(2);
      const authorizationUri = `${config.tokenHost}${config.authorizePath}?response_type=code&client_id=${config.clientId}&redirect_uri=${config.redirectUri}&scope=${config.scopes.join('%20')}&state=${state}`;
      console.log('Redirect to ', authorizationUri);
      res.redirect(authorizationUri);
    });


    // Redirect URI: parse the authorization token and ask for the access token
    this.app.get('/callback', async (req, res) => {
      console.log('callback');
      try {
        const result = await this.oauth2.authorizationCode.getToken({
          code: req.query.code,
          redirect_uri: config.redirectUri
        });
        console.log(result);
        const token = this.oauth2.accessToken.create(result);
        const userInfo = await getUserInfo(token.token);
        res.send(`<h1>Success!</h1>Your lichess user info: <pre>${JSON.stringify(userInfo.data)}</pre>`);
      } catch(error) {
        console.error('Access Token Error', error.message);
        res.status(500).json('Authentication failed');
      }
    });

    this.app.get('/api', function (req, res) {
      res.send('1.0')
    })

    this.app.use(express.static(path.join(__dirname, '../www')));

    this.app.listen(config.port, () => console.log(`Express server started on port ${config.port}`));

  }

}

module.exports = SwissLichess;
