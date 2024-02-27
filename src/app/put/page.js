import { Adminbar } from "../components/admin-section/admin-bar/Adminbar.jsx";
import { PutForm } from "../components/admin-section/form/PUT/Put.jsx";
import { ActionsForm } from "../components/admin-section/interactions/ActionsForm.jsx";
import "./putStyle.scss";

export const metadata = {
  title: "Kids zone - PUT",
};

export default function Put() {
  return (
    <>
      <Adminbar />
      <div className="put__section">
        <ActionsForm />
        <PutForm />
      </div>
    </>
  );
}
