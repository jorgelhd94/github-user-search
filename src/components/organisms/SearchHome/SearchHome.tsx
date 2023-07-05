import GithubLogo from "@components/atoms/logos/GithubLogo/GithubLogo";
import GithubHomeImage from "@components/molecules/GithubHomeImage/GithubHomeImage";

const SearchHome = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full py-24">
      <GithubLogo />
      <GithubHomeImage/>
    </div>
  );
};

export default SearchHome;
