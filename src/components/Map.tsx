'use client'

import L from "leaflet"
import {MapContainer, Marker, TileLayer} from "react-leaflet";

import "leaflet/dist/leaflet.css"
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png"
import markerIcon from "leaflet/dist/images/marker-icon.png"
import markerShadow from "leaflet/dist/images/marker-shadow.png"

// @ts-ignore
delete (L.Icon.Default.prototype as any)._getIconUrl

// Ensure we use string URLs regardless of how the image is imported (module object with `.src` or raw string)
const iconRetinaUrl = (markerIcon2x as any)?.src ?? (markerIcon2x as unknown as string)
const iconUrl = (markerIcon as any)?.src ?? (markerIcon as unknown as string)
const shadowUrl = (markerShadow as any)?.src ?? (markerShadow as unknown as string)

L.Icon.Default.mergeOptions({
	iconRetinaUrl,
	iconUrl,
	shadowUrl,
})

interface MapProps {
	center?: L.LatLngExpression
}

const Map = ({center}: MapProps) => {
	const defaultCenter: L.LatLngExpression = [51, -0.09]
	
	
	return (
		<MapContainer scrollWheelZoom={false} className='h-[35vh] rounded-lg ' zoom={6}
					  center={center ?? defaultCenter}>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{center && <Marker position={center}/>}
		
		</MapContainer>
	)
}
export default Map
