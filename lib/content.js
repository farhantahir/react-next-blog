import summaryJson from '../content/_posts/summary.json'

const sortByDate = (a, b) => {
    const aDate = Date.parse(a.date)
    const bDate = Date.parse(b.date)
    return (bDate > aDate) ? 1 : (bDate < aDate) ? -1 : 0
}

export function getPosts() {
    return summaryJson && summaryJson.fileMap && Object.keys(summaryJson.fileMap)
        .filter((file) => file.indexOf('content/_posts') === 0)
        .map(file => summaryJson.fileMap[file])
        .sort(sortByDate)
}

export function getLatestsPosts(limit = 5) {
    return summaryJson && summaryJson.fileMap && Object.keys(summaryJson.fileMap)
        .filter((file) => file.indexOf('content/_posts') === 0)
        .map(file => summaryJson.fileMap[file])
        .sort(sortByDate)
        .slice(0, limit)
}