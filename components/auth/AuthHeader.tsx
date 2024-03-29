import { useRouter } from "next/router";
import { IoArrowBackOutline, IoClose } from "react-icons/io5";

interface IAuthHeader {
  children: string;
  onBack?: () => void;
  onClose?: () => void;
}

const AuthHeader: React.FC<IAuthHeader> = ({ children, onBack, onClose }) => {
  return (
    <div className="flex items-center justify-between p-20 mb-30">
      {onBack && (
        <span className="flex text-36" onClick={onBack}>
          <IoArrowBackOutline />
        </span>
      )}
      <span className="text-36 text-mainColor">{children}</span>
      {onClose && (
        <span className="flex text-36" onClick={onClose}>
          <IoClose />
        </span>
      )}
    </div>
  );
};

export default AuthHeader;
