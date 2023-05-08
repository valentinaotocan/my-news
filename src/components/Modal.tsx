import shapeLine from "../assets/images/shape-line.png";

function Modal() {
  return (
    <div className="modal app-padding w-100">
      <h2 className="modal__heading inter-v inter-v--bold">
        Make MyNews your homepage
      </h2>
      <p className="modal__paragraph inter-v">
        Every day discover what's trending on the internet!
      </p>
      <img src={shapeLine} alt="Shape Line" />
      <button className="btn btn--white inter-v inter-v--bold">Get</button>
      <p className="modal__no-thanks inter-v inter-v--bold">No, thanks</p>
    </div>
  );
}
export default Modal;
