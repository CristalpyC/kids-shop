import { Adminbar } from "../components/admin-section/admin-bar/Adminbar.jsx";
import { ActionsForm } from "../components/admin-section/interactions/ActionsForm.jsx";
import { Portrait } from "../components/admin-section/portrait/Portrait.jsx";

import "./adminStyle.scss";

export const metadata = {
  title: "Kids zone - Admin",
};

export default function Admin() {
  return (
    <>
      <Adminbar />
      <div className="admin__section">
        <ActionsForm/>
        <Portrait />
      </div>
    </>
  );
}
