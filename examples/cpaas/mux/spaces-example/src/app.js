import { Space, SpaceEvent, getUserMedia } from "@mux/spaces-web";

const localParticipantEl = document.getElementById("local-video");
const participantsEl = document.getElementById("remote-videos");

// Add a callback for the "Join" button
document.getElementById("join-button").addEventListener("click", (e) => {
  e.target.disabled = true;
  join();
});

async function join() {
  let space = new Space("eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlZyVTNPNWhiNGVJeURaekFreGFZYlZXVTNOcHBQcTFCREhQZHFpd0k1UmcifQ.eyJleHAiOjE2NzkwNDI1NTAsImF1ZCI6InJ0Iiwic3ViIjoiUTlHN3l4QWYxamZIc3JPQ2hYR2dlMmpPbjAwelRnU1gxMDJmb3pmU0RlbmUwMCJ9.vOkiz6bSZHtRIUxfg7whRB0xYp3qowI2EbZYkA_6SYyIU4-x3EXeH8dHGwQAqQe0WAQhrxzDLSFEliyDfLa_70J8wKQ-WPEANx0TGFr0vN0SwAF0w_JAPs5_u8bQqDT4Gcsh1WsVoGBM8nElnmksV6Za1Y9ybCGwkpj0-YmOpXgI2DMvV7zTNR3Sj_Mf4B2H4ZAe5fiWiSISWzXz14bddWlwRX2LGVEbS6tOUAEeRC7tibFLPLH58egw2YU1skglM5fyNNMsi_ypkuqCJEa1sXWpb-T3F4JXQUIbvJd9HLpPa7P93FzPowl1MdPD9n4tW_lHTNFA44ralv1NosyXvw");
  // Setup event listeners for other people joining and leaving
  space.on(SpaceEvent.ParticipantTrackSubscribed, addTrack);
  space.on(SpaceEvent.ParticipantTrackUnsubscribed, removeTrack);
  space.on(SpaceEvent.ParticipantLeft, removeParticipant);

  // Join the Space
  let localParticipant = await space.join();
  // Publish and display our local tracks
  let localTracks = await getUserMedia({
    audio: true,
    video: true,
  });
  await localParticipant.publishTracks(localTracks);
  localTracks.forEach((track) => {
    track.attach(localParticipantEl);
  });
}

// Creates or updates a <video> element in the page when a participant's track becomes available
async function addTrack(participant, track) {
  let remoteVideo = document.getElementById(participant.connectionId);
  if (!remoteVideo) {
    const el = document.createElement("video");
    el.id = participant.connectionId;
    el.width = 400;
    el.height = 225;
    el.autoplay = true;
    el.controls = true;
    participantsEl.appendChild(el);
    remoteVideo = el;
  }
  track.attach(remoteVideo);
}

// Removes a participant's track when it is no longer available
async function removeTrack(participant, track) {
  const remoteVideo = document.getElementById(participant.connectionId);
  track.detach(remoteVideo);
}

// Removes the appropriate <video> element from the page when a participant leaves
async function removeParticipant(participant) {
  participantsEl.removeChild(document.getElementById(participant.connectionId));
}