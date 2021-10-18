"use strict"

function make_book(id, filenames, start) {
    if (start === undefined) {
        start = 0
    }
    let container = d3.select("#"+id)
    let thumbs = container.append("div")
    let display = container.append("div")
    let big = display.append("img")
        .classed("big", true)
        .attr("src", "images/" + filenames[start])
    let images = thumbs.selectAll("img")
        .data(filenames)
        .join("img")
            .classed("thumb", true)
            .classed("selected", (d, i) => i === start)
            .attr("src", d => "thumbs/" + d)
            .on("click", function(event, d) {
                big.attr("src", "images/" + d)
                images.classed("selected", false)
                d3.select(this).classed("selected", true)
            })
}
