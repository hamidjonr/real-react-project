import React, { useMemo, useState } from "react";
import Connections from "../Pages/Connections";
import { getCurrentUser } from "../api/FirestoreAPIs";
import Topbar from "../components/common/Topbar";

export default function ConnectionLayout() {
  const [currentUser, setCurrentUser] = useState({});

  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);
  return (
    <div>
      <Topbar currentUser={currentUser} />
      <Connections currentUser={currentUser} />
    </div>
  );
}
