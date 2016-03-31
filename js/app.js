function handleData(err, data) {
  if (err) {
    console.log(err);
    return;
  }
  var container = d3.select('.main-container')
    .append('div')
    .classed('card-deck-wrapper', true)
    .style('width', '70%')
    .style('margin', '0 auto')
    .append('div')
    .classed('card-deck', true);

  var cards = container
    .selectAll('div.card')
    .data(data)
    .enter()
    .append('div')
    .classed('card', true);

  // image
  cards.append('img')
    .classed('card-img-top', true)
    .attr('data-src', function(d) {
      return d.pic;
    })
    .attr('src', function(d) {
      return d.pic;
    })
    .attr('alt', function(d) {
      return d.name;
    })
    .style('width', '100%');

  // text blocks
  var blocks = cards.append('div')
    .classed('card-block', true);

  // name
  blocks.append('h4')
    .classed('card-title', true)
    .text(function(d) {
      return d.name;
    });

  // positions
  var positions = blocks.selectAll('p.pos')
    .data(function(d) {
      return d.pos;
    })
    .enter()
    .append('p')
    .classed('pos', true)
    .text(function(d) {
      return d;
    });
}

document.addEventListener('DOMContentLoaded', function(event) {
  d3.json('data.json')
    .get(handleData);
});
