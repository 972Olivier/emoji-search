const Line = (props) => {
  const search = props.find;
  const data = props.data;
  const mouseEvent = props.mouseEvent;
  const setMouseEvent = props.setMouseEvent;
  // console.log("this is data in line==>", data[0].title);

  return data.map((element, index) => {
    //-------------------------Regex pour filtrer le json en fonction de la recherche
    //-------------------------renvoie pour chaque element trouvé la div de l'émoji avec array.map
    const regex = new RegExp(`${search}`, "i");
    const result = regex.test(element.title); //------s'il trouve une correspondance "true"

    // console.log(result);
    // console.log(index);
    return (
      result === true && (
        <div
          id={`div${index}`}
          className="hover"
          onMouseOver={() => {
            setMouseEvent("visible");
          }}
          onMouseOut={() => {
            setMouseEvent("hidden");
          }}
        >
          <div className="emoji">
            <p>
              <span> {element.symbol}</span>
            </p>
            <p>{element.title}</p>
          </div>
          <p style={{ visibility: mouseEvent }}>Click to copy !</p>
        </div>
      )
    );
  });
};

export default Line;
