import { getCompanyJobs } from "@/lib/allapi/job";

const RecruiterJobs = async ({ params }) => {
    const { id } = params;

    const jobs = await getCompanyJobs(id);

    console.log("Jobs:", jobs);

    return (
        <div>
            <h1 className="text-3xl font-semibold text-white">
                All Jobs
            </h1>
        </div>
    );
};

export default RecruiterJobs;