import "../css/user.css";

export default function userTask()
{

          // each user will have a unique id that references that user in the database
          // on the client side we will create a data store globally that whenever we want a users data we can just get it from there
          // later on the store will get its data from the database


          // this way we avoid having to pass entire data sites with a drag


          // game plan to make this drag drop work
          // 1. add the unique id to the event data object
          // drag that over 
          // consume the event data in the dropzone
          // update the list holding the items with the new user by reading the unique id and generating a new userTask component that reads from the store using the id we have

          return (
                    <>
                              {/* <div draggable={true} onDragStart={(e)=>{"call a drag function, pass the event + the unique id"}} id="master_user"> */}
                              <div draggable={true} id="master_user">
                                        <div id="box_user">
                                                  <h3>user</h3>
                                        </div>
                              </div>
                    </>
          )
}