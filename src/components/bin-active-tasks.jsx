import Sidebar from "./sidebar";
import "../css/binActiveTasks.css";
import Task from "../components/task";
import TaskImportanceKey from "./task-importance-key";

export default function binActiveTasks()
{


          return (
                    <>
                              <div id="master_active_tasks">
                                        <Sidebar />
                                        <div id="box_active_tasks">
                                                  <TaskImportanceKey />
                                                  <Task />
                                        </div>
                              </div>
                    </>
          )
}