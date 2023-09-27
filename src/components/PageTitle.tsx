import {Box, Stack, Text} from "@chakra-ui/react";
import React from "react";

type Props = {
    title: string
    color?: string
    subTitle?: string
    isSubHeader?: boolean
}
export function PageTitle({title, color='sitePink', subTitle, isSubHeader=false}: Props) {
    return (
        <Box borderBottom={isSubHeader ? 'none' : '1px solid grey'} width={'100%'}>
        <Text
            fontSize={isSubHeader ? '20px' : '24px'}
            fontWeight={700}
            color={color}
            w={'100%'}>
            {title}
        </Text>
            {subTitle &&
	            <Text
		            fontSize={'12px'}
		            fontWeight={400}
		            color={'white'}
		            w={'100%'}
		            mb={'10px'}>
                        {subTitle}
	            </Text>
            }
        </Box>
    )
}