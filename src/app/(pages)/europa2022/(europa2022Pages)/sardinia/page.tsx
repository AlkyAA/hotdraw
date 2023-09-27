import {
    Box,
    Image,
    Stack,
    Text
} from '@chakra-ui/react'
import React from "react";
import {PageTitle} from "@/components/PageTitle";
import {TextLink} from "@/components/TextLink";

export default function Sardinia() {
    return (
        <Box w={'100%'}>
            <PageTitle title={'Sardinia'} subTitle={'14/6/2022'}/>
            <Box w={'100%'} textAlign={'justify'} color={'white'}>
                <Stack>
                    <Text>
                        Here&apos;s some things we saw in Sardinia. Fun times in a unique part of Italy and the people we met
                        were open and down to earth. Had some great food too, especially from the sea. We&apos;ve left now
                        but we take the memories with us (sorry there&apos;s so many of them!)
                    </Text>
                    <Text>
                        It was over 30 everyday. One very hot afternoon we cycled through a small village. We were so
                        hot that we collapsed next to the town water fountain and put our heads under the spout to cool
                        off. Then the problem was finding somewhere for lunch as it was siesta time. Our guide notes
                        were wrong about where to eat but we eventually found the only place open. The food was amazing
                        and when I later looked at the weather app it said 38 degrees - sheeesh! The mozzarella in the
                        Caprese salad was soooo fresh, melt in the mouth and the tomatoes and basil sealed the deal with
                        those flavours you only dream of down under. The heat was to be ignored!
                    </Text>
                    <Text>
                        yeah Sardinia was old and beautiful. The bike trip was one of those things you do that’s a
                        challenge. Big effort in the heat, especially up many hills. One day we spent hours climbing,
                        climbing. You have a meter and I could see the five bars slowly dropping to one and then bang,
                        no bars. The bike became a heavy lead weight and a big effort to cycle. I could see from the gps
                        app I was almost at the top and then it was all downhill to our destination Oristano. Luckily I
                        made it after about 15 min of slogging the dead weight (me) up the hill and then coasted down
                        hill the rest of the way, phew!! Apertivo that avo went down real well.
                    </Text>
                    <Text>
                        Sardinia was beautiful and I know we only scratched the surface of it. I think you have to
                        return to a place many times to actually get it or get beyond the surface. I hope you like the
                        surfaces that chance threw my way xx
                    </Text>
                    <TextLink path={'/europa2022/grotto'} label={'Special Visit to Neptune\'s Grotto'}/>
                </Stack>
            </Box>
        </Box>

    )
}

