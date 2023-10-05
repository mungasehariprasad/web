function search() {
  var searchInput = document.getElementById("searchInput").value;
  // Perform search logic here...
}

function playVideo(videoId, videoTitle, videoDescription) {
  var videoFrame = document.getElementById("videoFrame");
  var videoTitleElement = document.getElementById("videoTitle");
  var videoDescriptionElement = document.getElementById("videoDescription");

  videoFrame.src = "https://www.youtube.com/embed/" + videoId;
  videoTitleElement.innerText = videoTitle;
  videoDescriptionElement.innerText = videoDescription;
}

// Simulated data for recommended videos
var recommendedVideos = [
  {
    id: "VIDEO_ID_1",
    title: "Recommended Video 1",
    description: "Description of Recommended Video 1"
  },
  {
    id: "VIDEO_ID_2",
    title: "Recommended Video 2",
    description: "Description of Recommended Video 2"
  },
  // Add more recommended videos here...
];

// Generate recommended video list
var recommendedVideosList = document.getElementById("recommendedVideosList");

for (var i = 0; i < recommendedVideos.length; i++) {
  var video = recommendedVideos[i];
  var listItem = document.createElement("li");
  var thumbnail = document.createElement("img");
  var videoInfo = document.createElement("div");
  var title = document.createElement("h3");
  var description = document.createElement("p");

  thumbnail.src = "thumbnail.jpg"; // Replace with actual thumbnail URL
  title.innerText = video.title;
  description.innerText = video.description;

  listItem.appendChild(thumbnail);
  listItem.appendChild(videoInfo);
  videoInfo.appendChild(title);
  videoInfo.appendChild(description);
  recommendedVideosList.appendChild(listItem);
}
