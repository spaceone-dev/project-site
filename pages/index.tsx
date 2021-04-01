import Head from 'next/head';
import styled from 'styled-components';
import {
    Header,
    Footer,
    Scroll1,
    Scroll2,
    Scroll3,
    Scroll4,
    Scroll5,
    Scroll6,
    Background,
} from '../components';

const Index = () => {
    return (
        <>
            <Head>
                <title>SpaceONE - Open Source Multi-Cloud Management Platfrom</title>
                <meta name="description" content="SpaceONE helps you manage multi-cloud environments and your all cloud resources in ONE platform that offers support for AWS, Azure, Google Cloud, and more."/>
                <meta name="keyword" content="cloud management platform, multi-cloud managed service, open source project, cloud resource, multi-cloud accounts, cloud automation service, cloud spend optimization, cloud billing, multi-cloud infrastructure, real-time monitoring, cloud governance service, cloud orchestration service, RBAC"/>
            </Head>
            <Container>
                <Background/>
                <Header/>
                <Scroll1/>
                <Scroll2/>
                <Scroll3/>
                <Scroll4/>
                <Scroll5/>
                <Scroll6/>
                <Footer/>
            </Container>
        </>
    );
};

const Container = styled.div`
  font-size: 3rem;
`;

export default Index;
