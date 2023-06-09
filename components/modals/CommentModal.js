import { closeCommentModal } from "@/redux/modalSlice";
import { Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

export default function CommentModal() {
  const isOpen = useSelector((state) => state.modals.commentModalOpen);
  const dispatch = useDispatch();
  return (
    <>
      <Modal
        className="flex justify-center items-center"
        open={isOpen}
        onClose={() => dispatch(closeCommentModal())}
      >
        <div className="w-full h-full rounded-lg bg-black border border-gray-500 sm:w-[600px] sm:h-[386px] text-white sm:p-10 p-4">
          <div className="flex space-x-3">
            <img
              className="w-12 h-12 object-cover rounded-full "
              src="assets/kendall.png"
              alt=""
            />
            <div>
              <div className="flex space-x-1.5">
                <h1 className="font-bold">Kendall</h1>
                <h1 className="text-gray-500">@kendall</h1>
              </div>
              <p className="mt-1">This is awesome</p>
              <h1 className="text-gray-500 text-[15px] mt-2">
                Replying to <span className="text-[#1b9bf0]">@xgs</span>
              </h1>
            </div>
          </div>
          <div>
          <div className="flex space-x-3">
            <img
              className="w-12 h-12 object-cover rounded-full "
              src="assets/kendall.png"
              alt=""
            />
            <div>
              <div className="flex space-x-1.5">
                <h1 className="font-bold">Kendall</h1>
                <h1 className="text-gray-500">@kendall</h1>
              </div>
              <p className="mt-1">This is awesome</p>
              <h1 className="text-gray-500 text-[15px] mt-2">
                Replying to <span className="text-[#1b9bf0]">@xgs</span>
              </h1>
            </div>
          </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
