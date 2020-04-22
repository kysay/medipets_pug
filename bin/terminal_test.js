var cmd = require("node-cmd");

var deployKey = [
    "bundle exec cap dmall1-vlok deploy",
    "bundle exec cap dmall2_ootdshop deploy"
]
// deployKey.forEach(function (item) {
    cmd.get(
        // "#{item}"
        `pwd`
        , function (error, success, stderr) {
            if (error) {
                console.log("ERROR 발생 :\n\n", error);
            } else {
                console.log("SUCCESS :\n\n", success);
            }
        }
    );
// });
