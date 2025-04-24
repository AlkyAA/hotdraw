"use client"

import {Box} from "@chakra-ui/react";
import React, {useEffect} from "react";
import {imageGallery} from "@/utils/utils";
import {PageTitle} from "@/components/PageTitle";

type Props = {
    title?: string
    subTitle?: string
    tag: string
}
export function useGallery({title, subTitle, tag}:Props) {
    useEffect(() => {
        const productGallery = imageGallery({tag, containerId: '#image-gallery'});
        if(productGallery) {
            productGallery.render();
        }
    }, [tag]);
    return (
        <Box
            height={'100%'}>
            {title && <PageTitle title={title} subTitle={subTitle}/>}
                <Box w={'100%'} textAlign={'justify'} color={'white'}>
                    <Box id={'image-gallery'} />
                </Box>
        </Box>
    )
}
export function useGallery2({title, subTitle, tag}:Props) {
    useEffect(() => {
        const productGallery = imageGallery({tag, containerId: '#image-gallery2'});
        if(productGallery) {
            productGallery.render();
        }
    }, [tag]);
    return (
        <Box
            height={'100%'}>
            {title && <PageTitle title={title} subTitle={subTitle}/>}
            <Box w={'100%'} textAlign={'justify'} color={'white'}>
                <Box id={'image-gallery2'} />
            </Box>
        </Box>
    )
}
