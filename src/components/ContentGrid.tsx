import React from "react";
import {Box, Grid, GridItem, Image, Stack, Text} from "@chakra-ui/react";
import Link from "next/link";

type Props = {
    menuItems: string[]
    route: string
}

export function ContentGrid({menuItems, route}: Props) {
    const menuBoxes = menuItems.map((item, index) => {
        const path = getPath(item)
        return (
            <GridItem key={`${item}-${index}`}>
                <Link href={`${route}/${path}`}>
                    <Stack alignItems={'flex-start'}>
                        <Image src={`assets/${route}/thumbnails/${path}.jpeg`} alt={`${path} thumbnail`}/>
                        <Text color={'#f353b0'}
                              fontSize={'14px'}
                              fontWeight={500}>{item}
                        </Text>
                    </Stack>
                </Link>
            </GridItem>
        )
    })
    return (
        <Box w={'100%'} borderTop={'1px grey solid'}>
            <Grid templateColumns='repeat(4, 120px)' gap={6} marginTop={'5px'}>
                {menuBoxes}
            </Grid>
        </Box>
    )
}

function getPath(item: string) {
    let path = item.split(' ')
    path = path.map(label => label.toLowerCase())
    return path.join('-')
}
