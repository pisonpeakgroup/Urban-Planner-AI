// src/components/UIPanel.jsx
import { useDispatch } from 'react-redux';
import { addBuilding } from '../store/citySlice';

export default function UIPanel() {
  const dispatch = useDispatch();

  return (
    <div className="ui-panel">
      <button onClick={() => dispatch(addBuilding({ x: 10, y: 0, z: 10 }))}>
        Add Building
      </button>
      {/* Add terrain and road controls here */}
    </div>
  );
}
