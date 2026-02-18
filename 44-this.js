console.info(this);

const person = {
    nama: "Richo",
    cursedTech: "PHP",
    say: function (nama) {
        // this = person;
        console.log(`Hi ${nama}, my name is ${this.nama}`);

    }
}

person.say("Anjay");