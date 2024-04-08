import React, { useState, useEffect, useMemo } from 'react';
import Nav from './Nav';
import {GoogleMap, Marker, useLoadScript} from '@react-google-maps/api'
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams from react-router-dom
import styles from '../styles/Home.module.css'
const Details = () => {
  const [project, setProject] = useState(null);
  const { id } = useParams(); // Use useParams to retrieve the project ID from the route parameters

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await axios.get(`/api/greencap/${id}`); // Make a GET request to fetch the details of the specific project based on its ID
        setProject(response.data);
      } catch (error) {
        console.error('Error fetching project details:', error);
      }
    };

    fetchProjectDetails();
  }, [id]);
  const {isLoaded} = useLoadScript({googleMapsApiKey: "AIzaSyAWTUsd4R2T18FYkU5e9H5Pwd5DqoAEWC0"});

  
  return (
    <div>
        <Nav/>
      {project ? (
        <div>
            <div className={styles.projectDetails}>
          <h2>{project.title}</h2>
          {/* <img src={project.image} alt={project.title} /> */}
          <div>
            Verified Carbon Credits:100
          </div>
          <h3>Description</h3>
          <p>{project.description}</p>
          <h3>Goal</h3>
          <p>{project.goal}</p>
          <h3>Methodology</h3>
          <p>{project.methodology}</p>
          <h3>Date Initiated</h3>
          <p>{project.date}</p>
          </div>
          {/* React Map */}
          <Map/>
        </div>
      ) : (
        <p>Loading project details...</p>
      )}
    </div>
  );
};

function Map(){
  return
  <GoogleMap zoom={10} center={{lat: 0.223, lng: -3.454}} className={styles.map}>

  </GoogleMap>
}
export default Details;
