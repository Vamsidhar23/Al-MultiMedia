"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("1207089a-2c89-4331-864f-33cd2602e400");
  }, []);

  return null;
};