import {
    Box,
    Stack,
    Text
} from '@chakra-ui/react'
import React, {ReactNode} from "react";
import {PageTitle} from "@/components/PageTitle";
import {TextLink} from "@/components/TextLink";

export default function Palermo() {
    return (
        <Box w={'100%'}>
            <PageTitle title={'Palermo'} subTitle={'5/7/2022'}/>
            <Box w={'100%'} textAlign={'justify'} color={'white'}>
                <Stack>
                    <Text>
                        Palermo, capital of the Italian island of Sicily. What did I make of this city? We were only
                        there for 4 days but I did get a strong reaction to it. It was like a visit from a grumpy old
                        uncle, Uncle Palermo. Wait, this is Sicily, make that a grumpy old Godfather, Don Palermo. He
                        comes to the house for Sunday dinner. He&apos;s late, scruffy, wearing stains from last night&apos;s pasta
                        but bearing gifts for all the kids. He pulls their ears and tells risque stories before he can
                        be diverted. His old bomb is parked so badly in the street, cars are honking trying to get past.
                        At dinner he&apos;s loud but surprisingly charming and funny. We notice he&apos;s actually wearing a
                        beautifully embroidered vest underneath his dirty old cardigan. At the end of the night he&apos;s
                        seen whispering secretly to one of the young men who later blushes, admitting he was hit up for
                        cash handshake loan.
                    </Text>
                    <Text>
                        The place we stayed in really had some old world charm but with modern furnishings. Outside we
                        could see the surrounding mountains that were mostly bare, sharp and ominous and seemed very
                        close. We could also hear the sounds of sirens, car honks and people. It gave the impression of
                        some unfolding emergency. It was like that the next day too, and the next.. so we had to get
                        used to it, that and the relentless sweaty heat.
                    </Text>
                    <Text>
                        The farmer&apos;s markets in the heart of the old city were an amazing complex, a spectacle that went
                        for winding alley way after winding alley way. Once in, we had to just keep going. People,
                        scooters, small 3 wheel vehicles, all wove past each other with millimetres to spare. It was so
                        cheap too! The traders though were all pretty mater of fact and the opposite of charming...ok,
                        pretty damned grumpy and on the verge of being really annoyed at the tourist with little
                        Italian!
                    </Text>
                    <Text>
                        On the last day we got up enough courage to hire a car and actually drive through the mad
                        spaghetti traffic and head south to our next stop, the Valley of the Temples. My blood pressure
                        took a hit but we finally squeezed out of the mess of the city&apos;s choked arteries without too
                        many close calls. See you later Don, Uncle or whatever relative you might be. It also might be a
                        long time between visits but hey, it was an experience.
                    </Text>
                    <TextLink path={'/europa2022/south-sicily'} label={'Next Stop South Sicily'}/>
                </Stack>
            </Box>
        </Box>

    )
}

