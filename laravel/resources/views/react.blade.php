<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

        <!-- Styles -->
        <style>
            html, body {
                background-color: #aac;
                color: black;
                font-family: 'Roboto', sans-serif;
                font-weight: 400;
                margin: 20px 10% 0 10%;
            }
            .MuiTextField-root{
                margin:10px;
            }
            a{
                font-weight:bold;
                text-decoration:none;
                color:#204A87;
            }
            a:hover{
                color:#0B264E;

            }

        </style>
    </head>
    <body>
        <div id="root"></div>
    </body>
    <script src="{{ asset('js/app.js') }}"></script>
</html>
