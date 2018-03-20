import React from "react";
import DishSearchContainer from "../containers/DishSearchContainer";

function SearchPage() {
  const url = new URL(window.location.href);
  const type = url.searchParams.get("type") || "";
  const keywords = url.searchParams.get("keywords") || "";
  const page = url.searchParams.get("page");
  const pageNumber = page ? parseInt(page, 10) : 0;

  return (
    <DishSearchContainer type={type} keywords={keywords} page={pageNumber} />
  );
}

export default SearchPage;
