import RkItemBox101 from "./RkItemBox101.jsx";
import RkItemBox102 from "./RkItemBox102.jsx";

export default function Home(props) {
  return (
    <div>

  {/*rkItemBox101*/}
    <h2 className="item-id">rkItemBox101</h2>
    <div className="row">
      <div className="col-sm-3">
        <RkItemBox101 />
      </div>
      <div className="col-sm-9">39</div>
    </div>

  {/*rkItemBox102*/}
    <h2 className="item-id">rkItemBox102</h2>
    <div className="row">
      <div className="col-sm-3">
        <RkItemBox102 />
      </div>
      <div className="col-sm-9">39</div>
    </div>

    </div>
  );
}