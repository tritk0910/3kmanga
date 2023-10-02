export default function PostForm({ user, userId, open }) {
  return (
    <>
      {user && user?.id === userId && (
        <div className="post-form">
          <div>
            <img
              className="avatar"
              src={user.avatarPath || "/img/avatar/default.png"}
              alt="Avatar"
            />
          </div>
          <button onClick={open}>
            <span>What's on your mind, {user.name}?</span>
          </button>
        </div>
      )}
    </>
  );
}
