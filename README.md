Upload a video
route: /api/video
method: POST
**Returns a json of the new video id**

Get all videos
route: /api/video
method: GET
**Returns \_id, title, videoUrl, uploadDate of all videos in an array of objects**

Get a video
route: /api/video/:id
method: GET
**Returns \_id, title, videoUrl, uploadDate, transcript of the requested video in an object**

Update a video title
route: /api/video/:id
method: PATCH
**Returns updated title, \_id, videoUrl, uploadDate of the updated video in an object**
