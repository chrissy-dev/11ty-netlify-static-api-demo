const EleventyFetch = require("@11ty/eleventy-fetch");
const {
    XMLParser
} = require("fast-xml-parser");

module.exports = async function () {
    let url = "https://oku.club/rss/collection/2xR5y";

    return EleventyFetch(url)
        .then(res => {
            const parser = new XMLParser();
            let feedAsJson = parser.parse(res);
            return feedAsJson;
        })
        .then(json => {
            return JSON.stringify(json.rss.channel.item);
        });
};