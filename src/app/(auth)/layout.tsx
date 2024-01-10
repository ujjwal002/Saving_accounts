import Image from "next/image";
import { Toaster } from "react-hot-toast";
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout_container">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="layout_left">
        <img src="/assets/3567810.jpg" alt="" className="image_left" />
      </div>
      <div className="layout_right">{children}</div>
    </div>
  );
}
