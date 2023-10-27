import React from "react";
import { Link } from "react-router-dom";

const AddBlog = () => {
  return (
    <section class="dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full md:mt-0 sm:max-w-3xl xl:p-0 dark:bg-gray-800">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-start text-transparent bg-clip-text px-3 bg-gradient-to-r from-cyan-500 to-blue-700 text-xl font-bold leading-tight tracking-tight md:text-2xl dark:text-white">
              Add your own journey
            </h1>
            <form class="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  for="title"
                  class="text-start pl-3 block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                >
                  Title
                </label>
                <input
                  type="title"
                  name="title"
                  id="title"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter title"
                  required="true"
                />
              </div>
              <label
                for="title"
                class="text-start pl-3 block mb-2 text-lg font-medium text-gray-900 dark:text-white"
              >
                Upload your journey view
              </label>
              <input
                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="blog-image_help"
                id="blogImage"
                type="file"
              />
              <div>
                <label
                  for="description"
                  class="text-start pl-3 block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter a description of your blog..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-gradient-to-r from-cyan-800 to-blue-700 hover:from-[#006f6f7a] hover:to-[#00249b9c] hover:text-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Add blog
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddBlog;
