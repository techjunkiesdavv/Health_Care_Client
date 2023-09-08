import React, { useState, useRef, useEffect } from 'react';
import { Grid, Paper, Typography, makeStyles } from '@material-ui/core';
import { io } from 'socket.io-client';
import Peer from 'simple-peer';
import CameraApp from './CameraApp';
import Sidebar from './Sidebar';
import Notifications from './Notifications';

const socket = io('http://localhost:5000');
const useStyles = makeStyles((theme) => ({
  video: {
    width: '550px',
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
  },
  gridContainer: {
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  paper: {
    padding: '10px',
    border: '2px solid black',
    margin: '10px',
  },
}));

const VideoPlayer = () => {
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [stream, setStream] = useState();
  const [name, setName] = useState('');
  const [call, setCall] = useState({});
  const [me, setMe] = useState('');

  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();

  // useEffect(() => {
  //   navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  //     .then((currentStream) => {
  //       setStream(currentStream);

  //       myVideo.current.srcObject = currentStream;
  //     });

  //   socket.on('me', (id) => setMe(id));

  //   socket.on('callUser', ({ from, name: callerName, signal }) => {
  //     setCall({ isReceivingCall: true, from, name: callerName, signal });
  //   });
  // }, []);

  const answerCall = () => {
    setCallAccepted(true);

    const peer = new Peer({ initiator: false, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.emit('answerCall', { signal: data, to: call.from });
    });

    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    peer.signal(call.signal);

    connectionRef.current = peer;
  };

  const callUser = (id) => {
    const peer = new Peer({ initiator: true, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.emit('callUser', { userToCall: id, signalData: data, from: me, name });
    });

    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    socket.on('callAccepted', (signal) => {
      setCallAccepted(true);

      peer.signal(signal);
    });

    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);

    connectionRef.current.destroy();

    window.location.reload();
  };

  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer}>
      <Paper className={classes.paper}>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1" gutterBottom>{name || 'Your Name'}</Typography>
          {/* <CameraApp stream={stream} /> */}
        </Grid>
      </Paper>

      <Paper className={classes.paper}>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1" gutterBottom>{call.name || 'Caller Name'}</Typography>
          <video playsInline ref={userVideo} autoPlay className={classes.video} />
        </Grid>
      </Paper>

      <Sidebar
        name={name}
        setName={setName}
        me={me}
        callAccepted={callAccepted}
        leaveCall={leaveCall}
        callUser={callUser}
        callEnded={callEnded}
      />

      <Notifications call={call} callAccepted={callAccepted} answerCall={answerCall} />
    </Grid>
  );
};

export default VideoPlayer;
