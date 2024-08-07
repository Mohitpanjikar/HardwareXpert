'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/app/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={active} item="Home">
                    </MenuItem>
                </Link>
                <MenuItem
                    setActive={setActive} active={active} item="Our Services"
                >
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/equipment">All Equipment</HoveredLink>
                        <HoveredLink href="/equipment">
                            Industrial Bearings
                        </HoveredLink>
                        <HoveredLink href="/equipment">
                            Hydraulic Pumps
                        </HoveredLink>
                        <HoveredLink href="/equipment">Pneumatic Cylinders</HoveredLink>
                        <HoveredLink href="/equipment">
                            Electric Motors
                        </HoveredLink>
                    </div>
                </MenuItem>
                <Link href={"/careers"}>
                    <MenuItem setActive={setActive} active={active} item="Careers Page">
                    </MenuItem>
                </Link>
                <Link href={"/contacts"}>
                    <MenuItem setActive={setActive} active={active} item="Contact Us">
                    </MenuItem>
                </Link>
            </Menu>
        </div>
    )
}

export default Navbar;
