import { FaAndroid, FaApple, FaDownload, FaGithub } from 'react-icons/fa'
import './Download.css'

function Download() {
  // Replace with your actual download link
  const downloadUrl = 'https://drive.google.com/file/d/1RgZmWQIQMOek8cd5bn7brhYIQ1qqrBUi/view?usp=sharing'

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
                <img 
                  src="/assets/images/qr-sv.png" 
                  alt="SIKADVOLTZ QR Code"
                  style={{ width: "100%", height: "auto", maxWidth: "200px" }}
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

              <div 
                className="download-btn ios disabled"
              >
                <FaApple className="platform-icon" />
                <div className="btn-text">
                  <small>Download for</small>
                  <strong>iOS - Coming Soon</strong>
                </div>
              </div>

              <div 
                className="download-btn github disabled"
              >
                <FaGithub className="platform-icon" />
                <div className="btn-text">
                  <small>View on</small>
                  <strong>GitHub - Coming Soon</strong>
                </div>
              </div>
            </div>

            {/* App Info */}
            <div className="app-info">
              <div className="info-item">
                <strong>Version</strong>
                <span>1.0</span>
              </div>
              <div className="info-item">
                <strong>Size</strong>
                <span>75 MB</span>
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
                <li>Pair with your Microcontroller device and start pedaling!</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Release Notes */}
        <div className="release-notes">
          <h3>Latest Release Notes</h3>
          <ul>
            <li>Initial public release</li>
            <li>Real-time cycling metrics tracking</li>
            <li>ESP32 BLE connectivity</li>
            <li>Activity history and analytics</li>
            <li>Achievement system</li>
            <li>Smart workout reminders</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Download
