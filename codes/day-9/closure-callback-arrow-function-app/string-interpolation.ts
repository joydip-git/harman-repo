const sampleObject = {
    name: 'sunil',
    id: 1,
    salary: 2000,
    print: function () {
        // const info =
        //     "Name: " + this.name
        //     + "Id: " + this.id
        //     + "Salary: " + this.salary

        const info = `
            Name: ${this.name}
            Id:${this.id}
            Salary:${this.salary}
        `
        console.log(info)
    }
}

sampleObject.print()

