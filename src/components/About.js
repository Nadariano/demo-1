import { Container,Collapsible, CollapsibleItem, Icon } from 'react-materialize'
export default function About() {
    return (
        <Container>
            <Collapsible accordion>
                <CollapsibleItem
                    expanded
                    header="THE TEAM"
                    icon={<Icon>people</Icon>}
                    node="div"
                >
                    Here you can see the player cards which consists of over 50 soccer football players from all over the world
                </CollapsibleItem>
                <CollapsibleItem
                    expanded={false}
                    header="Nations"
                    icon={<Icon>place</Icon>}
                    node="div"
                >
                    Viet Nam, isn't it?
                </CollapsibleItem>
                <CollapsibleItem
                    expanded={false}
                    header="Daily news"
                    icon={<Icon>whatshot</Icon>}
                    node="div"
                >
                    You want to know something new? Go and get the online newspaper!
                </CollapsibleItem>
            </Collapsible>
        </Container>
    )

}