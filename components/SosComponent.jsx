import React from 'react';
// Need to learn React Native for mobile device implementation

const SOS = () => {
  const getMessage = () => {
    console.log('getMessage fired');
    // if user has preset message
    // return preset message
    // otherwise
    // message is:
    // 'You are receiving this SOS because ${name of device owner} is currently in a situation where they do not feel safe'
    // return message
  };
  const getLocation = () => {
    console.log('getLocation fired');
    // location is (get current location of device)
    // return location (formatted if necessary)
  };
  const getVideo = () => {
    console.log('getVideo fired');
    // if user chose to set app up this way
    // get link to currently streaming video on user's device
    // return link to this video along with one-time use access key
  };
  const getIceContacts = () => {
    console.log('getIceContacts fired');
    // get and return preset ICE contacts
  };
  const sendSOS = () => {
    console.log('sendSOS fired');
    // send SOS to contacts return from getIceContacts with:
    // *location collected from getLocation
    // *message from getEmergencyMessage
    // *link to access currentVideo
  };
  return (
    <div>
      <button type="button" onClick={sendSOS}>SOS</button>
    </div>
  );
};

export default SOS;

