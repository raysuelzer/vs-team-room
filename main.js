// Loads Electron specific app that is not commonly available for node or io.js
var app = require("app");
// Inter process communication -- Used to communicate from Main process (this)
// to the actual rendering process
var ipc = require("ipc");
// Loads the Electron specific module or browser handling
var BrowserWindow = require("browser-window");
// Report crashes to our server.
var crashReporter = require("crash-reporter");

// Read our happy tweets
// var readTwitter = require("./read-twitter");

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the javascript object is GCed.
var mainWindow = null;

// Quit when all windows are closed.
app.on("window-all-closed", function() {
    if (process.platform != "darwin") {
        app.quit();
    }
});

// This method will be called when Electron has done everything
// initialization and ready for creating browser windows.
app.on("ready", function() {
    crashReporter.start();

    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: "100%",
        height: "100%",
        menu: null
    });

    // and load the index.html of the app.
    mainWindow.loadUrl("file://" + __dirname + "/views/index.html");
    // Emitted when the window is closed.
    mainWindow.on("closed", function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });

    //readTwitter.read(mainWindow);
});
