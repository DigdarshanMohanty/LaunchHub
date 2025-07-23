"use server"

import { auth } from "@/auth";
import { parseServerActionResponse } from "./utils";
import slugify from "slugify";
import { writeClient } from "@/sanity/lib/write-client";
import { parse } from "path";

export const createPitch = async (
    state:any,
    form:FormData,
    pitch:string
    ) => {
    const session = await auth();
    if(!session)
        return parseServerActionResponse({
            status: "ERROR",
            error: "You must be logged in to create a pitch.",
        });
        const {title,description,category,link} = Object.fromEntries(Array.from(form).filter(([key]) => key !== "pitch"));

        const slug = slugify(title as string, {
            lower: true,
            strict: true,
        });
        try {
            const startup = {
                title,
                description,
                category,
                image: link,
                slug: {
                    current: slug,
                    _type: slug,
                },
                author: {
                    _ref: session?.id,
                    _type: "reference",
                },
                pitch,
            }

            const result = await writeClient.create({
                _type: "startup",
                ...startup,
            });

            return parseServerActionResponse({
                status: "SUCCESS",
                ...result,
                error: '',
            })
    
        } catch (error) {
            console.log("Error creating pitch:", error);
            return parseServerActionResponse({
                status: "ERROR",
                error: JSON.stringify(error),
            });
        }
}
