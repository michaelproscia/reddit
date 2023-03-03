import comment from "../assets/comment.svg";
import clock from "../assets/clock.svg";
import user from "../assets/user.svg";
import upvote from "../assets/upvote.svg";

function Post({
  title,
  score,
  author,
  numComments,
  created,
  postImage,
  subredditName,
}) {
  function convertUTC(utcTimeString) {
    // Convert the UTC time string to a Date object
    const date = new Date(utcTimeString * 1000);

    // Get the number of milliseconds since the date
    const milliseconds = Date.now() - date.getTime();

    // Define the time intervals in milliseconds
    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;
    const week = 7 * day;
    const month = 30 * day;
    const year = 365 * day;

    // Calculate the time elapsed in each interval
    const intervals = [
      { label: "year", time: year },
      { label: "month", time: month },
      { label: "week", time: week },
      { label: "day", time: day },
      { label: "hour", time: hour },
      { label: "minute", time: minute },
    ];

    for (let i = 0; i < intervals.length; i++) {
      const interval = intervals[i];
      const elapsed = Math.floor(milliseconds / interval.time);
      if (elapsed >= 1) {
        const suffix = elapsed === 1 ? "" : "s";
        return `${elapsed} ${interval.label}${suffix} ago`;
      }
    }

    return "just now";
  }
  return (
    <div className="flex flex-col items-center text-center gap-4 mb-8 m-auto shadow shadow-slate-500 p-5 xl:p-2 xl:max-w-6xl">
      <h4 className="font-bold text-xl">{title}</h4>
      <h5>{subredditName}</h5>
      {/*{post_image && <img className="object-cover" src={post_image} alt="" />}*/}
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-1">
          <img className="h-3" src={upvote} alt="" />
          <p className="text-xs md:text-sm">{score}</p>
        </div>
        <div className="flex items-center gap-1">
          <img className="h-3" src={user} alt="" />
          <p className="text-xs md:text-sm">{author}</p>
        </div>
        <div className="flex items-center gap-1">
          <img className="h-3" src={clock} alt="" />
          <p className="text-xs md:text-sm">{convertUTC(created)}</p>
        </div>
        <div className="flex items-center gap-1">
          <img src={comment} alt="" />
          <p className="text-xs md:text-sm">{numComments}</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
