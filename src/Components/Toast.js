import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function TestToast() {
    const notify = () => toast("This is a toast notification !");
    return (
        <div>
            <button onClick={notify}>Notify !</button>
            <ToastContainer />
        </div>
    );
}
