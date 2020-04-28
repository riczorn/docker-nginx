/**
 * Riccardo Zorn
 * code@fasterweb.net
 *
 * Bring together some snippets to make injecting scripts into the page
 * just a bit harder
 * references: https://davidwalsh.name/disable-console

 */


/**
 * this is Facebook's idea to disable the console.
 */
// (function() {
//     try {
//       console.log('ahe');
//         var $_console$$ = console;
//         Object.defineProperty(window, "console", {
//             get: function() {
//                 if ($_console$$._commandLineAPI)
//                     throw "Sorry, for security reasons, the script console is deactivated on this page";
//                 return $_console$$
//             },
//             set: function($val$$) {
//                 $_console$$ = $val$$
//             }
//         })
//     } catch ($ignore$$) {
//     }
// })();

Object.defineProperty(window, "console", {
    value: console,
    writable: false,
    configurable: false
});

var i = 0;
function showWarningAndThrow() {
    if (!i) {
        setTimeout(function () {
            console.log("%cWarning message", "font: 2em sans-serif; color: yellow; background-color: red;");
        }, 1);
        i = 1;
    }
    throw "Console is disabled";
}

var l, n = {
        set: function (o) {
            l = o;
        },
        get: function () {
            showWarningAndThrow();
            return l;
        }
    };
Object.defineProperty(console, "_commandLineAPI", n);
Object.defineProperty(console, "__commandLineAPI", n);
