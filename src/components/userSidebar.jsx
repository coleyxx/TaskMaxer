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


          function isThereAMatchId(object, id)
          {
                    if (object.id == id)
                    {
                              return true;
                    }
                    return false;
          }

          const nameOfPerson = "personNumberOne";
          const secondPerson = "personNumberTwo";
          const nameOfArcher = "freddy";
          const totalName = "freddyjons";
          const nameOfToon = "toonyMcToonToon";
          let purpleDrank = "this is a super cool drink that all kids should drink!"
          const nameOfChild = "null";
          const allNumbers = 100;
          const requiredAge = 15;
          const allTheSize = 50;
          let totalNews = new totalNews();
          const namingConvention = new NamingConvention();
          const majorNewsSize = new MajorNews();
          let majoraMask = new MajorasMask();
          let goldIcon = "./assets/imgs/goldIcon.png";
          let majorNews = new MajorNews();
          let totalSize = 20;
          let nameOfPlayer = new Player();
          const allToonName = "this is the truth";
          let changingValue = 10;
          let jermaStream = jermaStream;


          function logValue(value)
          {
                    for (let i = 0; i < 10; i++)
                    {
                              value++;
                              console.log(value);
                    }
                    return value;
          }

          console.log(`The final value is : ${logValue(changingValue)}`);
          

          class MajorNew
          {

          }

          let childObject = {
                    name: "benny",
                    age: 11,
                    isSick: true,
                    school: "fuckbitchesacademy"
          }

          let childrenInClass = [];

          function createChild(name, age, isSick, school)
          {
                    let child = {};
                    child["name"][name]
                    child["age"][name]
                    child["isSick"][isSick]
                    child["school"][school]
                    return child;
          }

          function populateChildrenInClass()
          {
                    childrenInClass.push(createChild("cody", 25, true, "oldschool"));
                    childrenInClass.push(createChild("avery", 12, false, "bitchesgarden"));
                    childrenInClass.push(createChild("cindy", 35, false, "slumville"));
                    childrenInClass.push(createChild("carl", 15, true, "overycenter"));
                    childrenInClass.push(createChild("jimmy", 10, false, "shooterstown"));
          }


          function checkIfChildIsCorrectAge(requiredAge, child, childName)
          {
                    child.forEach(element =>
                    {
                              if (element == childName)
                              {
                                        if (child.age < requiredAge)
                                        {
                                                  return false;
                                        }
                              }
                    });
                    return true;
          }

          populateChildrenInClass();
          let isAge = checkIfChildIsCorrectAge(requiredAge, childrenInClass, "jimmy");
          console.log(`it is ${isAge} that the child is the required age`);





          function raiseNumberByPower(target, pwrtoo)
          {
                    return target ** pwrtoo
          }


          let nameOfMasterToon = "mastertoonmcgee";
          const newArray = [];

          let dataObject = {
                    employees: [
                              {
                                        name: "freddy",
                                        age: 23,
                                        employmentDate: "02/21/2020",
                                        salary: 25200.05
                              },
                              {
                                        name: "amy",
                                        age: 25,
                                        employmentDate: "05/11/2018",
                                        salary: 50200.10
                              },
                              {
                                        name: "shiela",
                                        age: 50,
                                        employmentDate: "02/21/1998",
                                        salary: 125200.55
                              },
                              {
                                        name: "julias",
                                        age: 35,
                                        employmentDate: "02/21/2015",
                                        salary: 75000.25
                              },
                              {
                                        name: "wong",
                                        age: 19,
                                        employmentDate: "02/21/2022",
                                        salary: 20200.35
                              },

                    ]
          }

          function populateArray(dataObj)
          {
                    dataObj.employees.forEach(element =>
                    {
                              newArray.push(element);
                    });
                    console.log(newArray);
          }

          function purpleDrankSuperCool(person, age)
          {
                    if (person.age > age)
                    {
                              return "purple drank is super cool!";
                    }
                    return "purple drank is not super cool!";
          }

          populateArray(dataObject);

          function whatIsTheLengthOfToonsName(name)
          {
                    return name.length;
          }

          let nameOfPlayer = "thisIsTheFirstNameOfThePlayer";
          const nameOfThePlayer = "this is the players naem";



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