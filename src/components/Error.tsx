import computer from "../assets/images/icons/computer.png";

function Error() {
  return (
    <>
      <img src={computer} alt="Computer Error" />
      <p style={{ color: "#bb1e1e" }}>Ooooops. Something went wrong!</p>
    </>
  );
}
export default Error;
