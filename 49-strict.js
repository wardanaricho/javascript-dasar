function useStrictMode() {
    'use strict';
    const person = {
        firstName: "Richo",
        lastName: "Wardana"
    }
    with (person) {
        console.log(firstName);
        console.log(lastName);
    }
}

useStrictMode();
