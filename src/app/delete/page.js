import { Adminbar } from "../components/admin-section/admin-bar/Adminbar.jsx";
import { DeleteForm } from "../components/admin-section/form/DELETE/DeleteForm.jsx";
import { ActionsForm } from "../components/admin-section/interactions/ActionsForm.jsx";
import "./deleteStyle.scss";

export const metadata = {
  title: "Kids zone - DELETE",
};

export default function Delete() {
  return (
    <>
      <Adminbar />
      <div className="delete__section">
        <ActionsForm />
        <DeleteForm />
      </div>
    </>
  );
}
