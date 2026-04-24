import React from "react";

type PortfolioType = "frontend" | "graphicdesign";

export type PortfolioProps = {
  activePortfolio: PortfolioType
}

export type HeaderProps = {
  setActivePortfolio: React.Dispatch<React.SetStateAction<PortfolioType>>;
};
