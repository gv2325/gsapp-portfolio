const {DeckGL, ScatterplotLayer} = deck;

const MALE_COLOR = [0, 128, 255];
const FEMALE_COLOR = [255, 0, 128];

new DeckGL({
  mapStyle: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
  initialViewState: {
    longitude: -74,
    latitude: 40.76,
    zoom: 11,
    maxZoom: 16
  },
  controller: true,
  layers: [
    new ScatterplotLayer({
      id: 'scatter-plot',
      data: 'https://raw.githubusercontent.com/uber-common/deck.gl-data/master/examples/scatterplot/manhattan.json',
      radiusScale: 10,
      radiusMinPixels: 0.5,
      getPosition: d => [d[0], d[1], 0],
      getColor: d => (d[2] === 1 ? MALE_COLOR : FEMALE_COLOR)
    })
  ]
});
