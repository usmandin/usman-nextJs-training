import Layout from '../components/layout/layout'
import Intro from '../components/intro/intro'
import UserForm from '../components/userForm/userForm'
import Container from '../components/container/container'
import DropDown from '../components/dropDown/dropDown'

export default function DropDownPage() {

    return (
        <Layout title="Drop Down Page">
            <Intro> Form  Page </Intro>
            <Container>
                <DropDown/>
            </Container>
        </Layout>
    )
}