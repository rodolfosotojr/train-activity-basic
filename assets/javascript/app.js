// 1. Initialize Firebase
var config = {
    apiKey: "AIzaSyDz665Gxyc5-4V_SXltXK5coJvS1FVY7Fc",
    authDomain: "train-activity-8fe87.firebaseapp.com",
    databaseURL: "https://train-activity-8fe87.firebaseio.com",
    projectId: "train-activity-8fe87",
    storageBucket: "train-activity-8fe87.appspot.com",
    messagingSenderId: "609828577065"
};
firebase.initializeApp(config);

var database = firebase.database();


// 2. Use button for adding to the current schedule - then update the html + update the database
$("#btn").on("click", function (event) {
    event.preventDefault();

    //create variable to call in my object later

    var trainName = $("#formTrainName").val().trim();
    var trainDestination = $("#formDestination").val().trim();
    var trainTime = $("#formTrainTime").val().trim();
    var trainFrequency = $("#formFrequency").val().trim();

    //object with key value pairs. this will be called later to append to the page
    var newTrain = {

        name: trainName,
        destination: trainDestination,
        time: trainTime,
        frequency: trainFrequency
    }

    //Add general ref and push methods that add information of "newTrain" to the firebase server
    database.ref().push(newTrain);

    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.time);
    console.log(newTrain.frequency);

    alert("You have added your new train to the schedule");

    //Have the form values clear once the new train is added by using the val method and passing an empty string

    $("#formTrainName").val("")
    $("#formDestination").val("")
    $("#formTrainTime").val("")
    $("#formFrequency").val("")

});

