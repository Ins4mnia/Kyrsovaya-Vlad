"use client";
import { NextPage } from "next";
import s from "./Modal.module.scss";
import { CircleX } from "lucide-react";

interface Props {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: NextPage<Props> = ({ children, onClose }) => {
  return (
    <div className={s.Modal__overlay} onClick={onClose}>
      <div className={s.Modal} onClick={(e) => e.stopPropagation()}>
        <CircleX className={s.Modal__close} onClick={onClose} />
        {children}
      </div>
    </div>
  );
};

export default Modal;
