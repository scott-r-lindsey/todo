<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #aac;
                color: black;
                font-family: 'Nunito', sans-serif;
                font-weight: 200;
                margin: 10%;
            }
            .MuiTextField-root{
                margin:10px;
            }

        </style>
    </head>
    <body>
        <div id="root"></div>
    </body>
    <script src="{{ asset('js/app.js') }}"></script>
</html>
