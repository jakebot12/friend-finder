var friends = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

    app.post("/api/friends", function (req, res) {
        var compare = 100;
        var matchIndex = 0;

        for (var j = 0; j < friends.length; j++) {
            var sum = 0;
            for (var i = 0; i < 10; i++) {
                sum += Math.abs((friends[j].scores[i] - req.body.scores[i]));
            }

            if (sum < compare) {
                compare = sum;
                matchIndex = j;

            }

        }

        friends.push(req.body);

        res.json(friends[matchIndex]);
       


    });

  
};