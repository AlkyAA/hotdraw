import {
    Box,
    Image,
    Stack,
    Text
} from '@chakra-ui/react'
import React from "react";
import {TextLink} from "@/components/TextLink";
import {PageTitle} from "@/components/PageTitle";


export default function AmsterdamCon() {
    return (
        <Box w={'100%'}>
            <PageTitle title={'Amsterdam Con'} subTitle={'18/7/2022'}/>
            <Box w={'100%'} textAlign={'justify'} color={'white'}>
                <Stack>
                    <Text>
                        If you have the inclination, read this message conversation re booking an apartment in
                        Amsterdam. It turned out to be a scam. It starts 1st July and ends 11th July, an hour after we
                        landed in the city. Note the clever manipulation..... or maybe the dumb sucker at the other end.
                    </Text>
                    <Text>
                        Post Script:
                        The taxi driver couldn&apos;t find the (non existing) address and had to leave us in the street, bags
                        and all. We found a nearby hotel a block away, used their wi-fi and booked alternate
                        accommodation for the night. The next day AirBnB agreed it was a con and refunded the dosh -
                        Amsterdam prices are hefty right now - peak season.
                    </Text>
                    <Text>
                        Post Post Script:
                        Karol had smelled a rat after the date change thing and the story about the kid. She was in my
                        ear about a plan B before we got to Amsterdam...she should have used sign language like the
                        Italian women trying to get through their thick husband&apos;s heads. What did that great comic with
                        the big nose once say? &quot;There&apos;s a sucker born every minute!&quot;
                    </Text>
                    <Image src={'/assets/europa2022/amsterdam-con-airbnb.png'} alt={'con'}/>
                    <TextLink path={'/europa2022/amsterdam/amsterdam-jan'} label={'Visiting Jan'}/>
                </Stack>
            </Box>
        </Box>

    )
}

