import {
    Box,
    Stack,
    Text
} from '@chakra-ui/react'
import React from "react";
import {PageTitle} from "@/components/PageTitle";
import {TextLink} from "@/components/TextLink";

export default function Amsterdam() {
    return (
        <Box w={'100%'}>
            <PageTitle title={'Picnic with Jan'} subTitle={'18/7/2022'}/>
            <Box w={'100%'} textAlign={'justify'} color={'white'}>
                <Stack>
                    <Text>
                        It&quot;s OK to visit a city, a place, but when it contains a friend then that place suddenly has a
                        soul. You become connected because that person is there. Jan Hontscharenko, a resident of
                        Amsterdam, was a special person in our lives over 30 years ago. He was part of the family for a
                        while, and then time and circumstance separated us. We reconnected with this man again here and
                        it was really wonderful. Those 30 years disappeared and we were friends again, discussing,
                        laughing and debating again. Jan showed us the city sites and we ate raw herring too! On another
                        day we took a train out of town to the country. We biked along its canals and by ways, visited a
                        real windmill and even had a picnic under a tree. Jan is an artist, published art critic and an
                        author so he&quot;s no slouch discussing art and culture.
                    </Text>
                    <TextLink path={'/europa2022/roma'} label={'Last Stop Roma'}/>
                </Stack>
            </Box>
        </Box>

    )
}

