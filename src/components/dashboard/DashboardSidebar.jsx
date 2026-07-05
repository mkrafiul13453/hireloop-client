import React from "react";
import { Bars, Bell, Envelope, Gear, House, Magnifier, Person } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import { BsLayoutSidebarReverse } from "react-icons/bs";

export function DashboardSidebar() {
    const navItems = [
        { icon: House, label: "Home" },
        { icon: Magnifier, label: "Search" },
        { icon: Bell, label: "Notifications" },
        { icon: Envelope, label: "Messages" },
        { icon: Person, label: "Profile" },
        { icon: Gear, label: "Settings" },
    ];

    const navContent = <nav className="flex flex-col gap-1">
        {
            navItems.map((item) => (
                <button
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white transition-colors hover:bg-zinc-800"
                    type="button"
                >
                    <item.icon className="size-5 text-zinc-400" />
                    {item.label}
                </button>
            ))
        }
    </nav>;


    return (
        <>
        <aside className="hidden lg:block lg:w-72 lg:flex-shrink-0 lg:border-r lg:border-zinc-800">
            {navContent}
        </aside>
            <Drawer>
                <Button
                    className="lg:hidden bg-black text-white rounded-md"
                    variant="solid"
                >
                    <BsLayoutSidebarReverse className="text-xl" />
                </Button>
                <Drawer.Backdrop>
                    <Drawer.Content placement="left">
                        {/* The background and text colors are applied here to the actual container */}
                        <Drawer.Dialog className="bg-black text-white">
                            <Drawer.CloseTrigger />
                            <Drawer.Header>
                                {/* <Drawer.Heading className="text-white">Sidebar</Drawer.Heading> */}
                            </Drawer.Header>
                            <Drawer.Body>
                                {navContent}
                            </Drawer.Body>
                        </Drawer.Dialog>
                    </Drawer.Content>
                </Drawer.Backdrop>
            </Drawer>
        </>
    );
}