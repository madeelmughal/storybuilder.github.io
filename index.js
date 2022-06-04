function Nav() {
  const nav_main = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0px 2px 2px 0px rgba(231, 230, 230, 0.75)",
    WebkitBoxShadow: "0px 2px 2px 0px rgba(231, 230, 230, 0.75)",
    MozBoxShadow: "0px 2px 2px 0px rgba(231, 230, 230, 0.75)",
    height: "70px",
    backgroundColor: "blue",
    color: "white",
  };
  const nav_logo = {
    marginLeft: "20px",
  };
  return (
    <nav className="nav--main" style={nav_main}>
      <h3 className="nav--logo" style={nav_logo}>
        Story Builder
      </h3>
    </nav>
  );
}
function Card(props) {
  // console.log(props.location);
  const style = {
    boxShadow: "px 2px 2px 0px rgba(199,195,195,0.75)",
    WebkitBoxShadow: "0px 2px 2px 0px rgba(199,195,195,0.75)",
    MozBoxShadow: "0px 2px 2px 0px rgba(199,195,195,0.75)",
    display: "flex",
    padding: "20px",
    width: "auto",
    minWidth: "0",
  };
  return (
    <div>
      <div style={style}>
        <div>
          <img
            src={props.img}
            style={{ width: "300px", height: "300px", borderRadius: "20px" }}
          />
        </div>
        <div style={{ marginLeft: "20px", marginTop: "20px" }}>
          <span className="alert alert-success" role="alert">
            <b>{props.location}</b>
          </span>
          <span style={{ marginLeft: "50px" }}>
            <u>View on map</u>
          </span>
          <hr style={{ width: "300px" }} />
          <h3 style={{ marginTop: "20px" }}>
            {props.id} - {props.title}
          </h3>
          <p>
            <b>{new Date().toDateString()}</b><span className="badge text-bg-secondary" style = {{marginLeft : "50px"}}> by: Muhammad Adeel</span>
          </p>
          <br />
          <p>{props.desp}</p>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        height: "auto",
        backgroundColor: "blue",
        display: "flex",
        color: "white",
        justifyContent: "space-between",
        alignItems: "center",
        padding: " 70px 120px",
        marginTop : "200px"
      }}
    >
      <div>
        <h5>Line 1 Items are Here</h5>
        <ul>
          <li>Item 1 </li>
          <li>Item 2 </li>
          <li>Item 3 </li>
          <li>Item 4 </li>
          <li>Item 5 </li>
        </ul>
      </div>
      <div>
        <h5>Line 2 Items are Here</h5>
        <ul>
          <li>Item 1 </li>
          <li>Item 2 </li>
          <li>Item 3 </li>
          <li>Item 4 </li>
          <li>Item 5 </li>
        </ul>
      </div>
      <div>
        <h5>Line 3 Items are Here</h5>
        <ul>
          <li>Item 1 </li>
          <li>Item 2 </li>
          <li>Item 3 </li>
          <li>Item 4 </li>
          <li>Item 5 </li>
        </ul>
      </div>
    </footer>
  );
}

function App() {
  const data = [];
  const [thisState, newState] = React.useState(data);
  function addNew() {
    const addNewState = newState((prevState) => [
      ...prevState,
      {
        id: prevState.length + 1,
        location: "Pakistan",
        Title: "Beauty of Pakistan- Land of Pure soul",
        Desp: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        imag: "./R.jpg",
      },
    ]);
  }
  console.log(thisState);
  const total_stories = thisState.length;
  // const item = data.map((da) => (
  const item = thisState.map((da) => (
    <Card
      id={da.id}
      key={da.id}
      location={da.location}
      title={da.Title}
      desp={da.Desp}
      img={da.imag}
    />
  ));
  return (
    <div>
      <Nav />
      <button
        onClick={addNew}
        style={{
          margin: "30px",
          backgroundColor: "blue",
          color: "White",
          border: "4px double #cccccc",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        Add Stoties
        <span className="badge text-bg-secondary">
          {total_stories}
        </span>
        
      </button>
      <span style={{ display: "inline-block", width: "600px" }}>
        Total stories: {total_stories}
      </span>

      {item}
      <Footer />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
