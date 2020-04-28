author: riccardo@fasterjoomla.com

Purpose: manage swiss tournaments on lichess
         with a direct connection to vega / vesus

Requirements

    Node server
    Yarn

See also
  lichess4545.com


Auth
    Each player needs to authorise (with a token) the server
    https://lichess.org/api#section/Authentication

    https://lichess.org/api#operation/challengeCreate
    https://github.com/shinsaku417/lichesstv-embedder
    
        permissions required:
            challenge:write
            optional: bot:play, board:play
