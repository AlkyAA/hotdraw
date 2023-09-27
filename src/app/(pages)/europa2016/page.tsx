import {Box, Text} from '@chakra-ui/react'
import React from "react";
import {PageTitle} from "@/components/PageTitle";

export default function Europa2016() {
    return (
        <Box w={'100%'}>
            <PageTitle title={'Alky and Karol - France and Italy'}/>
            <Box w={'100%'} textAlign={'justify'} color={'white'}>
                <Text>
                    Here&apos;s our Itinerary
                    Singapore 9 - 10 July
                    Paris - Ile St Louis 10 - 16 July
                    Versailles 16 - 17 July
                    Saint-Rémy-de-Provence 17 - 20 July
                    Aix-en-Provence 20 - 22 July
                    Saint-Paul-De-Vence 22 - 25 July
                    Nice Monday 25 - Tuesday 26 July
                    Camogli 27 - 29 July
                    Vernazza 29 - 31 July
                    Florence 31 - Aug 2
                    Rome 2 - 5 August
                    Singapore 6 - 7 August
                </Text>
            </Box>
        </Box>

    )
}

