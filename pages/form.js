import Layout from '../components/layout/layout'
import Intro from '../components/intro/intro'
import UserForm from '../components/userForm/userForm'
import Container from '../components/container/container'

export default function Form() {

    return (
        <Layout title="Form Page">
            <Intro> Form  Page </Intro>
            <Container>
                <UserForm></UserForm>
            </Container>
        </Layout>
    )
}