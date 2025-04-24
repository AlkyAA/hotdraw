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
        const imagePath = getImagePath(item)
        return (
            <GridItem key={`${item}-${index}`}>
                <Link href={`${route}/${path}`}>
                    <Stack alignItems={'flex-start'}>
                        <Image src={`assets/${route}/thumbnails/${imagePath}.jpeg`} alt={`${path} thumbnail`}/>
                        <Text color={'#f353b0'}
                              fontSize={'14px'}
                              fontWeight={500}>{item}
                        </Text>
                    </Stack>
                </Link>
            </GridItem>
        )
    })
    /*
    * width={{
                        base: '100%',
                        mobile: '450px',
                        sm: '600px',
                        md: '750px'
                    }}
                    * */
    return (
        <Box w={'100%'} borderTop={'1px grey solid'}>
            <Grid
                templateColumns={{
                    base: 'repeat(2, 110px)',
                    mobile: 'repeat(3, 110px)',
                    sm: 'repeat(4, 100px)',
                    md: 'repeat(5, 110px)'
                }}
                gap={{
                    base: 6,
                    sm: 5,
                    md: 4
                }}
                marginTop={'5px'}>
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

function getImagePath(item: string) {
    let path = item.split(' ')
    let pathStr = path.join('-')
    path = pathStr.split('/')
    path = path.map(label => label.toLowerCase())
    return path.join('-')
}
