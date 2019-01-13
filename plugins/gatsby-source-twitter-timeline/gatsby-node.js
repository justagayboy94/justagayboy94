var Twitter = require("twitter");

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions;

  // Gatsby adds a configOption that's not needed for this plugin, delete it
  delete configOptions.plugins;

  var client = new Twitter(configOptions.credentials);

  return new Promise((resolve, reject) => {
    client.get(
      "statuses/user_timeline",
      Object.assign({}, configOptions.request_options || {}, {
        trim_user: true,
        exclude_replies: true,
        count: 200,
        tweet_mode: "extended"
      }),
      function(error, tweets, response) {
        if (error) {
          return reject(error);
        }

        resolve(tweets);
      }
    );
  }).then(tweets => {
    tweets.forEach(tweet => {
      const nodeId = createNodeId(`twitter-timeline-tweet-${tweet.id}`);
      const nodeContent = JSON.stringify(tweet);
      const nodeData = Object.assign({}, tweet, {
        id: nodeId,
        parent: null,
        children: [],
        internal: {
          type: `TwitterTimelineTweet`,
          content: nodeContent,
          contentDigest: createContentDigest(tweet)
        }
      });

      createNode(nodeData);
    });
  });
};
