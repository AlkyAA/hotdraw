import Link from "next/link";
import {Button, Text} from "@chakra-ui/react";

type Props = {
    label: string,
    path: string
}
export function TextLink({path, label}: Props) {
    return (
        <Link href={path}>
            <Button
                variant={'unstyled'}
                color={'sitePink'}
                fontSize={'15px'}
                _hover={{
                    color: 'sitePinkHover'
                }}>

                {label}
            </Button>
        </Link>
    )
}
