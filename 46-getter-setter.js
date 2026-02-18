const person = {
    name: "Richo",
    hobby: "Gaming",
    isProgrammer: true,

    get fullInfo() {
        return `${this.name} - ${this.hobby} - ${this.isProgrammer}`;
    },
    set fullInfo(value) {
        const arr = value.split(" ");
        this.name = arr[0];
        this.hobby = arr[1];
        this.isProgrammer = arr[2] === "true";
    }
}

person.fullInfo = "Richo Anjay true"
console.log(person.name);
console.log(person.hobby);
console.log(person.isProgrammer);



