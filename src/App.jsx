import { Route, Routes } from 'react-router-dom';

import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import Chat from './pages/Chat';
import Home from './components/chat/Home';
import AgentTraining from './components/chat/AgentTraining';
import IntegrationWithLocalAndInternationalLaborMarkets from './components/chat/IntegrationWithLocalAndInternationalLaborMarkets';
import VerificationAndSecurity from './components/chat/VerificationAndSecurity';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat" element={<Chat />}>
          <Route path="" element={<Home />} />
          <Route path="agent_training" element={<AgentTraining />} />
          <Route
            path="integration_with_local_and_internationa_labo_markets"
            element={<IntegrationWithLocalAndInternationalLaborMarkets />}
          />
          <Route
            path="verification_and_security"
            element={<VerificationAndSecurity />}
          />
        </Route>
      </Routes>
    </Layout>
  );
};

export default App;
