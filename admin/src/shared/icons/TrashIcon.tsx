import React from "react";

interface ITrashIcon {
  className?: string;
}

const TrashIcon = ({ className }: ITrashIcon) => {
  return (
    <svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.8001 0.399994C7.34557 0.399994 6.93006 0.656797 6.72679 1.06334L5.85846 2.79999H1.8001C1.13736 2.79999 0.600098 3.33725 0.600098 3.99999C0.600098 4.66274 1.13736 5.19999 1.8001 5.19999L1.8001 17.2C1.8001 18.5255 2.87461 19.6 4.2001 19.6H13.8001C15.1256 19.6 16.2001 18.5255 16.2001 17.2V5.19999C16.8628 5.19999 17.4001 4.66274 17.4001 3.99999C17.4001 3.33725 16.8628 2.79999 16.2001 2.79999H12.1417L11.2734 1.06334C11.0701 0.656797 10.6546 0.399994 10.2001 0.399994H7.8001ZM5.4001 7.59999C5.4001 6.93725 5.93736 6.39999 6.6001 6.39999C7.26284 6.39999 7.8001 6.93725 7.8001 7.59999V14.8C7.8001 15.4627 7.26284 16 6.6001 16C5.93736 16 5.4001 15.4627 5.4001 14.8V7.59999ZM11.4001 6.39999C10.7374 6.39999 10.2001 6.93725 10.2001 7.59999V14.8C10.2001 15.4627 10.7374 16 11.4001 16C12.0628 16 12.6001 15.4627 12.6001 14.8V7.59999C12.6001 6.93725 12.0628 6.39999 11.4001 6.39999Z"
        fill="#CC3030"
      />
    </svg>
  );
};

export default TrashIcon;
