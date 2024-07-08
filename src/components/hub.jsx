import "../css/hub.css";
import Header from "./header";
import BinActive from "./bin-active-tasks";

export default function hub()
{
// this app will be pirate themed for the logo task maxer
// got the idea from the map key for each task level
          return (
                    <>
                              <div id="master_hub">
                                        <Header />
                                        <div id="box_hub_content">
                                        <BinActive />
                                        </div>
                              </div>
                    </>
          )
}