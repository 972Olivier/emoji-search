const Line = (props) => {
  const search = props.find;
  const data = props.data;
  const mouseEvent = props.mouseEvent;
  const setMouseEvent = props.setMouseEvent;
  // console.log("this is data in line==>", data[0].title);

  const list = data.map((element) => {
    //-------------------------Regex pour filtrer le json en fonction de la recherche
    //-------------------------renvoie pour chaque element trouvé la div de l'émoji avec array.map
    const regex = new RegExp(`${search}`, "i");
    const result = regex.test(element.title); //------s'il trouve une correspondance "true"

    // console.log(result);
    if (result === true) {
      return (
        <div
          className="hover"
          onMouseOver={() => {
            setMouseEvent("Click to copy !"); // fait l'action sur toutes les "div"
          }}
          onMouseOut={() => {
            setMouseEvent(""); // fait l'action sur toutes les divs
          }}
        >
          <div className="emoji">
            <p>
              <span> {element.symbol}</span>
            </p>
            <p>{element.title}</p>
          </div>
          <p>{mouseEvent}</p>
        </div>
      );
    }
    return result; // <=== j'ai mis cela pour enlever l'erreur ci-dessous provisoirement
    //Line 8:35:  Array.prototype.map() expects a value to be returned at the end of arrow function
  });
  // console.log(list);
  return list;
};

export default Line;
