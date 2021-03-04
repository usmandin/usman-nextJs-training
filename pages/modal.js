import Layout from '../components/layout/layout'
import Intro from '../components/intro/intro'
import Container from '../components/container/container'
import Modal from '../components/Modal/Modal'


export default function ModalPage() {
    const modalArray = [
        {
            variant : "center with single action",
            heading : "Payment Successful",
            description : "Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.",
            buttons : [{ text: "Got back to dashboard", state:"Active" }],
        },
        {
            variant : "center with double action",
            heading : "Payment Successful",
            description : "Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.",
            buttons : [{ text: "Got back to dashboard", state:"Active" },{ text: "Cancel", state:"cancel" }],
        },
        {
            variant : "simple alert",
            heading : "Deactivate account",
            description : "Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.",
            buttons : [{ text: "Deactive", state:"deactive" },{ text: "Cancel", state:"cancel" }],
        },
        {
            variant : "simple alert left align",
            heading : "Deactivate account",
            description : "Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.",
            buttons : [{ text: "Deactive", state:"deactive" },{ text: "Cancel", state:"cancel" }],
        }
    ]
    return (
        <Layout title="Modal Page">
            <Intro> Modal Page </Intro>
            
            <Container grid={"1"}>
                <Modal 
                    variant="simple alert"
                    heading="Deactivate account"
                    description="Are you sure you want to deactivate your account? All of your data will be permanently removed." 
                    buttons={[{ text: "Deactive", state:"deactive" },{ text: "Cancel", state:"cancel" }]}>
                    </Modal>
            </Container>           

        </Layout>
    )
}