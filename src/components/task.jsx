import "../css/task.css"
import { useState, useEffect } from "react";

export default function task({ userObj })
{
          let i = 0;
          // i just realized that the components are functions 
          // so re rendering is just calling the function again
          // hence why variables declared in the outermost scope always reset durring new render

          function increment() {
                    i++;
          }

          // array of unique ids
          const [usersAssignedToTask, setUsersAssignedToTask] = useState([]);
          const [userInputAddUser, setUserInputAddUser] = useState("");

          
          

          function addUsersToTask(userobj)
          {
                    setUsersAssignedToTask([...usersAssignedToTask, userobj])
          }

          function storeUserInputAddUser(value)
          {
                    setUserInputAddUser(value);
          }

          function resetStateString(targetStateFunctionName)
          {
                    targetStateFunctionName("");
          }

          function finalizeUser()
          {
                    addUsersToTask(userInputAddUser);
                    resetStateString(setUserInputAddUser);
          }

          useEffect(() =>
          {
                    console.log(`all users assinged to task : ${usersAssignedToTask}`);
          }, [usersAssignedToTask])

          return (
                    <>
                              <div id="master_task">
                                        <div id="box_task">
                                                  <h3>"task"</h3>
                                        </div>
                                        {usersAssignedToTask.map((element) => <h3>{element}</h3>)}
                                        <input onChange={(e) => { storeUserInputAddUser(e.currentTarget.value) }} type="text" />
                                        <button onClick={() => finalizeUser()}>add user</button>
                              </div>
                    </>
          )
}