import React, {useState, useEffect} from 'react'

export default function API() {

    let [youtube, setYoutube] = useState([]);

    // useEffect(() =>{
    //     fetch(
    //       "https://youtube.googleapis.com/youtube/v3/search?part=snippet,id&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=9&key=AIzaSyBdOUPW0fy58mSqNakF9bMmxZ7fkrIGSew&order=date"
    //     )
    //       .then((value) => value.json())
    //       .then((data) => {
    //         setYoutube(data.items);
    //       });
    // }, [])



  return(
    
    <div className="coder">
      <div className="container">
        <h1>Latest videos</h1>
        <div className="vans">
          {youtube.map((singleVido, items) => {
            let vidId = singleVido.id.videoId;
            let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
            let videoWrapper = (
              <div key={items}>
                <div className="videoInfoWrapper">
                  <a href={vidLink}>
                    <img src={singleVido.snippet.thumbnails.high.url} />
                  </a>
                </div>
                <div className="videoInfoWrapper">
                  <div className="videoTitle">
                    <a href={vidLink}>{singleVido.snippet.title}</a>
                  </div>
                  <div className="videoDesc">
                    <br />
                    {singleVido.snippet.description}
                  </div>
                </div>
              </div>
            );
            return videoWrapper;
          })}
        </div>
      </div>
    </div>
  );
}
