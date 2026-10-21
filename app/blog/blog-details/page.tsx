import BlogDetails from "@/components/blog-details/BlogDetails";
import BlogDetailsHero from "@/components/blog-details/BlogDetailsHero";


export default function BlogDetailsPage() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <BlogDetailsHero />
            <BlogDetails />
        </div>
    );
}
