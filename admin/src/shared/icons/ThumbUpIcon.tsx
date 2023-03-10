import React from "react";

interface IThumbUpIcon {
  className?: string;
}

const ThumbUpIcon = ({ className }: IThumbUpIcon) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.3999 12.6C2.3999 11.6059 3.20579 10.8 4.1999 10.8C5.19401 10.8 5.9999 11.6059 5.9999 12.6V19.8C5.9999 20.7941 5.19401 21.6 4.1999 21.6C3.20579 21.6 2.3999 20.7941 2.3999 19.8V12.6Z"
        fill="#111827"
      />
      <path
        d="M7.1999 12.4V18.9167C7.1999 19.8258 7.71351 20.6568 8.52659 21.0634L8.5864 21.0933C9.25291 21.4265 9.98785 21.6 10.733 21.6H17.2324C18.3764 21.6 19.3614 20.7925 19.5858 19.6707L21.0258 12.4707C21.3228 10.9856 20.1869 9.60002 18.6724 9.60002H14.3999V4.80002C14.3999 3.47454 13.3254 2.40002 11.9999 2.40002C11.3372 2.40002 10.7999 2.93728 10.7999 3.60002V4.40002C10.7999 5.4386 10.463 6.44916 9.8399 7.28002L8.1599 9.52002C7.53676 10.3509 7.1999 11.3614 7.1999 12.4Z"
        fill="#111827"
      />
    </svg>
  );
};

export default ThumbUpIcon;
