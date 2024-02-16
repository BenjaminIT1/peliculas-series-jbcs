import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="bg-blue-500 text-white p-5">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-4 mb-5">
          <a href="/" className="text-black">Home</a>
          <a href="/terms" className="text-black ">Terms and conditions</a>
          <a href="/privacy" className="text-black ">Privacy policy</a>
          <a href="/collection" className="text-black ">Collection statement</a>
          <a href="/help" className="text-black ">Help</a>
          <a href="/manage" className="text-black ">Manage account</a>
        </div>
        <p className="text-sm text-black mb-5">
          Copyright © 2016 DEMO Streaming. All Rights Reserved.
        </p>
        <div className="flex gap-4 mb-5">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} className="text-2xl" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
          </a>
        </div>
        <div className="flex gap-4">
          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
            <img src="https://protostargames.com/wp/wp-content/uploads/getItOnGooglePlay.png" alt="Download on Android" className="h-12"/>
          </a>
          <a href="https://www.apple.com/app-store" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Download_on_the_App_Store_RGB_blk.svg/768px-Download_on_the_App_Store_RGB_blk.svg.png" alt="Download on Apple" className="h-12"/>
          </a>
          <a href="https://www.microsoft.com/store/apps" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Get_it_from_Microsoft_Badge.svg/1200px-Get_it_from_Microsoft_Badge.svg.png" alt="Download on Microsoft" className="h-12"/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
