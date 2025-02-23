import ModalHook from "../components/modalHook";
import { modalHook } from "../hooks/modal";

function Page1() {
  const { modal, toggle } = modalHook();
  return (
    <div className="">
      <p>Page1</p>
      <button onClick={toggle}>openModal</button>
      {modal && (
        <ModalHook onClose={toggle}>
          <p>ModalHook</p>
        </ModalHook>
      )}
    </div>
  );
}

export default Page1;
