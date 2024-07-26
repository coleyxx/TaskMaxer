import "../css/user.css";

export default function user(props)
{


          return (
                    <>
                              <div id="master_user" onClick={(e) => { props.onHoverCall(e.currentTarget) }}>
                                        <div id="box_user">
                                                  <h3>{props.name}</h3>
                                        </div>
                              </div>
                    </>
          )
}