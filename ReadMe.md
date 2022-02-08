# DesktopJS
DesktopJS library is a library for building windows and manage them...

# How To Use
If you want to use this library, You should import(include) {Desktop.js and Desktop.css} from this repository...
Such this:

```html
<html>
<head>
    <link rel="stylesheet" href="./Desktop.css" />
    <meta charset="UTF-8">
    <title>DesktopJS example</title>
    <script src="./Desktop.js" charset="utf-8"></script>
</head>
<body></body>
</html>
```

And in your JS file Such this:

```javascript
let desktop = new DesktopJS({theme: "light" , dir: "ltr"});
desktop.newWindow({properties: {resizable: "both"} , content: "<h1>Hello World!</h1>"});
```

Congratulations!!!
You uses DesktopJS...
