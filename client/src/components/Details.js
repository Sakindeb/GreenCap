import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { GoogleMap, LoadScript, Polygon } from '@react-google-maps/api'; // Import GoogleMap, LoadScript, and Polygon from @react-google-maps/api
import styles from '../styles/Home.module.css';

const Details = () => {
  const [project, setProject] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await axios.get(`/api/greencap/${id}`);
        setProject(response.data);
      } catch (error) {
        console.error('Error fetching project details:', error);
      }
    };

    fetchProjectDetails();
  }, [id]);

  return (
    <div>
      <Nav />
      {project ? (
        <div>
          <div className={styles.projectDetails}>
            <h2>{project.title}</h2>
            {/* Other project details */}
          </div>
          <LoadScript googleMapsApiKey="AIzaSyAWTUsd4R2T18FYkU5e9H5Pwd5DqoAEWC0"> {/* Replace YOUR_API_KEY with your actual Google Maps API key */}
            <GoogleMap
              mapContainerStyle={{ width: '100%', height: '400px' }}
              center={{ lat: -1.2921, lng: 36.8219 }} // Replace YOUR_LATITUDE and YOUR_LONGITUDE with actual coordinates
              zoom={18}
            >
              <Polygon
                
                paths={[
                  { lat: -1.2900, lng: 36.8226 },
                  { lat: -1.2915, lng: 36.8210 },
                  { lat: -1.2927, lng: 36.8205 }
                ]} // Replace project.polygonCoordinates with the actual set of coordinates for the polygon
                options={{
                  strokeColor: "#FF0000",
                  strokeOpacity: 0.8,
                  strokeWeight: 3,
                  fillColor: "#FF0000",
                  fillOpacity: 0.35,
                }}
              />
              {/* Additional polygons or components can be added here */}
            </GoogleMap>
          </LoadScript>
        </div>
      ) : (
        <p>Loading project details...</p>
      )}
    </div>
  );
};

export default Details;
