// next.config.js
const withCSS = require('@zeit/next-css')

const summaryJSON = require('./content/_posts/summary.json')

module.exports = withCSS({
    webpack: function (config) {
        config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000,
                    name: '[name].[ext]',
                    outputPath: 'static/',
                    publicPath: '/_next/static',
                }
            }
        })
        return config
    },
    exportPathMap: function () {
        const posts = Object.keys(summaryJSON.fileMap).reduce((obj, key) => {
            const post = summaryJSON.fileMap[key];
            obj[`/post/${post.url}`] = {
                page: '/post',
                query: {
                    p: post.url
                }
            }
            return obj
        }, {}) 
        return {
            '/': { page: '/' },
            '/blog': { page: '/blog' },
            '/about': { page: '/about' },
            ...posts
        }
    }
})