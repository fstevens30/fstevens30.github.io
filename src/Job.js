class Job {
    constructor (newCompany, newRole, newDateRange) {
        this.company = newCompany
        this.role = newRole
        this.dateRange = newDateRange
    }
    
    toString () {
        let result = `<div><span>${this.role}</span>`
        result += `\n<h2>${this.company}</h2>`
        result += `\n<h3>${this.dateRange}</h3></div>`
        return result
    }
}