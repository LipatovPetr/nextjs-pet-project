import { addPost } from "@/lib/action";

function ServerAction() {
  return (
    <div>
      <form action={addPost}>
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="desc" name="desc" />
        <input type="text" placeholder="slug" name="slug" />
        <input type="text" placeholder="userID" name="userID" />
        <button>Create</button>
      </form>
    </div>
  );
}

export default ServerAction;
