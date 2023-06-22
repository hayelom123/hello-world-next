let peerConnection;
let localStream;
let remoteStream;
const configuration = {
  iceServers: [
    {
      url: "stun:stun.webrtc.adeymeselesh.de",
    },
    {
      url: "turn:turn.webrtc.adeymeselesh.de:3478",
      username: "guest",
      credential: "somepassword",
    },
  ],
};

let init = async () => {
  localStream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false,
  });
  remoteStream = new MediaStream();

  document.getElementById("user-1").srcObject = localStream;
  document.getElementById("user-2").srcObject = remoteStream;
};

let createOffer = async () => {
  peerConnection = new RTCPeerConnection(configuration);

  remoteStream = new MediaStream();

  document.getElementById("user-2").srcObject = remoteStream;
  //   peerConnection.addStream(localStream);

  localStream.getTracks().forEach((track) => {
    peerConnection.addTrack(track, localStream);
  });

  peerConnection.ontrack = async (event) => {
    event.streams[0].getTracks().forEach((track) => {
      remoteStream.addTrack(track);
    });
  };
  peerConnection.onicecandidate = async (event) => {
    if (event.candidate) {
      document.getElementById("offer-sdp").value = JSON.stringify(
        peerConnection.localDescription
      );
    }
  };

  let offer = await peerConnection.createOffer();
  await peerConnection.setLocalDescription(offer);

  document.getElementById("offer-sdp").value = JSON.stringify(offer);
};

const createAnswer = async () => {
  peerConnection = new RTCPeerConnection(configuration);

  remoteStream = new MediaStream();

  document.getElementById("user-2").srcObject = remoteStream;
  //   peerConnection.addStream(localStream);

  localStream.getTracks().forEach((track) => {
    peerConnection.addTrack(track, localStream);
  });

  peerConnection.ontrack = async (event) => {
    event.streams[0].getTracks().forEach((track) => {
      remoteStream.addTrack(track);
    });
  };
  peerConnection.onicecandidate = async (event) => {
    if (event.candidate) {
      document.getElementById("answer-sdp").value = JSON.stringify(
        peerConnection.localDescription
      );
    }
  };
  let offer = document.getElementById("offer-sdp").value;
  if (!offer) {
    return alert("Retrieve from peer firse!!!");
  }
  offer = JSON.parse(offer);
  await peerConnection.setRemoteDescription(offer);
  let answer = await peerConnection.createAnswer();
  await peerConnection.setLocalDescription(answer);
  document.getElementById("answer-sdp").value = JSON.stringify(answer);
};
let addAnswer = async () => {
  let answer = document.getElementById("answer-sdp").value;
  if (!answer) {
    return alert("Retrieve answer from peer firse!!!");
  }
  answer = JSON.parse(answer);
  if (!peerConnection.currentRemoteDescription) {
    peerConnection.setRemoteDescription(answer);
  }
};
init();

document.getElementById("create-offer").addEventListener("click", createOffer);
document
  .getElementById("create-answer")
  .addEventListener("click", createAnswer);
document.getElementById("add-answer").addEventListener("click", addAnswer);
