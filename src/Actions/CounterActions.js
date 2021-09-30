export const Plus = () => {
  return {
    type: "PLUS"
  };
};

export const Minus = () => {
  return {
    type: "MINUS"
  };
};

export const ML = () => {
  return {
    type: "ML"
  };
};

export const ZERO = () => {
  return {
    type: "ZERO"
  };
};

export const PlusFive = number => {
  return {
    type: "PLUS_FIVE",
    payload: number
  };
};
