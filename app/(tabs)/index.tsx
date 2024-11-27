import React, {useState, useEffect} from "react";
import { View, ScrollView } from "react-native";
import PropsDinamis from "./pages/propsDinamis";
import StateDinamis from "./pages/stateDinamis";
import Communication from "./pages/Communication";

const App = () => {
  const [isShow, SetIsShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      SetIsShow(false);
    }, 6000)
  }, []);
  return (
    <View>
      <ScrollView>
        {/* <PropsDinamis /> */}
        {/* <StateDinamis  /> */}
        {/* <Communication/> */}
      </ScrollView>
    </View>
  )
}

export default App;