import { useEffect, useState } from "react"
import "../css/sidebar.css"
import User from "../components/user";

export default function sidebar()
{
          // they are returning an array first index is the value second is the function since js arrays are dynamic
          const [sideBarId, setSideBarId] = useState("master_sidebar_open");

          // create state array holding all users
          const [allUsers, setAllUsers] = useState([
                    {
                              name: "cindy",
                              reactId: 0,
                              employeeId: 0
                    },
                    {
                              name: "rob",
                              reactId: 1,
                              employeeId: 1
                    },
                    {
                              name: "barkley",
                              reactId: 2,
                              employeeId: 2
                    },
                    {
                              name: "amos",
                              reactId: 3,
                              employeeId: 3
                    },
                    {
                              name: "watcher",
                              reactId: 4,
                              employeeId: 4
                    },
          ]);

          function addNewUser(userObj)
          {
                    setAllUsers([...allUsers, userObj]);
          }

          // use effect is for when you need to get the real updated state values
          // since it will only be called once the render is 100% done
          useEffect(() =>
          {
                    return logAllUsers();
          }, [allUsers])


          function logAllUsers()
          {
                    console.log(allUsers);
          }

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
                                                  {
                                                            allUsers.map((element) => { return <User key={element.reactId} name={element.name} /> })
                                                  }
                                                  <button className="arrow_toggle" onClick={() => sidebarOpenClose()}>{`>`}</button>
                                                  <button onClick={() => logAllUsers()}>log all users</button>
                                        </div>
                              </div>
                    </>
          )
}