import React from "react";
import ReactDOM from "react-dom";

// Step 2 - Including the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Step 3 - Including the fusioncharts library
import FusionCharts from "fusioncharts";

// Step 4 - Including the map renderer
import FusionMaps from "fusioncharts/fusioncharts.maps";

// Step 5 - Including the map definition file
import World from "fusioncharts/maps/fusioncharts.world";

// Step 6 - Including the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Step 7 - Adding the map as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, FusionMaps, World, FusionTheme);

// Step 8 - Creating the JSON object to store the map configurations
const chartConfigs = {
  type: "world",
  width: "800",
  height: "550",
  dataFormat: "json",
  dataSource: {
    // Map Configuration
    chart: {
      caption: "Porcentaje Anual de Crecimiento Poblacional",
      subcaption: " 1955-2015",
      numbersuffix: "%",
      includevalueinlabels: "1",
      labelsepchar: ": ",
      entityFillHoverColor: "#FFF9C4",
      theme: "fusion"
    },
    // Aesthetics; ranges synced with the slider
    colorrange: {
      minvalue: "0",
      code: "#FFE0B2",
      gradient: "1",
      color: [
        {
          minvalue: "0.5",
          maxvalue: "1.0",
          color: "#FFD74D"
        },
        {
          minvalue: "1.0",
          maxvalue: "2.0",
          color: "#FB8C00"
        },
        {
          minvalue: "2.0",
          maxvalue: "3.0",
          color: "#E65100"
        }
      ]
    },
    // Source data as JSON --> id represents countries of world.
    data: [
      {
        id: "NA",
        value: ".82",
        showLabel: "1"
      },
      {
        id: "SA",
        value: "2.04",
        showLabel: "1"
      },
      {
        id: "AS",
        value: "1.78",
        showLabel: "1"
      },
      {
        id: "EU",
        value: ".40",
        showLabel: "1"
      },
      {
        id: "AF",
        value: "2.58",
        showLabel: "1"
      },
      {
        id: "AU",
        value: "1.30",
        showLabel: "1"
      }
    ]
  }
};
// Step 8 - Creating the DOM element to pass the react-fusioncharts component
class Map extends React.Component {
  render() {
    return <ReactFC {...chartConfigs} />;
  }
}

export default Map;
