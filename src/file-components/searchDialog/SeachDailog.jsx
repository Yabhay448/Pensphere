import React, { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CiSearch } from "react-icons/ci";
import MyContext from "@/context/data/MyContext";
import MyState from "@/context/data/MyState";

export function SeachDialog() {
    const [search, setSearch] = useState('');
    const [open, setOpen] = useState(false);
    const { getAllBlog, setGetAllBlog, arr } = useContext(MyContext);

    const handleSearchInputChange = (event) => {
        setSearch(event.target.value);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        filterBlogs(search.toLowerCase());
        setOpen(false); // Close the dialog
    };

    const filterBlogs = (searchTerm) => {
        const filtered = getAllBlog.filter(item => {
            return (
                item.blogs &&
                (item.blogs.title?.toLowerCase().includes(searchTerm) ||
                    item.blogs.content?.toLowerCase().includes(searchTerm) ||
                    item.blogs.category?.toLowerCase().includes(searchTerm))
            );
        });
        setGetAllBlog(filtered);
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch(event);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <CiSearch className='hover:cursor-pointer' style={{ height: "2rem", width: "2rem", color: "white", marginRight: '5px' }} />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Search</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="search" className="text-right">
                            Search For
                        </Label>
                        <Input
                            id="search"
                            value={search}
                            onChange={handleSearchInputChange}
                            onKeyDown={handleKeyDown}
                            defaultValue=""
                            className="col-span-3"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={handleSearch} >Search</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}