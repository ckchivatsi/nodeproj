//Handling multiple requests
function placeAnOrder(orderNum) {
    console.log("Customer order: ", orderNum);
    cookAndDeliverFood(function () {
        console.log("Delivered food order: ", orderNum);
    });
}

//Simulate a 5sec process
function cookAndDeliverFood(callback) {
    setTimeout(callback, 5000);
}

//simulate user requests
placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6);
placeAnOrder(7);
placeAnOrder(8);
placeAnOrder(9);
placeAnOrder(10);