import {
    Box,
    Image,
    Stack,
    Text
} from '@chakra-ui/react'
import React from "react";
import {PageTitle} from "@/components/PageTitle";
import {TextLink} from "@/components/TextLink";

export default function Dubai() {
    return (
        <Box w={'100%'}>
            <PageTitle title={'Dubai'} subTitle={'10/6/2022'}/>
            <Box w={'100%'} textAlign={'justify'} color={'white'}>
                <Stack>
                    <Text>
                        Really don&apos;t know how to react to this city. Should I be impressed by its wealth and prestige?
                        Should I ignore the enforced poverty of its minions? Those thousand construction workers toiling
                        in an Arabian heat bleached by the desert and covering the city like the breath of an angry
                        monster? What has been built here? An old desert city has been remodelled into the perfect
                        capitalist sideshow. The buildings defy scale and contemporary design, being bigger, better,
                        more modern, more designed than anything else en masse in the developed world. Arriving at our
                        hotel, I looked up to see 2 large photo portraits of the ruling sheiks. Youngish handsome men
                        looking clean and calibrated, wearing the traditional Arabian dress. Their extreme wealth is not
                        questioned in this Emirate.
                    </Text>
                    <Text>
                        How can I use my &apos;liberal&apos; western ideas to describe a completely
                        different world? Is this city just an impression of how modern capitalism can be drawn onto a
                        different canvas, one that has emerged onto a global playground as an impressive imitator with
                        only conflict as common ground. That ancient ongoing battle that looked like one religion
                        against another, or was it more than that? Too hard to tell, just know it has become clothed in
                        perpetual distrust. It would be ingenuous to conclude the wolf has learnt how to dress like the
                        best of sheep. These roles have become interchangeable now.
                    </Text>
                    <TextLink path={'/europa2022/milano'} label={'Next Stop Milano'}/>
                </Stack>
            </Box>
        </Box>

    )
}
