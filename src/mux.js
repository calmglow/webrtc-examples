import { Space, SpaceEvent, getUserMedia } from "@mux/spaces-web";

const localParticipantEl = document.getElementById("local-video");
const participantsEl = document.getElementById("remote-videos");

// Add a callback for the "Join" button
document.getElementById("join-button").addEventListener("click", (e) => {
  e.target.disabled = true;
  join();
});

async function join() {
  let space = new Space("eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlZyVTNPNWhiNGVJeURaekFreGFZYlZXVTNOcHBQcTFCREhQZHFpd0k1UmcifQ.eyJleHAiOjE2Nzk5Njg1NDQsImF1ZCI6InJ0Iiwic3ViIjoiUTlHN3l4QWYxamZIc3JPQ2hYR2dlMmpPbjAwelRnU1gxMDJmb3pmU0RlbmUwMCJ9.qLCegWKE7Y-TrYc3Y3zBG8Azh_L2HhVOYX-MmUDRok3hXPrJsuNiKC1CR55zq7HX25U9kBjahFdGDDiutuzt7gzfcUYnN9UyuZJMHGB2cFJoslRDaD-GW9Xx5VN4ub4ibT2VserDf4Ogs0maSyer9VYCtAvOqyKtmGWVnCOpqUZgnppPfjvKo8qTafMzGG5Z09-350ZnI8m5poyqwTnXdsmtfFSSe5WAitS2uuttcsro7YItmgYHnAdOPl9q7hlxQ1T1qd3Z3SCDo6P0qSMnIq9ud19clxSc7YuZn3mVwKVnVcLduDitMCH7s2BD4x6iP2ngL21wQ4gqXkvz_UUTNw");
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