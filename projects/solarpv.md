---
layout: project
title: "Solar Potential with Lidar Data"
author: Mapping
year: 2023
image: /img/solarpv_coverimage.png
links:
    -
      text: Project Website
      url: https://gsapp-cdp.github.io/archive/projects/colocate/
---
Solar PV Potential Mapping Using LiDAR Data
================

This project aims to map the solar PV potential of New York City using LiDAR data. The project is a collaboration between the Center for Spatial Research and the Center for Design Practice at Columbia GSAPP. The project is funded by the New York State Energy Research and Development Authority (NYSERDA) and the New York City Mayor’s Office of Sustainability (MOS).

The project is part of the NYC Solar Partnership, a joint initiative between NYSERDA and MOS to accelerate solar adoption in New York City. The project will provide a tool for the City to identify and prioritize solar PV installations on public buildings and properties. The project will also provide a tool for the City to identify and prioritize solar PV installations on private buildings and properties.

![Mapping Solar PV](/img/solarpv_coverimage.png)

Above is the PV map clipped and masked to each individual building. 
The lidar data was used as a high resolution source of elevation information, which allowed for more accurate analysis. 

The above was processed for over 179 tiles of LAS Data from NYC Open Data Repo. Using ArcGIS Model Builder and some ArcPy programming we were able to automate the process and produce a web client side reporting tool

![Lidar Data Hillshade](/img/solarpv_hillshade.png)

Above is the Hillshade analysis to generate the triangulation model for 3D analysis.

Use cases:

Local Law 97 - Offset fees and cost for buildings by identifying solar or green roof opportunities.
DAC abd FNMTCZs have additional benefits. 
