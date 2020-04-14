var cmd = require("node-cmd");

var deployKey = [
    // "bundle exec cap dmall1-vlok deploy",
    // "bundle exec cap dmall2_ootdshop deploy"
    "clear",
    "clear"
]
deployKey.forEach(function (item) {
    cmd.get(
        "#{item}"
        , function (error, success, stderr) {
            if (error) {
                console.log("ERROR 발생 :\n\n", error);
            } else {
                console.log(item + "SUCCESS :\n\n", success);
            }
        }
    );
});
