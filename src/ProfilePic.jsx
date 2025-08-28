function ProfilePic({ src }) {
  return (
    <div
      style={{
        width: "50%",            // 50% of parent width
        aspectRatio: "1 / 1",    // height = width
        borderRadius: "50%",     // circle
        overflow: "hidden",
        margin: "0 auto",        // center horizontally
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "4px solid #4A90E2",  // blue border
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)", // soft shadow
        transition: "transform 0.3s, box-shadow 0.3s", // smooth hover
      }}
      className="profile-pic-container"
    >
      <img
        src={src}
        alt="Profile"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
}

export default ProfilePic;