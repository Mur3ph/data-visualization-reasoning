function animation() {
    let sampleSVG = d3.select("#viz")
        .append("svg")
        .attr("width", 100)
        .attr("height", 100);

    sampleSVG.append("circle")
        .style("stroke", "gray")
        .style("fill", "white")
        .attr("r", 40)
        .attr("cx", 50)
        .attr("cy", 50)
        .on("mouseover", function () { d3.select(this).style("fill", "black"); }) // aliceblue
        .on("mouseout", function () { d3.select(this).style("fill", "white"); })
        .on("mousedown", animateFirstStep);

    function animate() {
        d3.select(this).transition()
            .duration(1000)
            .attr("r", 10)
            .transition()
            .delay(1000)
            .attr("r", 40);
    };

    function animateFirstStep() {
        d3.select(this)
            .transition()
            .delay(0)
            .duration(1000)
            .attr("r", 10)
            .each("end", animateSecondStep);
    };

    function animateSecondStep() {
        d3.select(this)
            .transition()
            .duration(1000)
            .attr("r", 40);
    };
};

function clickButton() {
    d3.select('#btn')
        .on('click', function () {
            d3.select('body')
                .append('h3')
                .text('Today is a beautiful day!!');
        });
}