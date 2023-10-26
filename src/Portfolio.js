class Portfolio {
    constructor (newFullName, newBio) {
        this.fullName = newFullName
        this.bio = newBio
        this.jobs = []
        this.skills = []
        this.projects = []
    }

    toString () {
        let result = `<h1>${this.fullName}</h1>`
        result += `<p>${this.bio}</p>`
        return result
    }

    addJob (name, company, dateRange) {
        this.jobs.push(new Job(name, company, dateRange))
    }
}