import { useState } from "react"
import "../css/sidebar.css"

export default function sidebar()
{
          const [sideBarId, setSideBarId] = useState("master_sidebar_open");

          function sidebarOpenClose()
          {
                    let open = "master_sidebar_open";
                    let closed = "master_sidebar_closed";
                    if (sideBarId == open)
                    {
                              setSideBarId(closed);
                    } else if (sideBarId == closed)
                    {
                              setSideBarId(open);
                    }
          }

          return (
                    <>
                              <div id={sideBarId}>
                                        <div id="master_sidebar_fake">
                                        <button className="arrow_toggle" onClick={() => sidebarOpenClose()}>{`>`}</button>
                                        </div>
                              </div>
                    </>
          )
}