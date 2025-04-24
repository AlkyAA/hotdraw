// https://youtu.be/GHW2JcbIpms v=GHW2JcbIpms
"use client"
import { Box } from '@chakra-ui/react'
import React from "react";
import {PageTitle} from "@/components/PageTitle";
import YouTube from "react-youtube";

export default function Sketches() {
    const opts = {
        height: "390",
        width: "640",
        playerVars: {
            autoplay: 1,
        },
    };
    return (
        <Box w={'100%'}>
            <PageTitle title={'Sketches from a Holiday'}/>
            <Box w={'100%'} textAlign={'justify'} color={'white'}>
                <YouTube videoId="GHW2JcbIpms"
                         opts={opts} />
            </Box>
        </Box>
    )
}
