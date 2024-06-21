import { ThemedLayoutV2, ThemedTitleV2 } from "@refinedev/antd";
import React, { Children } from "react";
import Header from "./Header";

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemedLayoutV2
      Header={Header}
      Title={(titleprops) => <ThemedTitleV2 {...titleprops} text="Refine" />}
    >
      {children}
    </ThemedLayoutV2>
  );
};

export default Layout;
