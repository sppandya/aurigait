/**
 * @jsx React.DOM
 */

/**
 *
 * It uses `<NoteApp/>` to render the app on the server. You can create isomorphic apps by rendering React on both Server
 * and Client.
 */

var React = require('react');
var MainApp=require('./components/MainApp.jsx');

var Application = React.createClass({
    render: function() {
        return (
            <html>
                <head lang="en">
                    <base href="/"/>
                    <meta charSet="utf-8"/>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <title>React with Reflux Note app</title>
                    <link href="css/bootstrap.css" rel="stylesheet"/>
                    <link href="css/app.css" rel="stylesheet"/>
                </head>
                <body>
                    <MainApp/>
                    <script type="text/javascript" src="/js/compiler.server/bundle.js"></script>
                    <script src="js/bootstrap.js"></script>
                </body>
            </html>
        )
    }
});


module.exports=Application;
