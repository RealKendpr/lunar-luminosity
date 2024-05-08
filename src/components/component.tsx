import img from "../imgs/img.jpeg";
export function ComponentBox() {
  return (
    <div className="box">
      <h2>Image inside a react component</h2>
      <img src={img.src} alt="" />
    </div>
  );
}
