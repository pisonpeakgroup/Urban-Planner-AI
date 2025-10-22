// src/components/ExportTools.jsx
export default function ExportTools() {
  const handleExport = () => {
    // Placeholder for export logic
    alert('Exporting model...');
  };

  return (
    <div className="export-tools">
      <button onClick={handleExport}>Export to AR/VR</button>
    </div>
  );
}
