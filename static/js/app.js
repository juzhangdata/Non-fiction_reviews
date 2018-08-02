// sum function
function count(data,key){
    var sum = data.map(d => d[key]).reduce((acc, current) => current + acc);
    return sum / data.length
}

var url = "https://raw.githubusercontent.com/juzhangdata/Non-fiction_reviews/master/books.json"

d3.csv(url).then(function(data){

    console.log(data)

    var keys_a = ["5_star_a",
    "4_star_a",
    "3_star_a",
    "2_star_a",
    "1_star_a"
    ]

    var keys_g = [
    "5_star_g",
    "4_star_g",
    "3_star_g",
    "2_star_g",
    "1_star_g"
    ]

    var trace1 = {
        x:[5,4,3,2,1],
        y: keys_g.map(x => count(data,x)),
        type:"bar"
        };
        
    var data = [trace1];
        
    var layout = {
        title: "'Bar' Chart"
        };
        
    Plotly.newPlot("plot1", data, layout);

});