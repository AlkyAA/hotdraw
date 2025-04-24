import {Box, ListItem, Text, UnorderedList} from '@chakra-ui/react'
import React from "react";
import {PageTitle} from "@/components/PageTitle";
import {ContentGrid} from "@/components/ContentGrid";

export default function Europa2016() {
    const menuItems = [
        'Paris V Defeat',
        'Paris V Poverty',
        'Paris + 2 Tourists',
        'Paris + Street Art',
        'Paris + Terror Attack',
        'Paris + Music',
        'Paris Opera',
        'Versailles',
        'Van Gogh',
        'Nice',
        'Italia',
        'Sketches'
    ]

    return (
        <Box w={'100%'}>
            <PageTitle title={'Alky and Karol - France and Italy'}/>
            <Box w={'100%'} textAlign={'justify'} color={'white'}>
                <UnorderedList>
                    <ListItem>Here&apos;s our Itinerary</ListItem>
                    <ListItem>Singapore 9 - 10 July</ListItem>
                    <ListItem>Paris - Ile St Louis 10 - 16 July</ListItem>
                    <ListItem>Versailles 16 - 17 July</ListItem>
                    <ListItem>Saint-Rémy-de-Provence 17 - 20 July</ListItem>
                    <ListItem>Aix-en-Provence 20 - 22 July</ListItem>
                    <ListItem>Saint-Paul-De-Vence 22 - 25 July</ListItem>
                    <ListItem>Nice Monday 25 - Tuesday 26 July</ListItem>
                    <ListItem>Camogli 27 - 29 July</ListItem>
                    <ListItem>Vernazza 29 - 31 July</ListItem>
                    <ListItem>Florence 31 - Aug 2</ListItem>
                    <ListItem>Rome 2 - 5 August</ListItem>
                    <ListItem>Singapore 6 - 7 August</ListItem>
                </UnorderedList>
            </Box>

            <ContentGrid route={'europa2016'} menuItems={menuItems} />
        </Box>

    )
}

