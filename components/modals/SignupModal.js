import { openSignupModal } from "@/redux/modalSlice";
import { Modal } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SignupModal() {

//   const [isOpen, setisOpen] = useState(false);
//   const handleClose = () => setisOpen(false);
//   const handleOpen = () => setisOpen(true)

const isOpen = useSelector(state => state.modals.SignupModalOpen)
const dispatch = useDispatch()
console.log(isOpen)

  return (
    <>
      <button className="bg-white text-black w-[160px] rounded-full h-[40px] hover:bg-[#cbd2d7]"
      onClick={() => dispatch(openSignupModal())}
      >
        Sign Up
      </button>

      <Modal open={isOpen} 
    //   onClose={handleClose} 
      className="flex justify-center items-center">
        <div className="w-[400px] h-[200px] bg-white">Sign up over here</div>
      </Modal>
    </>
  );
}
