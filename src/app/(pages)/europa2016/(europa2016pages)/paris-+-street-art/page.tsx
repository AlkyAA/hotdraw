"use client"
import {Box} from '@chakra-ui/react'
import React from "react";
import {PageTitle} from "@/components/PageTitle";
import {TextLink} from "@/components/TextLink";
import {useGallery} from "@/app/helpers/useGallery";

export default function ParisStreetArt() {
    const streetArt = useGallery({tag: 'street-art'})
    return (
        <Box w={'100%'}>
            <PageTitle title={'Paris + Street Art'}/>
            {streetArt}
            <TextLink path={'/europa2016'} label={'Back'}/>
        </Box>
    )
}
