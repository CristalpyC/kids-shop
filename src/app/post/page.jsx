import { Adminbar } from "../components/admin-section/admin-bar/Adminbar.jsx";
import { ActionsForm } from "../components/admin-section/interactions/ActionsForm.jsx";
import { PostForm } from "../components/admin-section/form/POST/PostForm.jsx";
import "./poststyle.scss";

export const metadata = {
  title: "Kids zone - POST",
};

export default function Post() {
  return (
    <>
      <Adminbar />
      <div className="post__section">
        <ActionsForm />
        <PostForm />
      </div>
    </>
  );
}
