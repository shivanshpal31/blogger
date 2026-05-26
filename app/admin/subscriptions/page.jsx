"use client";
import axios from "axios";
import React from "react";
import SubsTableItem from "@/components/SubsTableItem";

const page = () => {
  const [emails, setEmails] = React.useState([]);

  const fetchEmails = async () => {
    try {
      const response = await axios.get("/api/email");
      setEmails(response.data.data);
    } catch (error) {
      console.error("Error fetching emails:", error);
    }
  };

  React.useEffect(() => {
    fetchEmails();
  }, []);

  const deleteEmail = async (id) => {
    try {
      const response = await axios.delete("/api/email/", {
        params: { id: mongoId },
      });
      fetchEmails(); // Refresh the list after deletion
      if (response.data.success) {
        toast.success("Email deleted successfully!");
      } else {
        toast.error("Failed to delete email.");
      }
    } catch (error) {
      console.error("Error deleting email:", error);
    }
  };

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 pl-16">
      <h1>All Subscriptions</h1>
      <div className="relative h-[80vh] max-w-[600px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
        <table className="w-full text-sm text-gray-500 mt-4">
          <thead className="text-xs text-left text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="px-6 py-3" scope="col">
                Email Subscription
              </th>
              <th className="hidden sm:block px-6 py-3" scope="col">
                Date
              </th>
              <th className="px-6 py-3" scope="col">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {emails.map((item, index) => (
              <SubsTableItem
                key={index}
                email={item.email}
                mongoId={item._id}
                date={item.date}
                deleteEmail={deleteEmail}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
