import "../css/user.css";

export default function userSidebar(props)
{

          // each user will have a unique id that references that user in the database
          // on the client side we will create a data store globally that whenever we want a users data we can just get it from there
          // later on the store will get its data from the database
          function testOnClickValue(e, type)
          {
                    console.log(`The text content for this div is : ${e}`);
                    console.log(`The id for this div is : ${type}`);
                    console.log("this is the message you want");
                    console.log("this is the message");
          }


          // this way we avoid having to pass entire data sites with a drag
          return (
                    <>
                              <div draggable={true} onClick={(e) => testOnClickValue(e.currentTarget.textContent, e.currentTarget.id)} id="master_user">
                                        <div id="box_user">
                                                  <h3>{props.name}</h3>
                                        </div>
                              </div>
                    </>
          )
}