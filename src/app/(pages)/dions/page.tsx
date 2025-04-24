import {
    Box, Flex, Grid, GridItem, Image, Text
} from '@chakra-ui/react'
import React from "react";
import {PageTitle} from "@/components/PageTitle";

import Link from "next/link";

export default function Dions() {
    function getPath(item: string) {
        let path = item.split(' ')
        path = path.map(label => label.toLowerCase())
        return path.join('-')
    }

    const menuItems = [
        'Tyrenneum',
        'Bag Show',
        'Weird Flex',
        'Pub Room',
        'Takete'
    ]
    const menuBoxes = menuItems.map((item) => {
        const path = getPath(item)
        return (
        <GridItem key={item}>
            <Link href={`dions/${path}`}>
                <Flex>
                    <Image src={`assets/dions/${path}.png`} alt={`${path} thumbnail`} marginRight={'10px'}/>
                    <Text color={'#f353b0'}
                        fontSize={'14px'}
                        fontWeight={500}>{item}
                    </Text>
                </Flex>
            </Link>
        </GridItem>
    )})

    return (
        <Box width={'100%'}>
            <PageTitle
                title={`Dion's Art Work`}/>
            <Box w={'100%'} borderTop={'1px grey solid'}>
                <Grid templateColumns='repeat(3, 180px)' gap={6}  marginTop={'5px'}>
                    {menuBoxes}
                </Grid>
            </Box>
        </Box>

    )
}
