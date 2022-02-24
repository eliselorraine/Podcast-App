import React from 'react';
import '../stylesheets/Podcast.css'
import Add from './Add'
import Remove from './Remove'
import { useLocation, useNavigate } from 'react-router-dom'
import parse from 'html-react-parser';
import Results from '../pages/Results';

const Podcast = ({ obj, list, setList, setPodcastId }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const goToPodcast = () => {
    console.log(obj);
    const episodeId = obj.podcast.id;
    setPodcastId(episodeId);
    navigate('/podcast')
  }

  if (location.pathname === '/mylist') {
    return (
      <div className="podcast-container">
      <img onClick={goToPodcast} className="podcast_thumbnail" alt="podcast thumbnail" src={obj.thumbnail}></img>
      <span className="podcast__audio-description">
        <span className="podcast__title-button">
          <h1 className="podcast__title">{obj.title_original || obj.title}</h1>
          <div className="audio-container">
            <audio controls className="list_podcast__audio"><source type="audio/mpeg" src={obj.audio}></source></audio>
            <Remove obj={obj} list={list} setList={setList} />
          </div>
        </span>
        <div className="podcast__description">{parse(obj.description_original || obj.description)}</div>
      </span>
    </div>
    )
  }

  if (location.pathname === '/podcast') {
    return (
      <div className="podcast-container radio_podcast-container">
        <span className="podcast__audio-description">
          <h1 className="podcast__title">{obj.title}</h1>
          <div className="radio-audio-container">
            <audio controls className="radio_podcast__audio"><source type="audio/mpeg" src={obj.audio}></source></audio>
            <Add obj={obj} list={list} setList={setList} />
          </div>
          <div className="podcast__description">{parse(obj.description)}</div>
        </span>
      </div>
    )
  }
  return (
    <div className="podcast-container">
      <img onClick={goToPodcast} className="podcast_thumbnail" alt="podcast thumbnail" src={obj.thumbnail}></img>
      <span className="podcast__audio-description">
        <span className="podcast__title-button">
          <h1 className="podcast__title">{obj.title_original}</h1>
          <div className="audio-container">
            <audio controls className="podcast__audio"><source type="audio/mpeg" src={obj.audio}></source></audio>
            <Add obj={obj} list={list} setList={setList} />
          </div>
        </span>
        <div className="podcast__description">{parse(obj.description_original)}</div>
      </span>
    </div>
  )
}

export default Podcast;


// in Radio, the object looks like: 
// audio: "https://www.listennotes.com/e/p/4e7c59e10e4640b98f2f3cb1777dbb43/"
// audio_length_sec: 2447
// description: "<p>The second half of my latest conversation with Bobby Roberts, Podcast Emeritus from Full of Sith and now Star Wars \"Podcast Force Ghost at Large.\" Punch it!</p> <p>***We’re listener supported! Go to http://Patreon.com/sw7x7 to donate to the Star Wars 7x7 podcast, and you’ll get some fabulous rewards for your pledge.*** </p> <p>Check out SW7x7.com for full Star Wars 7x7 show notes and links, and to comment on any of the content of this episode! If you like what you've heard, please leave us a rating or review on iTunes or Stitcher, which will also help more people discover this Star Wars podcast.</p> <p>Don't forget to join the Star Wars 7x7 fun on Facebook at Facebook.com/SW7x7, and follow the breaking news Twitter feed at Twitter.com/SW7x7Podcast. We're also on Pinterest and Instagram as \"SW7x7\" too, and we'd love to connect with you there!</p>"
// explicit_content: false
// id: "4e7c59e10e4640b98f2f3cb1777dbb43"
// image: "https://cdn-images-1.listennotes.com/podcasts/star-wars-7x7-the-daily-star-wars-podcast-HN08OoDE7pc-AIg3cZVKCsL.1400x1400.jpg"
// link: "https://sw7x7.libsyn.com/864-part-2-of-my-new-conversation-with-bobby-roberts?utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website"
// listennotes_edit_url: "https://www.listennotes.com/e/4e7c59e10e4640b98f2f3cb1777dbb43/#edit"
// listennotes_url: "https://www.listennotes.com/e/4e7c59e10e4640b98f2f3cb1777dbb43/"
// maybe_audio_invalid: false
// pub_date_ms: 1479110401282
// thumbnail: "https://cdn-images-1.listennotes.com/podcasts/star-wars-7x7-the-daily-star-wars-podcast-2LryqMj-sGP-AIg3cZVKCsL.300x300.jpg"
// title: "864: Part 2 of My (New) Conversation With Bobby Roberts"

// In Results, the obj looks like this: 
// audio: "https://www.listennotes.com/e/p/ea09b575d07341599d8d5b71f205517b/"
// audio_length_sec: 1694
// description_highlighted: "...Go back to the beginning and listen to our podcast with <span class=\"ln-search-highlight\">Star</span> <span class=\"ln-search-highlight\">Wars</span> and 'Empire' editor, Paul Hirsch. Hear editor Bob Ducsay talk about cutting The Last Jedi."
// description_original: "In this episode of The Rough Cut we close out our study of the final Skywalker trilogy with a look back on the film that helped the dormant franchise make the jump to lightspeed, Episode VII - The Force Awakens.  Recorded in Amsterdam in front of a festival audience in 2018, editor Maryann Brandon ACE recounts her work on The Force Awakens just as she was about to begin editing what would come to be known as Episode IX - The Rise of Skywalker.   Go back to the beginning and listen to our podcast with Star Wars and 'Empire' editor, Paul Hirsch. Hear editor Bob Ducsay talk about cutting The Last Jedi. Listen to Maryann Brandon talk about her work on The Rise of Skywalker. Get your hands on the non-linear editor behind the latest Skywalker trilogy,  Avid Media Composer! Subscribe to The Rough Cut for more great interviews with the heroes of the editing room!    "
// explicit_content: false
// id: "ea09b575d07341599d8d5b71f205517b"
// image: "https://cdn-images-1.listennotes.com/podcasts/the-rough-cut-PmR84dsqcbj-53MLh7NpAwm.1400x1400.jpg"
// itunes_id: 1471556007
// link: "http://theroughcutpod.com/?p=786&utm_source=listennotes.com&utm_campaign=Listen+Notes&utm_medium=website"
// listennotes_url: "https://www.listennotes.com/e/ea09b575d07341599d8d5b71f205517b/"
// podcast: {id: '8758da9be6c8452884a8cab6373b007c', image: 'https://cdn-images-1.listennotes.com/podcasts/the-rough-cut-PmR84dsqcbj-53MLh7NpAwm.1400x1400.jpg', genre_ids: Array(2), thumbnail: 'https://cdn-images-1.listennotes.com/podcasts/the-rough-cut-AzKVtPeMOL4-53MLh7NpAwm.300x300.jpg', listen_score: null, …}
// pub_date_ms: 1579507216047
// rss: "https://theroughcut.libsyn.com/rss"
// thumbnail: "https://cdn-images-1.listennotes.com/podcasts/the-rough-cut-AzKVtPeMOL4-53MLh7NpAwm.300x300.jpg"
// title_highlighted: "<span class=\"ln-search-highlight\">Star</span> <span class=\"ln-search-highlight\">Wars</span> - The Force Awakens"
// title_original: "Star Wars - The Force Awakens"
// transcripts_highlighted: []