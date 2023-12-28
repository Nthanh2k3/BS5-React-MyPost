import { Link } from "react-router-dom";
export default function Sidebar() {
    return (
        <>
            {/* Sidenav */}
            <nav
                id="sidenav-8"
                className=" z-[1035] w-60 h-max -translate-x-full bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-zinc-800"
                data-te-sidenav-init=""
                data-te-sidenav-hidden="false"
                data-te-sidenav-accordion="true"
                style={{
                    position: "sticky",
                    zIndex: 1,
                    top: 100,
                    left: 0,
                    scrollBehavior: "smooth",
                }}
            >
                <ul
                    className="relative m-0 list-none px-[0.2rem] pb-12"
                    data-te-sidenav-menu-ref=""
                >
                    <li className="relative"></li>
                    <li className="relative pt-4">
                        <span className="px-6 py-4 text-base font-bold uppercase text-black font-quick">
                            Manage
                        </span>
                        <Link
                            className="flex cursor-pointer items-center truncate rounded-[5px] px-6 py-[0.45rem] text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10 no-underline"
                            to="officeManager"
                        >
                            <span className="ml-2 mr-4 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
                                <i class="fa-solid fa-user h-5 w-5"></i>
                                <span className="text-sm font-quick mr-10">Office Manager</span>
                            </span>
                        </Link>
                        <Link
                            className="flex cursor-pointer items-center truncate rounded-[5px] px-6 py-[0.45rem] text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10 no-underline"
                            to="warehouseManager"
                        >
                            <span className="ml-2 mr-4 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
                                <i class="fa-solid fa-user h-5 w-5"></i>
                                <span className="text-sm font-quick mr-10">Warehouse Manager</span>
                            </span>
                        </Link>
                        <Link
                            className="flex cursor-pointer items-center truncate rounded-[5px] px-6 py-[0.45rem] text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10 no-underline"
                            to="office"
                        >
                            <span className="ml-2 mr-4 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
                                <i class="fa-solid fa-building h-5 w-5"></i>
                                <span className="text-sm font-quick mr-10">Office</span>
                            </span>
                        </Link>
                        <Link
                            className="flex cursor-pointer items-center truncate rounded-[5px] px-6 py-[0.45rem] text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10 no-underline"
                            to="warehouse"
                        >
                            <span className="ml-2 mr-4 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
                                <i class="fa-solid fa-truck h-5 w-5"></i>
                                <span className="text-sm font-quick mr-10">Warehouse</span>
                            </span>
                        </Link>
                    </li>
                    <li className="relative pt-4">
                        <span className="px-6 py-4 text-base font-bold uppercase text-black  font-quick">
                            Statistics
                        </span>
                        <Link
                            className="flex cursor-pointer items-center truncate rounded-[5px] px-6 py-[0.45rem] text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10 no-underline"
                            to="statistic/all"
                        >
                            <span className="ml-2 mr-4 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
                                <i class="fa-solid fa-earth-americas h-5 w-5"></i>
                                <span className="text-sm font-quick mr-10">All</span>
                            </span>
                        </Link>
                        <Link
                            className="flex cursor-pointer items-center truncate rounded-[5px] px-6 py-[0.45rem] text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10 no-underline"
                            to="statistic/office"
                        >
                            <span className="ml-2 mr-4 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
                                <i class="fa-solid fa-building h-5 w-5"></i>
                                <span className="text-sm font-quick mr-10">Office Orders</span>
                            </span>
                        </Link>
                        <Link
                            className="flex cursor-pointer items-center truncate rounded-[5px] px-6 py-[0.45rem] text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10 no-underline"
                            to="statistic/warehouse"
                        >
                            <span className="ml-2 mr-4 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
                                <i class="fa-solid fa-truck h-5 w-5"></i>
                                <span className="text-sm font-quick mr-10">Warehouse Orders</span>
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
