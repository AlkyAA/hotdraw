import {
    Box
} from '@chakra-ui/react'
import React from "react";
import {PageTitle} from "@/components/PageTitle";
import {ContentGrid} from "@/components/ContentGrid";

export default function Europa2022() {

    const menuItems = [
        'Travel',
        'Dubai',
        'Milano',
        'Como',
        'Sardinia',
        'Neptunes Grotto',
        'Pompeii',
        'Amalfi',
        'Palermo',
        'Amsterdam Con',
        'Amsterdam',
        'Amsterdam Picnic',
        'Roma'
    ]

    return (
        <Box width={'100%'}>
            <PageTitle
                title={'Europa 2022'}
                subTitle={'10/6/2022'}/>
            <ContentGrid route={'europa2022'} menuItems={menuItems} />
        </Box>

    )
}
