import React, { useEffect, useState } from 'react'
import "leaflet/dist/leaflet.css";
import { MapContainer, GeoJSON, Marker, Tooltip } from 'react-leaflet';
import { useAppData } from '../App';
import { provinsiLabels, sumatera, timur } from '../const';
import AreaSwiper from './AreaSwiper';
const empty = L.divIcon({
    html: "",
    className: "empty-icon"
})
const marker = L.icon({
    iconUrl: "/marker.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
});
const AreaWork = () => {
    const { windowWidth } = useAppData()
    const [geojson, setGeojson] = useState(null)
    const [locations, setLocations] = useState([])

    async function getLocations() {
        try {
            const response = await fetch("/area_work.json")
            const data = await response.json()
            setLocations(data)
        } catch (error) {
            console.error(error)
        }
    }
    async function getMap() {
        try {
            const response = await fetch("/indonesia.json")
            const data = await response.json()
            setGeojson(data)
        } catch (error) {
            console.error(error)
        }
    }
    function getStyle(feature) {
        const color = feature.properties.COLOR;

        return {
            fillColor: color || '#FFC247',
            color: "white",
            weight: 0.5,
            fillOpacity: 1,
        };
    }
    useEffect(() => {
        getMap()
        getLocations()
    }, [])
    const zoom = windowWidth > 1280 ? 5 : windowWidth > 1024 ? 4.5 : windowWidth > 768 ? 4.3 : 3.5;
    return (
        <section className='container-max flex flex-col py-14'>
            <div className='flex flex-col gap-1 items-center'>
                <h2 className='text-black text-center'>Area Work</h2>
                <p className='text-base text-neutral-400'>Operating across 11 strategic locations</p>
            </div>
            <div className="md:scale-125 sm:scale-110 mt-10 lg:mt-24 relative">

                {windowWidth > 640 ? <>
                    <div className="md:absolute -top-6 left-[15%] lg:left-[20%] px-2 lg:px-6 py-2 rounded-xl border flex flex-col
                 border-primary-500 list-disc text-[8px] lg:text-[10px] font-medium font-inter z-50 bg-white/15 backdrop-blur-md">
                        {sumatera.map((s, i) => (
                            <div key={i} className='flex gap-1 items-center'>
                                <div className='flex-shrink-0 rounded-full w-[3px] h-[3px] bg-black' />
                                {s.label}
                            </div>
                        ))}
                    </div>
                    <div className="md:absolute top-12 right-[15%] lg:right-[23%] px-2 lg:px-6 py-2 rounded-xl border flex flex-col
                 border-primary-500 list-disc text-[8px] lg:text-[10px] font-medium font-inter z-50 bg-white/15 backdrop-blur-md">
                        {timur.map((s, i) => (
                            <div key={i} className='flex gap-1 items-center'>
                                <div className='flex-shrink-0 rounded-full w-[3px] h-[3px] bg-black' />
                                {s.label}
                            </div>
                        ))}
                    </div>
                    <div className="md:absolute bottom-12 right-[20%] lg:right-[40%] px-2 lg:px-6 py-2 rounded-xl border flex flex-col
                 border-primary-500 list-disc text-[8px] lg:text-[10px] font-medium font-inter z-50 bg-white/15 backdrop-blur-md">
                        {timur.map((s, i) => (
                            <div key={i} className='flex gap-1 items-center'>
                                <div className='flex-shrink-0 rounded-full w-[3px] h-[3px] bg-black' />
                                {s.label}
                            </div>
                        ))}
                    </div>
                    <MapContainer
                        center={[-2.5, 118]}
                        dragging={false}
                        zoomControl={false}
                        scrollWheelZoom={false}
                        zoom={zoom}
                        attributionControl={false}
                        minZoom={zoom}
                        maxZoom={zoom}
                        className='w-full h-[300px] md:h-[400px] !bg-transparent'
                    >
                        {geojson && (
                            <GeoJSON
                                style={getStyle}
                                data={geojson}
                            />
                        )}
                        {locations.map((loc, i) => (
                            <Marker key={i} icon={marker} position={loc.pos}>

                            </Marker>
                        ))}
                        {provinsiLabels.map((prov, i) => (
                            <Marker key={i} position={prov.pos} icon={empty}>
                                <Tooltip
                                    key={i}
                                    permanent
                                    direction="center"
                                    className="provinsi-label"
                                >
                                    {prov.label}
                                </Tooltip>
                            </Marker>
                        ))}

                    </MapContainer>
                </> : (
                    <AreaSwiper />
                )}
            </div>
        </section>
    )
}

export default AreaWork