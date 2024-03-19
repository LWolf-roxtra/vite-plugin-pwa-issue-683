
export const isAppMode = import.meta.env.MODE === "app";

export const isProductionMode = import.meta.env.MODE === "production";

export const isProductionOrAppMode = isProductionMode || isAppMode;