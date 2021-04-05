import Head from 'next/head';
import styled from 'styled-components';
import {
    Header,
    Section1,
    Section2,
    Section3,
    Section4,
    Section5,
    Section6,
    Footer,
    Background,
    ScrollBtns,
    ScrollAnimation
} from '../components';

const Index = () => {
    return (
        <>
            <Head>
                <title>SpaceONE - Open Source Multi-Cloud Management Platfrom</title>
                <meta name="description"
                      content="SpaceONE helps you manage multi-cloud environments and your all cloud resources in ONE platform that offers support for AWS, Azure, Google Cloud, and more."/>
                <meta name="keyword"
                      content="cloud management platform, multi-cloud managed service, open source project, cloud resource, multi-cloud accounts, cloud automation service, cloud spend optimization, cloud billing, multi-cloud infrastructure, real-time monitoring, cloud governance service, cloud orchestration service, RBAC"/>
            </Head>
            <Container>
                <Header/>
                <Section1/>
                <Section2/>
                <Section3/>
                <Section4/>
                <Section5/>
                <Section6/>
                <ScrollBtns/>
                <Footer/>
                <Background/>
            </Container>
            <ScrollAnimation/>
        </>
    );
};

const Container = styled.div`
  font-size: 3rem;
`;

export default Index;
