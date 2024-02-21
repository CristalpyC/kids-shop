import { Adminbar } from "../components/admin-section/admin-bar/Adminbar.jsx";
import { ActionsForm } from "../components/admin-section/interactions/ActionsForm.jsx";

export const metadata = {
  title: "Kids zone - PUT",
};

export default function Put() {
  return (
    <>
      <Adminbar />
      <div>
        <ActionsForm />
      </div>
    </>
  );
}
