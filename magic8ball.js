//Magic 8-ball

function app() {
    greeting("Duaa", "Tariq", "Will I get a Tech Job?");

    const random_number = get_random_number();

    magic_eight_ball(random_number);
    //console.log(`The answer to your question is ${random_number %2== 0 ? 'Yes' : 'No'}`);
}

function greeting(first_name, last_name, question) {
    console.log("Welcome to this magic eight ball application");

    const full_name = `${first_name} ${last_name}`;

//console.log("Hello my name is " + first_name + " " + last_name + " and my question is " + question);
//console.log(`Hello my name is ${first_name} ${last_name} and my question is: ${question}`);
console.log(`Hello my name is ${full_name} and my question is:\n ${question.toUpperCase()}`);
}

function get_random_number () {
    const random_number = Math.ceil(Math.random() * 8); //range 1-8
    return random_number;
}

function magic_eight_ball (number_result) {

    switch (number_result) {
        case 1:
            console.log("Yea");
            break;
        case 2:
            console.log("YES!");
            break;
        case 3:
            console.log("OF COURSE");
            break;
        case 4:
            console.log("You will if you try");
            break;
        case 5:
            console.log("One day...");
            break;
        case 6:
            console.log("Soon");
            break;
        case 7:
            console.log("Most Likely");
            break;
        case 8:
            console.log("Idk. Try again");
            break;
        default:
            console.log("Not a valid case, please use a number between 1 and 8");
            break;
    }
}

app();