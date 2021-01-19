import React from "react";

import AppTextInput from "./components/TextInput";
import GettingStarted from "./screens/GettingStarted";
import Login from "./screens/Login";
import ResetPassword from "./screens/ResetPassword";
import Signup1 from "./screens/Signup1";
import Signup2 from "./screens/Signup2";
import Fade from "./components/Fade";
import ServiceCategory from "./components/ServiceCategory";
import Screen from "./components/Screen";
import TextInput from "./components/TextInput";
import Home from "./screens/Home";
import IconButton from "./components/IconButton";
import ServiceListItem from "./components/ServiceListItem";
import Services from "./screens/Services";
import ServiceProviderListItem from "./components/ServiceProviderListItem";
import Button from "./components/Button";
import ServiceProviderDetails from "./screens/ServiceProviderDetails";
import Gallery from "./components/Gallery";
import Review from "./components/Review";
import SelectCategory from "./components/SelectCategory";

export default function App() {
  return (
    <Screen>
      <SelectCategory />
    </Screen>
  );
}
