// Your code here!
// how to put this code into a function




function myFunction() {

    var cat = new Date()

    document.body.innerHTML = "<h1> The Date is " + cat + "</h1>"

    document.body.innerHTML = "<h1> The Date is " +

        (cat.getMonth() + 1) + " / " +

        cat.getDate() + " / " +

        cat.getFullYear() + " </h1> "


}

