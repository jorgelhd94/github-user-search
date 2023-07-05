import style from "./GithubHomeImage.module.css";

const GithubHomeImage = () => (
  <div>
    <img
      src="/github-user-search/home-desktop-light.webp"
      alt="Github-Desktop-Light"
      className={style.githubImageLight + " max-lg:hidden"}
    />
    <img
      src="/github-user-search/home-mobile-light.webp"
      alt="Github-Mobile-Light"
      className={style.githubImageLight + " lg:hidden"}
    />
    <img
      src="/github-user-search/home-desktop-dark.webp"
      alt="Github-Desktop-Dark"
      className={style.githubImageDark + " max-lg:hidden"}
    />
    <img
      src="/github-user-search/home-mobile-dark.webp"
      alt="Github-Mobile-Dark"
      className={style.githubImageDark + " lg:hidden"}
    />
  </div>
);

export default GithubHomeImage;
