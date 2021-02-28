import { ActivityIndicator, View } from "react-native";
import { Style } from "./style";
import React, { PropsWithChildren, ReactElement } from "react";
import { useSelector } from "react-redux";

export function IndicatorView(props: PropsWithChildren<{}>): ReactElement {
  const busy = useSelector(state => state.ui.busy);

  return (
    <>
      {props.children}
      {
        renderIf(busy)(() =>
          <View style={Style.container} key="indicator">
            <ActivityIndicator size={"large"} color={"red"} />
          </View>
        )
      }
    </>
  );
}
