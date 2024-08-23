/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import AuthContext from "@/core/contexts/AuthContext";
import { makeTerraxActor } from "@/core/services/actorLocatorService";
import { getPropertyCategory } from "@/core/utils/propertyUtils";
import { useContext, useEffect, useState } from "react";

export default function usePropertiesViewModel() {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState(null);
  const [properties, setProperties] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProperties();
  }, [category]);

  async function getProperties() {
    try {
      setIsLoading(true);
      const terraxActor = makeTerraxActor();
      const response = await terraxActor.getProperties({
        name: keyword,
        category: category ? [getPropertyCategory(category)] : [],
      });
      setIsLoading(false);

      console.log(response);

      if (response.Ok) {
        return setProperties(response.Ok);
      }

      console.error("Somethin went wrong with message,", response);
    } catch (err) {
      console.error("Somethin went wrong with message,", err);
    }
  }

  function handleChangeCategory(value) {
    setCategory(value);
  }

  return {
    keyword,
    handleChangeCategory,
    category,
    setKeyword,
    properties,
    getProperties,
    isLoading,
  };
}
