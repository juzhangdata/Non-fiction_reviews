// sum function
function sum(key_name){
    var initialValue = 0;
    var sum = data.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue[key_name];
    },initialValue)
}

d3.json("//books.json", function(error, data) {

    var key_names_a = ["5_star_a",
    "4_star_a",
    "3_star_a",
    "2_star_a",
    "1_star_a"
    ]

    var key_names_g = [
    "5_star_g",
    "4_star_g",
    "3_star_g",
    "2_star_g",
    "1_star_g"
    ]

    var trace1 = {
        x:[5,4,3,2,1],
        y:key_names_a.map(d=>sum(d)),
        type:"bar"
        };
        
    var data = [trace1];
        
    var layout = {
        title: "'Bar' Chart"
        };
        
    Plotly.newPlot("plot1", data, layout);

});