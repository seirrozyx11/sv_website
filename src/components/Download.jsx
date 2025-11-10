import QRCode from 'react-qr-code'
import { FaAndroid, FaApple, FaDownload, FaGithub } from 'react-icons/fa'
import './Download.css'

function Download() {
  // Replace with your actual download link
  const downloadUrl = 'https://github.com/yourusername/sikadvoltz/releases'

  return (
    <section id="download" className="section download">
      <div className="container">
        <h2 className="section-title">Download SIKADVOLTZ</h2>
        <p className="download-subtitle">
          Get started with the app today – scan or click to download
        </p>

        <div className="download-content">
          {/* QR Code */}
          <div className="qr-section">
            <div className="qr-card">
              <h3>Scan to Download</h3>
              <div className="qr-wrapper">
                <QRCode
                  value={downloadUrl}
                  size={200}
                  level="H"
                  style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                />
              </div>
              <p className="qr-instruction">
                Point your camera at the QR code to download the app
              </p>
            </div>
          </div>

          {/* Download Options */}
          <div className="download-options">
            <h3>Or Download Directly</h3>

            <div className="download-buttons">
              <a 
                href={downloadUrl}
                className="download-btn android"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaAndroid className="platform-icon" />
                <div className="btn-text">
                  <small>Download for</small>
                  <strong>Android</strong>
                </div>
              </a>

              <a 
                href={downloadUrl}
                className="download-btn ios"
                target="_blank"
                rel="noopener noreferrer"
                readOnly={true}
              >
                <FaApple className="platform-icon" />
                <div className="btn-text" readOnly={true} >
                  <small>Download for</small>
                  <strong>iOS - Coming Soon</strong>
                </div>
              </a>

              <a 
                href={downloadUrl}
                className="download-btn github"
                target="_blank"
                rel="noopener noreferrer"
                readOnly={true}
              >
                <FaGithub className="platform-icon" />
                <div className="btn-text" readOnly={true} >
                  <small>View on</small>
                  <strong>GitHub - Coming Soon</strong>
                </div>
              </a>
            </div>

            {/* App Info */}
            <div className="app-info">
              <div className="info-item">
                <strong>Version</strong>
                <span>1.0.0</span>
              </div>
              <div className="info-item">
                <strong>Size</strong>
                <span>~75 MB</span>
              </div>
              <div className="info-item">
                <strong>Requirements</strong>
                <span>Android 6.0+ / iOS 12.0+</span>
              </div>
              <div className="info-item">
                <strong>Updated</strong>
                <span>November 2025</span>
              </div>
            </div>

            {/* Installation Instructions */}
            <div className="install-instructions">
              <h4>Installation Steps:</h4>
              <ol>
                <li>Download the APK file (Android) or install via TestFlight (iOS)</li>
                <li>Enable "Install from Unknown Sources" if prompted (Android)</li>
                <li>Open the app and grant Bluetooth & Location permissions</li>
                <li>Create an account or log in</li>
                <li>Pair with your ESP32 device and start pedaling!</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Release Notes */}
        <div className="release-notes">
          <h3>Latest Release Notes</h3>
          <br></br>
          <br></br>
          <ul>
            <li><h4>● Initial public release</h4></li>
            <li><h4>● Real-time cycling metrics tracking</h4></li>
            <li><h4>● ESP32 BLE connectivity</h4></li>
            <li><h4>● Activity history and analytics</h4></li>
            <li><h4>● Achievement system</h4></li>
            <li><h4>● Smart workout reminders</h4></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Download
