"use client";
import React, { ButtonHTMLAttributes, memo } from "react";
import "./ButtonComponents.scss";
import Image, { StaticImageData } from "next/image";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  logo?: StaticImageData;
  rightLogo?: StaticImageData;
  customStyles?: string;
  handler?: React.MouseEventHandler<HTMLButtonElement>;
  alt?: string;
  rightAlt?: string;
  loading?: boolean;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  iconOnly?: boolean;
}

const MainButtonComponent = ({
  handler,
  logo,
  rightLogo,
  customStyles = "",
  alt = "Button logo",
  rightAlt = "Button right logo",
  loading = false,
  variant = "primary",
  size = "medium",
  iconOnly = false,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button
      onClick={handler}
      className={`btn ${customStyles} btn--${variant} btn--${size}`}
      disabled={loading || rest.disabled}
      {...rest}
    >
      {loading ? (
        <span className="btn__spinner"></span>
      ) : (
        <>
          {logo && (
            <Image
              width={24}
              height={24}
              className="btn__logo"
              src={logo}
              alt={alt}
            />
          )}
          {!iconOnly && <span className="btn__children">{children}</span>}
          {rightLogo && (
            <Image
              width={24}
              height={24}
              className="btn__logo--right"
              src={rightLogo}
              alt={rightAlt}
            />
          )}
        </>
      )}
    </button>
  );
};
export default MainButtonComponent;
