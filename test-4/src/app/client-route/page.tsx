"use client";
import { useTheme } from "@/components/theme-provider";
import { serverSideFunction } from "@/server-utils/server-utils";

export default function ClientRoutePage(){
    const theme = useTheme()
    return <h1 style={{color: theme.colors.primary}}>Client Route Page</h1>
}