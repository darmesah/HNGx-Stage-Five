**BACKEND URL:** https://damisaalex.xyz/hngx5

Upload a video
route: /api/videos
method: POST
**Accepts the video file the frontend adds in the form data**
**Returns a json of the new video id**

Get all videos
route: /api/videos
method: GET
**Returns an array of objects: _id, title, videoUrl (path in disk: Appending the backend url to this path gives you the video), uploadDate of all videos**

Get a video
route: /api/videos/:id
method: GET
**Returns an object: _id, title, videoUrl, uploadDate and transcript**

Update a video title
route: /api/video/:id
method: PATCH
**Returns updated title, _id, videoUrl, uploadDate of the updated video in an object**
