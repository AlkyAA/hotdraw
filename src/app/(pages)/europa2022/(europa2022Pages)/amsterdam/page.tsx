"use client"
import {
    Box,
    Stack,
    Text
} from '@chakra-ui/react'
import React, {useEffect} from "react";
import {TextLink} from "@/components/TextLink";
import {PageTitle} from "@/components/PageTitle";
import {imageGallery} from "@/utils/utils";


export default function Amsterdam() {
    useEffect(() => {
        // @ts-ignore
        const productGallery = imageGallery({tag: 'amsterdam', containerId: '#image-gallery'});
        productGallery.render();
    }, []);
    const con = <TextLink path={'amsterdam/amsterdam-con'} label={'fake accommodation booking'} />
    return (
        <Box w={'100%'}>
            <PageTitle title={'Amsterdam'} subTitle={'18/7/2022'}/>
            <Box w={'100%'} textAlign={'justify'} color={'white'}>
                <Stack>
                    <Text>
                        Arriving in Amsterdam, we were met with a {con}, our bags and our good
                        selves ending up on the street. A lady inside noticed us and came to the door. &quot;Oh I&quot;m making
                        dinner, come in and use my wifi.&quot; She then took a look at the taxi driver, stopped in her tracks
                        and said &quot;Wow!, You look great.&quot; He did, 3-piece suit with daring accessories and fabric linings
                        singing off his dark Caribbean skin. He spoke melodically, like a song. Played cool music on the
                        radio.
                    </Text>
                    <Text>
                        We quickly got alternate digs nearby and went off to discover this lovely, ordered city. We were
                        here for a week, time to kick back at the tail end of our 6 week sojourn. This city has the
                        ability to give you want you need, even indulge you to your limits and beyond, all with a kind
                        of timeless grace, an accommodation built from the ability to slowly, carefully, hold back the
                        sea, to build a country, a nation, from reclaimed land. This pragmatism is a Dutch thing - their
                        clear headed logic allows for a city and a people that get on with things, not only practically
                        but beautifully. Carefully looking at some buildings standing uniformly along the criss cross of
                        canals you might see that some have leaned or sagged or begun to lurch drunkenly. No problem,
                        fill in the gaps, sure up the foundations built on mud and give it a lick of paint. Job done.
                    </Text>
                    <Text>
                        I did indulge myself with visits to modern masters and even found some new non-fungible ones
                        too. In the Museum Quarter there is a large open grass field. If you sit there you will be
                        surrounded by more galleries and museums that you could ever visit in a week. We saw Van Gough,
                        Rembrandt, Picasso, Banksy, Warhol, Basquiat...too many to list. People use this vast space to
                        lay around in, to eat, chat, play music in, to do nothing, do something, even to do naughty
                        something.
                    </Text>
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
                    <Text>
                        I could live here. It&quot;s not often you can say that but at least I know I&quot;ll be back. This trip
                        has taught us that the weather is changing and it was overall way too hot a time in Europe. We
                        didn&quot;t let that get in the way but will choose cooler months next time. Of course holidaying is
                        an extreme indulgence and the real work is the political work, the individual work, to address a
                        problematic world whose suffering is our suffering, and whose fate is in our hands.
                    </Text>
                    <Box id={'image-gallery'}/>
                    <TextLink path={'/europa2022/amsterdam/amsterdam-jan'} label={'Visit with Jan'}/>
                </Stack>
            </Box>
        </Box>

    )
}

