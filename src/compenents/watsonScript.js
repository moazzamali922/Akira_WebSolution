import React, { useEffect, useState } from 'react';

const WatsonAssistantLoader = () => {
  const [isChatActive, setIsChatActive] = useState(false);

  useEffect(() => {
    // Logic to load the Watson Assistant script
    const loadWatsonAssistantScript = () => {
      window.watsonAssistantChatOptions = {
        integrationID: '86a34fce-8123-4308-b952-eff380cc0143', // The ID of this integration.
        region: 'au-syd', // The region your integration is hosted in.
        serviceInstanceID: '636634dd-1c2b-4f56-8ef5-6c1c84f44ac9', // The ID of your service instance.
        onLoad: function (instance) {
          instance.render();
        },
      };

      const t = document.createElement('script');
      t.src =
        'https://web-chat.global.assistant.watson.appdomain.cloud/versions/' +
        (window.watsonAssistantChatOptions.clientVersion || 'latest') +
        '/WatsonAssistantChatEntry.js';
      document.head.appendChild(t);
    };

    if (isChatActive) {
      // Load the Watson Assistant script when chat is active
      loadWatsonAssistantScript();
    }
  }, [isChatActive]);

  const handleOpenChat = () => {
    setIsChatActive(true);
  };

  return (
    <div
      className={`fixed bottom-5 right-5 ${
        isChatActive ? 'hidden' : 'block'
      } transition-opacity duration-300`}
    >
      <button
        onClick={handleOpenChat}
        className="bg-gray-200 hover:bg-red-600 text-black font-bold py-2 px-4 rounded"
      >
        Chat with Us! 🤖
      </button>
    </div>
  );
};

export default WatsonAssistantLoader;
