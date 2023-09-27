import {
    Box,
    Image,
    Stack,
    Text
} from '@chakra-ui/react'
import React from "react";
import {PageTitle} from "@/components/PageTitle";
import {TextLink} from "@/components/TextLink";

export default function Travel() {
    return (
        <Box w={'100%'}>
            <PageTitle title={'Welcome...'} color={'#999'}/>
            <Box w={'100%'} textAlign={'justify'} color={'white'}>
                    <Stack>
                        <Text>Travel doesn&apos;t start after midnight when you wake to take a cab to the airport through
                            ghosted city streets. It doesn&apos;t even start after you have shuffled the zig zag customs
                            queue miles while noticing the strange others. I think it really starts at that moment when
                            the hyper engines have dragged you off the surface into an uncertain sky. It&apos;s also a lot
                            like being sucked into the big black mouth of a vacuum cleaner. Sucked and chucked off into
                            travel. Travel has started now. The familiar things will disappear and you will swap them
                            for anything that vaguely suits as a replacement. What you eat, where you sleep, how you
                            greet the others.
                        </Text>
                        <Text>
                            I said travel but now I know that word could easily be replaced by a word like boredom.
                            You&apos;re trapped by travel. You need to find ways to ignore it but it&apos;s hard.
                        </Text>
                        <Image src={'/assets/europa2022/travel-main.png'} w={'266px'} alt={'travel'}/>
                        <TextLink path={'/europa2022/dubai'} label={'First Stop Dubai'}/>
                    </Stack>
            </Box>
        </Box>

    )
}

