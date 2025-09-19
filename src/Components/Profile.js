import "./Styling/Profile.css"

export const Profile = () => {
  return (
    <div class="profile-container">

      <div class="profile-card">
        <h2>Account Settings</h2>

        <div class="profile-info">
          <img
            src="./profile.png.jpg"
            alt="Profile"
            class="profile-img"
          />
          <div class="profile-details">
            <h3>Marry Doe</h3>
            <p class="email">Marry@Gmail.Com</p>
          </div>
        </div>

        <p class="description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
    </div>
  );
}
