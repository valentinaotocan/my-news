import computer from "../assets/images/icons/computer.png";

function Error() {
  return (
    <div className="flex-fd-c-ai-c w-100">
      <img src={computer} alt="Computer Error" />
      <p className="clr-dark-orange inter-v">Ooooops. Something went wrong!</p>
    </div>
  );
}
export default Error;
