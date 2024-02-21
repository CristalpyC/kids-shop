import { Adminbar } from "../components/admin-section/admin-bar/Adminbar.jsx";
import { ActionsForm } from "../components/admin-section/interactions/ActionsForm.jsx";

export const metadata = {
  title: "Kids zone - POST",
};

export default function Post() {
  return (
    <>
      <Adminbar />
      <div>
        <ActionsForm />
      </div>
    </>
  );
}
