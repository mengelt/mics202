import React from "react";
import styled from "@emotion/styled";
import GoogleMapReact, { Maps } from "google-map-react";

import { CardContent, Card as MuiCard, Typography } from "@mui/material";
import { spacing } from "@mui/system";

const Card = styled(MuiCard)(spacing);

const Spacer = styled.div(spacing);

const GoogleMapReactWrapper = styled.div`
  height: 300px;
  width: 100%;
`;

function Default() {
  const options = {
    center: {
      lat: 40.712784,
      lng: -74.005941,
    },
    zoom: 14,
  };

  const getMapOptions = (maps: Maps) => {
    return {
      fullscreenControl: true,
      mapTypeControl: true,
      mapTypeId: maps.MapTypeId.ROADMAP,
      scaleControl: true,
      scrollwheel: false,
      streetViewControl: true,
    };
  };

  return (
    <Card mb={1}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Default Map
        </Typography>
        <Typography variant="body2" gutterBottom>
          Displays the default road map view.
        </Typography>

        <Spacer mb={6} />

        <GoogleMapReactWrapper>
          <GoogleMapReact
            options={getMapOptions}
            bootstrapURLKeys={{
              key: "AIzaSyA-aWrwgr64q4b3TEZwQ0lkHI4lZK-moM4",
            }}
            defaultCenter={options.center}
            defaultZoom={options.zoom}
          />
        </GoogleMapReactWrapper>
      </CardContent>
    </Card>
  );
}

export default Default;
