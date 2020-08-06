import React from "react";
import data from "../data/mobiledata.json";
import "../App.css";

function Details(props) {
  let Mob_details = data.profile[props.location.data2.id];
  return (
    <div className="Name">
      <div className="card Image">
        <img src={Mob_details.details["detail-image"]}></img>
      </div>
      <div className="card det">
        <h2>Specifications</h2>
        <p></p>
        <div className="container-fluid">
          <div
            className="card shadow p-3 mb-5 bg-white rounded"
            style={{
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <table className="table-responsive table-striped w-auto">
              <tbody>
                <tr>
                  <td>
                    <b>Model Number</b>
                  </td>
                  <td>{Mob_details.details.ModelNumber}</td>
                </tr>
                <tr>
                  <td>
                    <b>Model Name</b>
                  </td>
                  <td>{Mob_details.details.ModelName}</td>
                </tr>
                <tr>
                  <td>
                    <b>Color</b>
                  </td>
                  <td>{Mob_details.details.color}</td>
                </tr>
                <tr>
                  <td>
                    <b>SIM Type</b>
                  </td>
                  <td>{Mob_details.details["Sim-Type"]}</td>
                </tr>
                <tr>
                  <td>
                    <b>Hybrid Sim Slot</b>
                  </td>
                  <td>{Mob_details.details.HybridSimSlot}</td>
                </tr>
                <tr>
                  <td>
                    <b>TouchScreen</b>
                  </td>
                  <td>{Mob_details.details.TouchScreen}</td>
                </tr>
                <tr>
                  <td>
                    <b>OTG Compatible</b>
                  </td>
                  <td>{Mob_details.details.Otg}</td>
                </tr>
                <tr>
                  <td>
                    <b>Quick Charging</b>
                  </td>
                  <td>{Mob_details.details.Quick_charging}</td>
                </tr>
                <tr>
                  <td>
                    <b>Display Size</b>
                  </td>
                  <td>{Mob_details.details.DisplaySize}</td>
                </tr>
                <tr>
                  <td>
                    <b>Resolution</b>
                  </td>
                  <td>{Mob_details.details.Resolution}</td>
                </tr>
                <tr>
                  <td>
                    <b>Resolution Type</b>
                  </td>
                  <td>{Mob_details.details["Resolution-Type"]}</td>
                </tr>
                <tr>
                  <td>
                    <b>GPU</b>
                  </td>
                  <td>{Mob_details.details.GPU}</td>
                </tr>
                <tr>
                  <td>
                    <b>HD game Support</b>
                  </td>
                  <td>{Mob_details.details.HDGame}</td>
                </tr>
                <tr>
                  <td>
                    <b>Operating System</b>
                  </td>
                  <td>{Mob_details.details.os}</td>
                </tr>
                <tr>
                  <td>
                    <b>Processor Type</b>
                  </td>
                  <td>{Mob_details.details.ProcessorType}</td>
                </tr>
                <tr>
                  <td>
                    <b>Processor Core</b>
                  </td>
                  <td>{Mob_details.details.Processorcore}</td>
                </tr>
                <tr>
                  <td>
                    <b>Primary Clock speed</b>
                  </td>
                  <td>{Mob_details.details.PrimaryClockSpeed}</td>
                </tr>
                <tr>
                  <td>
                    <b>Secondary Clock Speed</b>
                  </td>
                  <td>{Mob_details.details.SecpndaryClockSpeed}</td>
                </tr>
                <tr>
                  <td>
                    <b>Internal Memory</b>
                  </td>
                  <td>{Mob_details.details.InternalStorage}</td>
                </tr>
                <tr>
                  <td>
                    <b>RAM</b>
                  </td>
                  <td>{Mob_details.details.Ram}</td>
                </tr>
                <tr>
                  <td>
                    <b>Expandable Storage</b>
                  </td>
                  <td>{Mob_details.details["Expandable Storage"]}</td>
                </tr>
                <tr>
                  <td>
                    <b>Memory card Slot Type</b>
                  </td>
                  <td>{Mob_details.details["Memory Card Slot Type"]}</td>
                </tr>
                <tr>
                  <td>
                    <b>Call Log Memory</b>
                  </td>
                  <td>{Mob_details.details["Call Log Memory"]}</td>
                </tr>
                <tr>
                  <td>
                    <b>Primary Camera</b>
                  </td>
                  <td>{Mob_details.details.PrimaryCamera}</td>
                </tr>
                <tr>
                  <td>
                    <b>Primary Camera Features</b>
                  </td>
                  <td>{Mob_details.details.PrimaryCameraFeatures}</td>
                </tr>
                <tr>
                  <td>
                    <b>Secondary Camera</b>
                  </td>
                  <td>{Mob_details.details.SecondaryCamera}</td>
                </tr>
                <tr>
                  <td>
                    <b>Flash</b>
                  </td>
                  <td>{Mob_details.details.Flash}</td>
                </tr>
                <tr>
                  <td>
                    <b>Full HD Recording</b>
                  </td>
                  <td>{Mob_details.details["Full HD Recording"]}</td>
                </tr>
                <tr>
                  <td>
                    <b>Video Recording</b>
                  </td>
                  <td>{Mob_details.details["Video Recording"]}</td>
                </tr>
                <tr>
                  <td>
                    <b>Image Editor</b>
                  </td>
                  <td>{Mob_details.details["Image Editor"]}</td>
                </tr>
                <tr>
                  <td>
                    <b>Dual Camera Lens</b>
                  </td>
                  <td>{Mob_details.details["Dual Camera Lens"]}</td>
                </tr>
                <tr>
                  <td>
                    <b>Call Wail/Hold</b>
                  </td>
                  <td>{Mob_details.details["Call Wait/Hold"]}</td>
                </tr>
                <tr>
                  <td>
                    <b>Hands Free</b>
                  </td>
                  <td>{Mob_details.details["Hands Free"]}</td>
                </tr>
                <tr>
                  <td>
                    <b>Vedio call Support</b>
                  </td>
                  <td>{Mob_details.details["Video Call Support"]}</td>
                </tr>
                <tr>
                  <td>
                    <b>Call Divert</b>
                  </td>
                  <td>{Mob_details.details["Call Divert"]}</td>
                </tr>
                <tr>
                  <td>
                    <b>Phone Book</b>
                  </td>
                  <td>{Mob_details.details["Phone Book"]}</td>
                </tr>
                <tr>
                  <td>
                    <b>Call Timer</b>
                  </td>
                  <td>{Mob_details.details["Call Timer"]}</td>
                </tr>
                <tr>
                  <td>
                    <b>Speaker Phone</b>
                  </td>
                  <td>{Mob_details.details["Speaker Phone"]}</td>
                </tr>
                <tr>
                  <td>
                    <b>Speed Dailing</b>
                  </td>
                  <td>{Mob_details.details["Speed Dialing"]}</td>
                </tr>
                <tr>
                  <td>
                    <b>Logs</b>
                  </td>
                  <td>{Mob_details.details.Logs}</td>
                </tr>
                <tr>
                  <td>
                    <b>Network Type</b>
                  </td>
                  <td>{Mob_details.details["Network Type"]}</td>
                </tr>
                <tr>
                  <td>
                    <b>Supported Networks</b>
                  </td>
                  <td>{Mob_details.details["Supported Networks"]}</td>
                </tr>
                <tr>
                  <td>
                    <b>Internet Connectivity</b>
                  </td>
                  <td>{Mob_details.details["Internet Connectivity"]}</td>
                </tr>
                <tr>
                  <td>
                    <b>GPRS</b>
                  </td>
                  <td>{Mob_details.details.GPRS}</td>
                </tr>
                <tr>
                  <td>
                    <b>Bluetooth Support</b>
                  </td>
                  <td>{Mob_details.details["Bluetooth Support"]}</td>
                </tr>
                <tr>
                  <td>
                    <b>Bluetooth Version</b>
                  </td>
                  <td>{Mob_details.details["Bluetooth Version"]}</td>
                </tr>
                <tr>
                  <td>
                    <b>WI-FI</b>
                  </td>
                  <td>{Mob_details.details["Wi-Fi"]}</td>
                </tr>
                <tr>
                  <td>
                    <b>Wi-Fi HotSpot</b>
                  </td>
                  <td>{Mob_details.details["Wi-Fi HotSpot"]}</td>
                </tr>
                <tr>
                  <td>
                    <b>Map Support</b>
                  </td>
                  <td>{Mob_details.details["Map Support"]}</td>
                </tr>
                <tr>
                  <td>
                    <b>GPS Support</b>
                  </td>
                  <td>{Mob_details.details["GPS Support"]}</td>
                </tr>
                <tr>
                  <td>
                    <b>SIM Size</b>
                  </td>
                  <td>{Mob_details.details["SIM Size"]}</td>
                </tr>
                <tr>
                  <td>
                    <b>Social Networking Phone</b>
                  </td>
                  <td>{Mob_details.details["Social Networking Phone"]}</td>
                </tr>
                <tr>
                  <td>
                    <b>Instant Message</b>
                  </td>
                  <td>{Mob_details.details["Instant Message"]}</td>
                </tr>
                <tr>
                  <td>
                    <b>Business Phone</b>
                  </td>
                  <td>{Mob_details.details["Business Phone"]}</td>
                </tr>
                <tr>
                  <td>
                    <b>Removable Battery</b>
                  </td>
                  <td>{Mob_details.details["Removable Battery"]}</td>
                </tr>
                <tr>
                  <td>
                    <b>MMS</b>
                  </td>
                  <td>{Mob_details.details.MMS}</td>
                </tr>
                <tr>
                  <td>
                    <b>SMS</b>
                  </td>
                  <td>{Mob_details.details.SMS}</td>
                </tr>
                <tr>
                  <td>
                    <b>KeyPad</b>
                  </td>
                  <td>{Mob_details.details.Keypad}</td>
                </tr>
                <tr>
                  <td>
                    <b>Graphics PPI</b>
                  </td>
                  <td>{Mob_details.details["Graphics PPI"]}</td>
                </tr>
                <tr>
                  <td>
                    <b>Predictive Text Input</b>
                  </td>
                  <td>{Mob_details.details["Predictive Text Input"]}</td>
                </tr>
                <tr>
                  <td>
                    <b>Sensors</b>
                  </td>
                  <td>{Mob_details.details.Sensors}</td>
                </tr>
                <tr>
                  <td>
                    <b>Series</b>
                  </td>
                  <td>{Mob_details.details.Series}</td>
                </tr>
                <tr>
                  <td>
                    <b>Browser</b>
                  </td>
                  <td>{Mob_details.details.Browser}</td>
                </tr>
                <tr>
                  <td>
                    <b>GPS-Type</b>
                  </td>
                  <td>{Mob_details.details["GPS Type"]}</td>
                </tr>
                <tr>
                  <td>
                    <b>Music Player</b>
                  </td>
                  <td>{Mob_details.details["Music Player"]}</td>
                </tr>
                <h5>Battery Features</h5>
                <tr>
                  <td>
                    <b>Battery Capacity</b>
                  </td>
                  <td>{Mob_details.details["Battery Capacity"]}</td>
                </tr>
                <tr>
                  <td>
                    <b>Battery Type</b>
                  </td>
                  <td>{Mob_details.details.BatteryType}</td>
                </tr>
                <tr>
                  <td>
                    <b>Width</b>
                  </td>
                  <td>{Mob_details.details.Width}</td>
                </tr>
                <tr>
                  <td>
                    <b>Height</b>
                  </td>
                  <td>{Mob_details.details.Height}</td>
                </tr>
                <tr>
                  <td>
                    <b>Depth</b>
                  </td>
                  <td>{Mob_details.details.Depth}</td>
                </tr>
                <tr>
                  <td>
                    <b>Weight</b>
                  </td>
                  <td>{Mob_details.details.Weight}</td>
                </tr>
                <tr>
                  <td>
                    <b>Warranty Summary</b>
                  </td>
                  <td>{Mob_details.details["Warranty Summary"]}</td>
                </tr>
                <tr>
                  <td>
                    <b>Domestic Warranty</b>
                  </td>
                  <td>{Mob_details.details["Domestic Warranty"]}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
