import { ROOT_2 } from "@tanase-j-ww/ts-package";
import React from "react";

export const HelloWorld = () => {
  return (
    <div>
      <p>HelloWorld</p>
    </div>
  );
};

export const GoodbyeWorld = () => {
  return (
    <div>
      <p>Goodbye World</p>
    </div>
  );
};

export const DisplayNumber = ({ num }: { num: number }) => {
  return (
    <div>
      <p>{num}</p>
    </div>
  );
};

export const ROOT2Component = () => {
  return <DisplayNumber num={ROOT_2} />;
};
