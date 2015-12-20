cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.synconset.imagepicker/www/imagepicker.js",
        "id": "com.synconset.imagepicker.ImagePicker",
        "pluginId": "com.synconset.imagepicker",
        "clobbers": [
            "plugins.imagePicker"
        ]
    },
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.0",
    "com.synconset.imagepicker": "1.0.7",
    "cordova-plugin-statusbar": "2.0.1-dev",
    "cordova-plugin-inappbrowser": "1.1.1"
}
// BOTTOM OF METADATA
});