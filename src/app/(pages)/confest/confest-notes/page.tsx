import {
    Box,
    Image, Stack,
    Text
} from '@chakra-ui/react'
import React from "react";
import {PageTitle} from "@/components/PageTitle";
import { imageSrc} from "@/utils/utils";

export default function HomeIndex() {
    const remyPic = imageSrc('IMG_8911_xytpxm'); // IMG_8911_xytpxm
    const remyWaterPic = imageSrc('IMG_8882_ccazec'); //

    return (
        <Box w={'100%'}>
            <PageTitle title={'Confest April 2019'} color={'#8273da'}/>
            <Box w={'100%'} textAlign={'justify'} color={'white'}>
                <Stack>
                    <Text>
                        ...continued from confest
                    </Text>
                    <Text>
                        Sunday 21st April, 2019
                    </Text>
                    <Text>
                        Remy has been graciously introducing me to his friends who greet me with warmth. He revels in
                        telling them that I was here 43 years ago. Is that possible, I see in their eyes. In my heart I
                        know it is possible but secretly I trace that trajectory of now and then. Is there a connecting
                        line? I know there is. I know that
                        2 events in the mid to late 70&apos;s formed me in a fundamental way: Nimbin Aquarius Festival, 1973,
                        Down To Earth Festival, 1976. They revealed possibilities of creative and spiritual potential. I
                        found these things in myself. I honoured the labour of crafting, I fell into the world of 20
                        century art. I rejected societal norms that held me back from these things. I drew, I painted, I
                        sculpted, I crafted, I performed. I used my acute observation and not unreasonable intelligence
                        to find a true-er path for myself. 43 years between now and then. Wow, sounds like a
                        ridiculously long time between festivals! Remy made the connection for me. He found archival
                        footage of me performing &apos;Pandora&apos;s Box&apos; from the &apos;Coter River Dam&apos; festival. We called it the
                        &apos;Down To Earth&apos; festival. He found pics too! There is one of me lying supine on top of the other
                        &apos;victims&apos; of Pandora&apos;s box. That pic found it&apos;s way to the glossy cover of an alternative
                        lifestyle magazine of the time called &apos;Simply Living&apos;.
                    </Text>
                    <Text>
                        So we left Sydney on Thursday after a disaster on Wednesday which saw my Audi completely left
                        incapacitated! I had just spent $2500 on fixing the air con in readiness for our trip and then a
                        further $300 in a service. I then went off to buy a nice inflatable foam mattress from Belrose.
                        Returning to the freshly serviced car I found the radiator fluid flowing freely under the car
                        and so I carefully limped home hoping not to cook the engine by stopping frequently and adding
                        water to the leaking radiator. Lovely Karol begrudgingly lent us her Ford Focus. We packed up,
                        or rather over packed, and headed for the Blue Mountains to pick up Remy&apos;s gear. That included
                        various stops to buy bread and to fill up a drum from a fresh mountain stream.
                    </Text>
                    <img src={remyWaterPic} alt={'remy by the water'}/>
                    <Text>
                        As night fell we decided to camp in a National Park called &apos;Weddin&apos;. We cooked up a meal under a
                        night sky with a waxing moon and a beautifully appointed southern cross. We played guitar in
                        turns and as Remy strummed out a spiritual ballad, I watched a fast moving jet leave an
                        unmistakeable white trajectory across the dark sky, kissing the top of the southern cross. I
                        visualised the pilots&apos; view of stars and earth and felt great envy for that rocket man.
                    </Text>
                    <Text>
                        The next morning while cooking breakfast, I looked up to see a young currawong land on a branch
                        above me and warble out a delicate orchestration of coos and woobles. We felt privileged.
                    </Text>
                    <Text>
                        By the time we arrived at the festival grounds, again the evening was growing around us. We
                        offloaded our tremendous amount of gear and were trailered in with others in a haphazard she&apos;ll
                        be right sort of way. We then had to do several rounds of carrying gear along forest tracks to
                        the site Remy had found in the &apos;Tranquility&apos; tribe by the river. There were hundreds of campers
                        in various sized tents. These were roughly grouped into &apos;tribes&apos;: permaculture, arts, bliss,
                        tranquility, polyamory, veg-outs etc
                    </Text>
                    <img src={remyPic} alt={'alky and remy'}/>
                    <Text>
                        We went up to the market stall area and ate some delicious food. We found a spot in the carnival
                        like chai tent and had a quick game of backgammon. We had arrived, but I crashed out soon after
                        and had a delicious 12 hour sleep.
                    </Text>
                    <Text>
                        Waking to the tranquility of the river forest and it&apos;s gentle inhabitants, Rem and I had a quick
                        bone chilling swim in the river and walked up to the nearby yoga tent for a 2 hour session.
                        Later we went our seperate ways attending various workshops or just walking around
                        acclimatising.
                    </Text>
                    <Text>
                        Monday 21st April, 2019
                    </Text>
                    <Text>
                        Sitting by the river I scribble away. This is the last day here and we leave tomorrow. Others
                        are packing up, folding up and trudging armfuls of gear to the shuttle buses.
                    </Text>
                    <Text>
                        After I went to sleep last night, I lay fitfully turning for hours, not really dozing. In the
                        early hours of the night I heard the sounds of sex very nearby outside my tent. Wait, there are
                        multiple voices. Hmm, I couldn&apos;t help but distinguish 2 men and 2 women. It was really amusing
                        and for a while I felt like some kind of anthropologist analysing the mating rituals of the
                        young and the beautiful.
                    </Text>
                    <Text>
                        The 2 hour yoga sessions each morning are intense and finish with group &apos;omm-ing&apos; and a talk on
                        the spiritual science of yoga. Yoga is defined as &apos;union&apos; - I guess of the physical and the
                        esoteric and defined in detail using Sanskrit terminology. Interesting stuff I have been toying
                        around with since my youth.
                    </Text>
                    <Text>
                        I have been going to life drawing at the arts tribe, by the sauna, by the river. You sit there
                        under a low canopy and draw the various bodies: young, old, fat, thin, normal, male, female.
                        Outside you catch views of people lining up for open air showers, swimming in the river, hanging
                        on it&apos;s small sandy beach or leaving the ramshackle sauna shelter to stand by an open fire to
                        dry. Clothes are definitely optional. There is an &apos;Indian&apos; aesthetic of sarongs and wraps,
                        pantaloons and vests. This is all so reminiscent of the 70&apos;s. Really almost identical but with
                        the addition of a &apos;cornucopia&apos; of body tattoos.
                    </Text>
                    <Text>
                        The day before, Remy and I had a sauna there which concluded with everyone joining in on an
                        acepella &apos;omm-ing&apos; session. It was wonderful to be naked and feeling so uninhibited and
                        unashamed, even natural. It was so easy to slip back into this after so many decades. After we
                        came out of the river, glowing from the hot-cold body shock, we too stood around the fire with
                        everyone, naked, laughing, joking, singing.
                    </Text>
                    <Text>
                        Up till then the weather was warm and balmy. This morning the clouds rolled in while we took a
                        load of unneeded gear back to the car - about a 20 minute walk I think. I waited in the car
                        charging my phone while Remy went off to explore the festival more. I was soon bored and a
                        little annoyed that I needed my phone to tell the time. As I started back, a few fat raindrops
                        fell, so I ran back to the car and grabbed my very useful Bunnings umbrella, just as the heavens
                        opened up and the wind started lashing. I was literally leaning into the storm as I trudged
                        between the new rivulets of mud. My sarong was soaked but my spirits were not. I was loving this
                        crazy place and this cheeky weather. Remy actually found me on the way back and we grabbed each
                        other laughing under the umbrella and then off he went again.
                    </Text>
                    <Text>
                        That was yesterday and today I&apos;m chilling out a bit by the river. It&apos;s a lot cooler but not a
                        problem. There was no more rain after that. Earlier I struck up a conversation with a young
                        English guy. I found myself in a kind of a mentoring role giving him advise about life and love.
                        After a hug he continued on. Nice. It&apos;s been 43 years between festivals for me. I&apos;m reminded of
                        that trajectory through the night sky I saw on our first night. Long and silent, adding it&apos;s
                        simple mark to a world of beautiful complexity.
                    </Text>
                </Stack>
            </Box>
        </Box>

    )
}
