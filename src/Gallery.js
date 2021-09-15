import React from 'react'
import './gallery.css';
import Header from './Header'
function GalleryComponent(props) {
    
    (function(d, s, id)
    {
        var js;
         if (d.getElementById(id)) 
        {
            return;
        }
         js = d.createElement(s);
          js.id = id;
           js.src = "https://embedsocial.com/cdn/ht.js";
            d.getElementsByTagName("head")[0].appendChild(js);
        }(document, "script", "EmbedSocialHashtagScript"));
    return (
        <div className="galCont" style={{width:'100vw'}}>
      <Header  x={'0'} />
      <div class="embedsocial-hashtag" data-ref="773ada7e3e854900497238b5ffab26b665a9a41b" >
                <a class="feed-powered-by-es helloWorld" href="https://embedsocial.com/social-media-aggregator/" style={{display:'none'}} target="_blank" >
                    </a>
                    </div>
                    <script>();
                    </script>
        </div>
    )
}

export default GalleryComponent
