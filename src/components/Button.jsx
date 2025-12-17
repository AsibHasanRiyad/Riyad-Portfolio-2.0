import React from "react";
import clsx from "clsx";

const Button = ({ children, svg: Svg, imgSrc, href, onClick }) => {
  const baseClasses =
    "flex justify-center cursor-pointer items-center gap-2.5 px-4 py-2 rounded-md border-none outline outline-offset-[-3px] transition-colors duration-400";
  const colorClasses =
    "bg-secondary/40 outline-secondary/10 origin:center cursor-pointer text-white hover:bg-primary hover:text-[#007a74]";

  const content = (
    <>
      {Svg && (
        <Svg className="w-6 h-6 fill-current transition-colors duration-400" />
      )}
      {imgSrc && (
        <img src={imgSrc} alt="icon" className="w-6 h-6 object-contain" />
      )}
      <span className="font-medium  transition-colors duration-400">
        {children}
      </span>
    </>
  );

  if (href) {
    const isMailto = href.startsWith("mailto:");

    return (
      <a
        href={href}
        className={clsx(baseClasses, colorClasses)}
        {...(!isMailto ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={clsx(baseClasses, colorClasses)}>
      {content}
    </button>
  );
};

export default Button;
