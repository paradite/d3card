function displayMaterial(data) {
  var container = d3.select('.main-container-material')
    .style('margin', '0 auto')
    .style('width', '70%')
    .append('div')
    .classed('material-wrapper', true);

  var cards = container
    .selectAll('div.mdl-card')
    .data(data)
    .enter()
    .append('div')
    .classed('mdl-card mdl-shadow--4dp', true);

  // image
  cards.append('div')
    .classed('mdl-card__media', true)
    .append('img')
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

  // name
  cards.append('div')
    .classed('mdl-card__title', true)
    .append('h2')
    .classed('mdl-card__title-text', true)
    .text(function(d) {
      return d.name;
    });

  // positions
  cards.selectAll('div.pos')
    .data(function(d) {
      return d.pos;
    })
    .enter()
    .append('div')
    .classed('mdl-card__supporting-text', true)
    .style('padding', '10px 16px')
    .text(function(d) {
      return d;
    });
}

function displayBootstrap(data) {
  var container = d3.select('.main-container-bootstrap')
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
  blocks.selectAll('p.pos')
    .data(function(d) {
      return d.pos;
    })
    .enter()
    .append('p')
    .classed('pos', true)
    .text(function(d) {
      return d;
    });

  d3.select('#change-font-init')
    .on('click', function() {
      d3.selectAll('h4')
        .style('font-size', 'initial');
    });

  d3.select('#change-font-big')
    .on('click', function() {
      d3.selectAll('h4')
        .style('font-size', '1.5rem');
    });
}

function handleData(err, data) {
  if (err) {
    console.log(err);
    return;
  }
  displayBootstrap(data);
  displayMaterial(data);
}

document.addEventListener('DOMContentLoaded', function(event) {
  d3.json('data.json')
    .get(handleData);
});
