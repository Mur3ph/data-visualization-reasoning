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

    var svgContainer = d3.select("#positioning").append("svg")
        .attr("width", 200)
        .attr("height", 200);

    var circles = svgContainer.selectAll("circle")
        .data(spaceCircles)
        .enter()
        .append("circle");

    var circleAttributes = circles
        .attr("cx", function (d) { return d; })
        .attr("cy", function (d) { return d; })
        .attr("r", 20)
        .style("fill", function (d) {
            var returnColor;
            if (d === 30) {
                returnColor = "green";
            } else if (d === 70) {
                returnColor = "purple";
            } else if (d === 110) { returnColor = "red"; }
            return returnColor;
        });
}