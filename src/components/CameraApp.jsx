import React, { useState, useEffect, useRef } from 'react';

const CameraApp = () => {
  const [stream, setStream] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    // Function to start the camera and set the stream to the state
    const startCamera = async () => {
      try {
        const userMediaStream = await navigator.mediaDevices.getUserMedia({
          video: true, // Enable video
          audio: false, // Disable audio
        });
        setStream(userMediaStream);
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    // Call the startCamera function to initiate camera access
    startCamera();

    // Cleanup: Stop the camera when the component unmounts
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => {
          track.stop();
        });
      }
    };
  }, []);

  useEffect(() => {
    if (videoRef.current && stream) {
      // Set the video element's source to the camera stream
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  return (
    <div>
      <div>
        <video ref={videoRef} autoPlay playsInline />
      </div>
    </div>
  );
};

export default CameraApp;
