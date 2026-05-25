'use client';
import React from 'react';

const page = () => {
    return (
        <div className="flex-1 pt-5 sm:pt-12 sm:pl-16">
            <h1 className="text-2xl font-semibold">Blog List</h1>
            <div className="relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
                <p className="text-lg">Here you can manage all your blogs. You can edit or delete any blog post as needed.</p>
                <table className="w-full border-collapse border border-gray-400 mt-4">
                    <thead>
                        <tr>
                            <th className="border border-gray-400 px-4 py-2">Title</th>
                            <th className="border border-gray-400 px-4 py-2">Author</th>
                            <th className="border border-gray-400 px-4 py-2">Category</th>
                            <th className="border border-gray-400 px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Map through your blog data and render rows here */}
                        {/* Example: */}
                        {/* {blogs.map((blog) => (
                            <tr key={blog._id}>
                                <td className="border border-gray-400 px-4 py-2">{blog.title}</td>
                                <td className="border border-gray-400 px-4 py-2">{blog.author}</td>
                                <td className="border border-gray   -400 px-4 py-2">{blog.category}</td>
                                <td className="border border-gray-400 px-4 py-2">
                                    <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">Edit</button>
                                    <button className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
                                </td>
                            </tr>
                        ))} */}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default page;