
function createGraph() {
    var numbers = [5, 4, 10, 1];
        data = [
            { date: '2014-01-01', amount: 10 },
            { date: '2014-02-01', amount: 20 },
            { date: '2014-03-01', amount: 40 },
            { date: '2014-04-01', amount: 80 }
        ];

    d3.min(numbers);
    // 1

    d3.max(data, function (d, i) { return d.amount });
    // 80
    d3.extent(numbers);
    // [1, 10]

    var y = d3.scaleLinear()
        .domain([0, 80]) // $0 to $80
        .range([200, 0]); // Seems backwards because SVG is y-down

    y.domain(d3.extent(data, function (d) { return d.amount }));

    y(0);   // in: $0
    // 200  // out: 200px (bottom of graph)
    y(80);  // in: $80
    // 0    // out: 0px (top of graph)

    var x = d3.scaleTime()
        .domain([
            new Date(Date.parse('2014-01-01')),
            new Date(Date.parse('2014-04-01'))
        ])
        .range([0, 300]);

    x(new Date(Date.parse('2014-02-01')));
    // 103.3811949976841

    // x is the d3.scaleTime()
    var xAxis = d3.axisBottom(x)
        .ticks(4); // specify the number of ticks

    var svg = d3.select("body")
        .append('svg')        // create an <svg> element
        .attr('width', 300) // set its dimentions
        .attr('height', 150);

    svg.append('g')            // create a <g> element
        .attr('class', 'x axis') // specify classes
        .call(xAxis);            // let the axis do its thing
};