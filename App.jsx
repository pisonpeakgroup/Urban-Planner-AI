import SceneRenderer from './components/SceneRenderer';
import UIPanel from './components/UIPanel';
import AIAssistant from './components/AIAssistant';
import MapOverlay from './components/MapOverlay';
import ExportTools from './components/ExportTools';

function App() {
  return (
    <div className="App">
      <SceneRenderer />
      <UIPanel />
      <AIAssistant />
      <MapOverlay />
      <ExportTools />
    </div>
  );
}

export default App;
