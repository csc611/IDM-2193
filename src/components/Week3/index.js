import React from 'react';
import Header from '../Header';
import './styles.css';
import drawingsImg from './drawings.png';

function Week3() {
  return (
    <main>
      <Header />

      <div id="page-title">Week 3</div>

      <section id="page-content">
        <p>This reflection concerns two articles: the 1945 article <i>As We May Think</i> by Vannevar Bush and the 2010 <i>Long Live the Web</i> by Tim Berners Lee.</p>
        <p>In the first article, Bush discusses how technological advancement is accelerating at a rapid rate, which provides humans with materialistic benefits; however, the human race is slowly but surely becoming incapable of comprehending the insane amount of data that has been recorded. Bush goes on to stress the importance and urgency of data management; without an effective way to manage increasingly specific information, it will be nearly impossible to use the information efficiently. I relate to this article in that I have a plethora of drawings and photos in my phone and computer; however, in order to locate one specific file, it sometimes takes me upwards of 5 minutes just to find that specific file or image. I have tried to organize the photos and drawings; however, I create new ones every day and I get too tired and burnt out to go through the thousands of files.</p>
        <figure>
          <img onClick={() => alert('too many files! T-T')} src={drawingsImg} alt= "Drawing Files" id="drawings"/>
          <figcaption>This is picture of a whole bunch of files that I want to organize but I feel too tired to deal with.</figcaption>
        </figure>
        <p>In the second article, Lee, the inventor of the World Wide Web, is making a similar argument concerning technology and its seemingly negative impact on humans in the years to come. Lee praises the World Wide Web, as it offers immense utility towards information storage, management, and communication. However, he also brings to light the inherent problems it creates, such as privacy issues that may interfere with basic human networking rights. I thought it was interesting to read this article in the 'now times' when everyone is communicating through zoom and other mediums of communication. I am, like Lee, both immensely excited and nervous for what is to come of privacy issues and technological breakthroughs through the web. One thing that I get nervous about is my information getting leaked to people while I am online on applications like Zoom or playing games, like League of Legends.</p>
        <figure>
          <img src="https://www.pcgamesn.com/wp-content/uploads/2019/04/league-of-legends-yuumi-reveal.jpg" alt= "Zoomies!" id="yuumi"/>
          <figcaption>This is photo of League of legends champion Yuumi, whose frequent catchphrase is "We got the <i>zoomies</i>!" </figcaption>
        </figure>
      </section>
    </main>
  );
}

export default Week3;
