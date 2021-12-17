import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    return (
        <ChatEngine
            height= '100vh'      // so the chat app will be the full height of the page
            projectID= '7c2dfd2e-bfed-4d22-8df9-73c2e1c81114'     // projectID you got making a new project in chatengine.io 
            userName= 'KathleenC'                                 // username you created in chatengine.io 
            userSecret= '12345'                                   // secret you created with your user in chatengine.io
            renderChatFeed= {( chatAppProps ) => <ChatFeed { ...chatAppProps } />}
        />

    )
}

export default App;