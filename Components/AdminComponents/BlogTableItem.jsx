import Image from "next/image";
import { assets } from "@/Assets/assets";
import React from "react";

const BlogTableItem = ({ author, authorImg, title, date, mongoId, deleteBlog }) => {
  const BlogDate = new Date(date);
  return (
    <tr className="items-center bg-white border-b">
      <th
        className=" gap-3 hidden sm:flex py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
        scope="row"
      >
        <Image
          src={authorImg ? authorImg : assets.profile_icon}
          alt="author"
          width={40}
          height={40}
          className="rounded-full"
        />
      </th>
      <td className="py-4 px-6">{author ? author : "No author available"}</td>
      <td className="py-4 px-6">{title ? title : "No title available"}</td>
      <td className="py-4 px-6">
        {date ? BlogDate.toLocaleDateString() : "No date available"}
      </td>
      <td className="py-4 px-6 cursor-pointer" onClick={() => deleteBlog(mongoId)}>
        x
      </td>
    </tr>
  );
};

export default BlogTableItem;
