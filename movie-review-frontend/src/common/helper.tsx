import post1 from "../assets/images/post1.jpg";
import post2 from "../assets/images/post2.jpg";
export const getImage = (key: string) => (key === "post1.jpg" ? post1 : post2);
