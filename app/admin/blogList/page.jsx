'use client';
import React from 'react';
import axios from 'axios';
import BlogTableItem from '../../../Components/AdminComponents/BlogTableItem';

const page = () => {

    const [blogs, setBlogs] = React.useState([]);

    const fetchBlogs = async () => {
        try {
            const response = await axios.get('/api/blogs');
            setBlogs(response.data.blogs);
        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
    }

    const deleteBlog = async (mongoId) => {
        try {
            await axios.delete(`/api/blogs`, { params: { id: mongoId } });
            fetchBlogs(); // Refresh the blog list
        } catch (error) {
            console.error('Error deleting blog:', error);
        }
        toast.success(response.data.message);
    };

    React.useEffect(() => {
        fetchBlogs();
    }, []);

    return (
        <div className="flex-1 pt-5 sm:pt-12 sm:pl-16">
            <h1 className="text-2xl font-semibold">Blog List</h1>
            <div className="relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
                <p className="text-lg">Here you can manage all your blogs. You can edit or delete any blog post as needed.</p>
                <table className="w-full text-sm text-gray-500 mt-4">
                    <thead className="text-sm text-gray-700 text-left uppercase bg-gray-50">
                        <tr>
                            <th scope='col' className="hidden sm:block px-6 py-3">Author</th>
                            <th scope='col' className="px-6 py-3">Author Name</th>
                            <th scope='col' className="px-6 py-3">Blog Title</th>
                            <th scope='col' className="px-6 py-3">Date</th>
                            <th scope='col' className="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs.map((blog, index) => (
                            <BlogTableItem
                                key={index}
                                author={blog.author}
                                authorImg={blog.authorImg}
                                title={blog.title}
                                date={blog.date}
                                mongoId={blog._id}
                                deleteBlog={deleteBlog}
                            />
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default page;