// src/app/PublicRoutes.js
"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../ImagePro/context/AuthContext";

const PublicRoutes = ({ children }) => {
  const router = useRouter();
  const user = useAuth();

  if(!user){
    router.push("/", { scroll: false });
  }

  return children;
};

export default PublicRoutes;
