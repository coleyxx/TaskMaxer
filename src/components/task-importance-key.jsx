import "../css/taskImportanceKey.css"
import images from "../images/images"

export default function taskImportanceKey()
{

          let piratemap = images.piratemap;

          return (
                    <>
                              <div id="master_importance_key">
                                        <div id="pirate_map">
                                                  <img id="pirate_map_pic" src={piratemap} alt="treasure" />
                                        </div>
                                        <div className="importance_key">
                                                  <h3>TASK VALUE KEY</h3>
                                        </div>
                                        <div className="importance_key">
                                                  <img src={images.block_black} alt="black_block" />
                                                  <h5>black = critical</h5></div>
                                        <div className="importance_key">
                                                  <img src={images.block_red} alt="black_block" />
                                                  <h5>red = high</h5></div>
                                        <div className="importance_key">
                                                  <img src={images.block_yellow} alt="black_block" />
                                                  <h5>yellow = medium</h5></div>
                                        <div className="importance_key">
                                                  <img src={images.block_green} alt="black_block" />
                                                  <h5>green = low</h5></div>
                                        <div className="importance_key" id="info_key">
                                                  <h2>INFO</h2>
                                                  <p>
                                                            Each task is assigned a importance / severity level.
                                                            The map key above informs users of the severity level of each task.
                                                            using colors to signafy the importance of each task.
                                                  </p>
                                        </div>
                              </div>
                    </>
          )
}