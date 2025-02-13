"use client";

import React, { useState, useMemo } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useTheme } from "next-themes";

const containerStyle = {
  width: "100%",
  height: "700px"
};

const defaultCenter = {
  lat: 45.026417,
  lng: 38.9044813
};

const darkStyle = [
  {
    elementType: "geometry",
    stylers: [{ color: "#212121" }]
  },
  {
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }]
  },
  {
    elementType: "labels.text.fill",
    stylers: [{ color: "#757575" }]
  },
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#212121" }]
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [{ color: "#757575" }]
  },
  {
    featureType: "administrative.country",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9e9e9e" }]
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [{ visibility: "off" }]
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#bdbdbd" }]
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#757575" }]
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#181818" }]
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#616161" }]
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#1b1b1b" }]
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [{ color: "#2c2c2c" }]
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#8a8a8a" }]
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [{ color: "#373737" }]
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#3c3c3c" }]
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry",
    stylers: [{ color: "#4e4e4e" }]
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [{ color: "#616161" }]
  },
  {
    featureType: "transit",
    elementType: "labels.text.fill",
    stylers: [{ color: "#757575" }]
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#000000" }]
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#3d3d3d" }]
  }
];

const lightStyle = [
  {
    elementType: "geometry",
    stylers: [{ color: "#f5f5f5" }]
  },
  {
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }]
  },
  {
    elementType: "labels.text.fill",
    stylers: [{ color: "#616161" }]
  },
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#f5f5f5" }]
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [{ color: "#bdbdbd" }]
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ color: "#eeeeee" }]
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#757575" }]
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#e5e5e5" }]
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9e9e9e" }]
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#ffffff" }]
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text.fill",
    stylers: [{ color: "#757575" }]
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#dadada" }]
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#616161" }]
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9e9e9e" }]
  },
  {
    featureType: "transit.line",
    elementType: "geometry",
    stylers: [{ color: "#e5e5e5" }]
  },
  {
    featureType: "transit.station",
    elementType: "geometry",
    stylers: [{ color: "#eeeeee" }]
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#c9c9c9" }]
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9e9e9e" }]
  }
];

const markerSVG_Dark = `
<svg viewBox="0 0 349 514" xmlns="http://www.w3.org/2000/svg">
  <path d="M174.43,0.5c-96.05,0 -173.93,77.35 -173.93,172.78c0,48.82 47.89,136.27 47.89,136.27l119.61,202.95l124.84,-200.58c0,0 55.44,-83.44 55.44,-138.64c0.02,-95.43 -77.85,-172.78 -173.85,-172.78Zm-0.82,267.94c-54.624,-0.005 -99.57,-44.956 -99.57,-99.58c0,-54.628 44.952,-99.58 99.58,-99.58c54.613,0 99.558,44.927 99.58,99.54c0,0.023 0,0.047 0,0.07c0,54.612 -44.938,99.55 -99.55,99.55c-0.013,0 -0.027,0 -0.04,0Z" fill="#fff" stroke="#222327"/>
</svg>
`;

const markerSVG_Light = `
<svg viewBox="0 0 349 514" xmlns="http://www.w3.org/2000/svg">
  <path d="M174.43,0.5c-96.05,0 -173.93,77.35 -173.93,172.78c0,48.82 47.89,136.27 47.89,136.27l119.61,202.95l124.84,-200.58c0,0 55.44,-83.44 55.44,-138.64c0.02,-95.43 -77.85,-172.78 -173.85,-172.78Zm-0.82,267.94c-54.624,-0.005 -99.57,-44.956 -99.57,-99.58c0,-54.628 44.952,-99.58 99.58,-99.58c54.613,0 99.558,44.927 99.58,99.54c0,0.023 0,0.047 0,0.07c0,54.612 -44.938,99.55 -99.55,99.55c-0.013,0 -0.027,0 -0.04,0Z" fill="#000" stroke="#fff"/>
</svg>
`;

function svgToDataURL(svg: string) {
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}

const markerLight = svgToDataURL(markerSVG_Light);
const markerDark = svgToDataURL(markerSVG_Dark);

export function GoogleMapComponent() {
  const { resolvedTheme } = useTheme();
  const [googleMapsLoaded, setGoogleMapsLoaded] = useState(false);
  
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""
  });
  
  const mapOptions = useMemo(() => {
    return {
      zoom: 12,
      disableDefaultUI: true,
      scrollwheel: false,
      styles: resolvedTheme === "dark" ? darkStyle : lightStyle
    };
  }, [resolvedTheme]);
  
  const markerIcon = resolvedTheme === "dark" ? markerDark : markerLight;
  
  if (loadError) {
    return <div>Ошибка загрузки Google Maps: {loadError.message}</div>;
  }
  
  if (!isLoaded) {
    return <div>Загрузка карты...</div>;
  }
  
  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={defaultCenter}
      options={mapOptions}
    >
      <Marker
        position={defaultCenter}
        icon={{
          url: markerIcon,
          scaledSize: new window.google.maps.Size(65, 65)
        }}
      />
    </GoogleMap>
  );
}
