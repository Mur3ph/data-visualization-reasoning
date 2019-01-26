function createCircle() {
    var bodySelection = d3.select("#circle");

    var svgSelection = bodySelection.append("svg")
        .attr("width", 50)
        .attr("height", 50);

    var circleSelection = svgSelection.append("circle")
        .attr("cx", 25)
        .attr("cy", 25)
        .attr("r", 25)
        .style("fill", "purple");
};


function createSquare() {
    //Make an SVG Container
    var svgContainer = d3.select("#square").append("svg")
        .attr("width", 200)
        .attr("height", 200);

    //Draw the Rectangle
    var rectangle = svgContainer.append("rect")
        .attr("x", 10)
        .attr("y", 10)
        .attr("width", 50)
        .attr("height", 100);
};


function positioningCirclesWithSVG() {
    var spaceCircles = [30, 70, 110];

    var scores = [
        {
            "name": "Andy",
            "score": 30
        },
        {
            "name": "Beth",
            "score": 70
        },
        {
            "name": "Evelyn",
            "score": 110
        }
    ]

    var svgContainer = d3
        .select("#positioning")
        .append("svg")
        .attr("width", 800)
        .attr("height", 800);

    var elem = svgContainer.selectAll("g")
        .data(scores);

    var elemEnter = elem
        .enter()
        .append("g")
        .attr("transform", function (d) { return "translate(" + d.score + ",80)" })

    var circles = elemEnter
        .selectAll("circle")
        .data(scores)
        .enter()
        .append("circle");

    var text = elemEnter
        .selectAll("text")
        .data(scores)
        .enter()
        .append("text");

    var circleAttributes = circles
        .attr("cx", function (d) { return d.score; })
        .attr("cy", function (d) { return d.score; })
        .attr("r", 20)
        .style("fill", function (d) {
            var returnColor;
            if (d.score === 30) {
                returnColor = "green";
            } else if (d.score === 70) {
                returnColor = "purple";
            } else if (d.score === 110) { returnColor = "red"; }
            return returnColor;
        });

    var textAttributes = text
        .text(function (d) { return d.name; })
        // .attr("cx", function (d) { return d.score; })
        // .attr("cy", function (d) { return d.score; })
        .style('text-anchor', 'middle');
}

