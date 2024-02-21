import { Adminbar } from "../components/admin-section/admin-bar/Adminbar.jsx";
import { ActionsForm } from "../components/admin-section/interactions/ActionsForm.jsx";

export const metadata = {
  title: "Kids zone - DELETE",
};

export default function Delete() {
  return (
    <>
      <Adminbar />
      <div>
        <ActionsForm />
      </div>
    </>
  );
}
