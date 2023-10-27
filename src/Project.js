class Project {
    constructor (newName, newLink, newInfo, newThumbnailLink) {
        this.name = newName
        this.link = newLink
        this.info = newInfo
        this.thumbnailLink = newThumbnailLink
    }

    toString () {
        let result = `<div><a href="${this.link}"`
        result += `<img src="${this.thumbnailLink}>"`
        result += `<h2>${this.name}</h2>`
        result += `<p>${this.info}</p></a></div>`
    }
}
