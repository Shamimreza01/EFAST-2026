import FacebookIcon from "../Icon/FacebookIcon";
import LinkedInIcon from "../Icon/LinkedInIcon";
import TwitterIcon from "../Icon/TwitterIcon";
export default function SocialMediaLink({ theme, confData }) {
  console.log(confData);
  return (
    <div className="flex items-center gap-4">
      <a
        href="https://twitter.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className={`p-2 rounded-full ${
          theme === "light"
            ? "bg-blue-100 text-blue-600"
            : "bg-gray-800 text-cyan-300"
        }`}
      >
        <TwitterIcon className="w-6 h-6" />
      </a>
      <a
        href={`${confData.conference.facebook}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`p-2 rounded-full ${
          theme === "light"
            ? "bg-blue-100 text-blue-600"
            : "bg-gray-800 text-cyan-300"
        }`}
      >
        <FacebookIcon className="w-6 h-6" />
      </a>
      <a
        href={`${confData.conference.facebook}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`p-2 rounded-full ${
          theme === "light"
            ? "bg-blue-100 text-blue-600"
            : "bg-gray-800 text-cyan-300"
        }`}
      >
        <LinkedInIcon className="w-6 h-6" />
      </a>
    </div>
  );
}
