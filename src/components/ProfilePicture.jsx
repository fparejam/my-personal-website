import Image from "next/image";
import styles from "../styles/ProfilePicture.module.css";
import my_photo from "../../public/personal_image.jpg";

const ProfilePicture = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src={my_photo}
          alt="Profile picture of Fernando Pareja"
          quality={100}
          className={styles.profileImage}
        />
      </div>
    </div>
  );
};

export default ProfilePicture;
