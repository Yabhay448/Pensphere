import MyContext from '@/context/data/MyContext'
import Layout from '@/file-components/layout/Layout'
import { Button } from '@material-tailwind/react'
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Loader from '../../../file-components/loader/Loader'

const Dashboard = () => {
    const context = useContext(MyContext);
    const navigate = useNavigate();
    const logout = async () => {
        try {
            await signOut(auth); // Log the user out
            toast.success('Logout successful');

            // Optionally, clear any local storage or user data if needed
            localStorage.removeItem('admin');

            // Navigate to the login page after logout
            navigate('/');
        } catch (error) {
            console.error('Logout failed', error);
            toast.error('Logout failed');
        }
    };
    const { mode, getAllBlog, loading } = context;
    console.log(getAllBlog)
    return (
        <div>
            <Layout>
                <div className="py-10">
                    <div
                        className="flex flex-wrap justify-start items-center lg:justify-center gap-2 lg:gap-10 px-4 lg:px-0 mb-8">
                        <div className="left">
                            <img
                                className=" w-40 h-40  object-cover rounded-full border-2 border-pink-600 p-1"
                                src={'https://cdn-icons-png.flaticon.com/128/3135/3135715.png'} alt="profile"
                            />
                        </div>
                        <div className="right">
                            <h1
                                className='font-bold text-2xl mb-2'
                                style={{ color: mode === 'dark' ? 'white' : 'black' }}
                            >Arun Kumar
                            </h1>
                            <h2
                                style={{ color: mode === 'dark' ? 'white' : 'black' }} className="font-semibold">
                                Software Developer
                            </h2>
                            <h2
                                style={{ color: mode === 'dark' ? 'white' : 'black' }} className="font-semibold">arun.kumar.cd.civ21@itbu.ac.in
                            </h2>
                            <h2
                                style={{ color: mode === 'dark' ? 'white' : 'black' }} className="font-semibold">
                                <span>Total Blog : </span>  {getAllBlog.length}
                            </h2>
                            <div className=" flex gap-2 mt-2">
                                <Link to={'/create-blog'}>
                                    <div className=" mb-2">
                                        <Button
                                        >Create Blog
                                        </Button>
                                    </div>
                                </Link>
                                <div className="mb-2">
                                    <Button onClick={logout}
                                    >Logout
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Line  */}
                    <hr className={`border-2
                 ${mode === 'dark'
                            ? 'border-gray-300'
                            : 'border-gray-400'}`
                    }
                    />
                    {/* Table  */}
                    <div className="">
                        <div className=' container mx-auto px-4 max-w-7xl my-5' >
                            <div className="relative overflow-x-auto shadow-md sm:rounded-xl">
                                {/* table  */}
                                <table className="w-full border-2 border-white shadow-md text-sm text-left text-gray-500 dark:text-gray-400" >
                                    {/* thead  */}
                                    <thead
                                        style={{
                                            background: mode === 'dark'
                                                ? 'white'
                                                : 'rgb(30, 41, 59)'
                                        }}
                                        className="text-xs ">
                                        <tr>
                                            <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} scope="col" className="px-6 py-3">S.No.
                                            </th>
                                            <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} scope="col" className="px-6 py-3">Thumbnail
                                            </th>
                                            <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} scope="col" className="px-6 py-3">Title
                                            </th>
                                            <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} scope="col" className="px-6 py-3">Category
                                            </th>
                                            <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} scope="col" className="px-6 py-3">Date
                                            </th>
                                            <th style={{ color: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }} scope="col" className="px-6 py-3">Action
                                            </th>
                                        </tr>
                                    </thead>
                                    {/* tbody  */}
                                    {
                                        getAllBlog.length > 0
                                            ?
                                            <>
                                                {getAllBlog.map((item, index) => {
                                                    const { thumbnail, date } = item;
                                                    console.log(item)
                                                    return (
                                                        <tbody>
                                                            <tr className=" border-b-2" style={{ background: mode === 'dark' ? 'rgb(30, 41, 59)' : 'white' }}>
                                                                {/* S.No   */}
                                                                <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                                    {index + 1}.
                                                                </td>
                                                                {/* Blog Thumbnail  */}
                                                                <th style={{ color: mode === 'dark' ? 'white' : 'black' }} scope="row" className="px-6 py-4 font-medium ">
                                                                    {/* thumbnail  */}
                                                                    <img className='w-16 rounded-lg'
                                                                        src={thumbnail} alt="thumbnail" />
                                                                </th>
                                                                {/* Blog Title  */}
                                                                <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                                    {item.blogs.title}
                                                                </td>
                                                                {/* Blog Category  */}
                                                                <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                                    {item.blogs.category}
                                                                </td>
                                                                {/* Blog Date  */}
                                                                <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                                    {date}
                                                                </td>
                                                                {/* Delete Blog  */}
                                                                <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                                    <Button className=' px-4 py-1 rounded-lg text-white font-bold bg-red-500'>
                                                                        Delete
                                                                    </Button>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    )
                                                })}</>
                                            :
                                            <>
                                                <h1>Not Found</h1>
                                            </>
                                    }
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>

        </div>
    )
}

export default Dashboard
