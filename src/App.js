import { useState } from "react";
import { showMessageBox, showOpenDialog } from "nwjs-dialog";
import "./App.css";


function App() {
  const [installationPath, setInstallationPath] = useState("");

  const selectPath = () => {
    showOpenDialog({
      title: "Select the installation path",
      defaultPath: process.cwd(),
      openDirectory: true,
      returnFormat: "string",
    }).then((filePaths) => {
      if (filePaths) {
        setInstallationPath(filePaths[0]);
      }
    });
  };

  const install = () => {
    var fs = nw.require('fs');
    fs.readFile('./test.txt', 'utf8', (err, txt) => {
      if (err) {
        showMessageBox({ message: "Failed to read source file!", type: "error" });
        return;
      }
      fs.writeFile(installationPath + '/test.txt', txt, (err) => {
        if (err) {
          showMessageBox({ message: "Installation failed!", type: "error" });
        } else {
          showMessageBox({ message: "Installation completed successfully!", type: "success" });
        }
      });
    });
  };

  return <div className="container">
    <h1>Installation POC</h1>

    <p>Select the installation directory.</p>

    <div className="row">
      <input
        id="path-input"
        onChange={(e) => setInstallationPath(e.currentTarget.value)}
        placeholder="Enter your directory"
        value={installationPath}
      />
      <button type="button" onClick={selectPath}>Select</button>
    </div>

    <div className="row">
      <button type="button" onClick={install}>Install</button>
    </div>
  </div>;
}

export default App;
