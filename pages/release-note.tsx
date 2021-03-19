import Head from "next/head";
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import axios from 'axios';
import useSWR from 'swr';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import {Header, Footer, Dropdown,} from '../components';
import {LoadingV2,} from '../public/assets';
import {device} from '../styles/theme';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const ReleaseNote = () => {
    // api
    const {data, error} = useSWR('api/release-note', fetcher);
    const [isError, setIsError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [noteList, setNoteList] = useState([]);
    const [noteVersion, setNoteVersion] = useState('');
    const [noteData, setNoteData] = useState('');

    const getNoteData = async (version: string) => {
        setLoading(true);
        setNoteVersion(version);
        const res = await axios.get(`api/release-note/${version}`);
        setNoteData(res.data.noteData);
        setLoading(false);
    };

    useEffect(() => {
        if (error) {
            setIsError(true);
        } else if (data) {
            setIsError(false);
            setNoteList(data.noteList);
            setNoteVersion(data.noteVersion);
            setNoteData(data.noteData);
            setLoading(false);
        }
    }, [data, error]);

    const optionsLoading = {
        animationData: LoadingV2,
        loop: true,
        autoplay: true,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <Container className="release-note" loading={loading.toString()}>
            <Head>
                <title>Release Notes - SpaceONE</title>
                <meta name="description"
                      content="SpaceONE Release notes provide information on new features, improvements, bug fixes, and plugin compatibility list in each release."/>
                <meta name="author" content="Team CloudONE Crews"/>
                <meta name="keyword" content="Release Notes, spaceone plugin list"/>
            </Head>
            <Header/>
            {loading ? (
                    <Box>
                        <div className="__loading">
                            <Lottie options={optionsLoading} style={{width: '14rem', height: '14rem',}}/>
                            <p className="__loading__text">Loading</p>
                        </div>
                    </Box>
                )
                : isError ? (<div>error occurred</div>) : (
                    <>
                        <h2 className="__title"><span className="__text">SpaceONE Release Note</span></h2>
                        <Box>
                            <Dropdown list={noteList} selected={noteVersion} getNoteData={getNoteData}/>
                            <br/>
                            {noteData ? (<ReactMarkdown plugins={[gfm]} className="markdown"
                                                        allowDangerousHtml>{noteData}</ReactMarkdown>) : (
                                <div>No Data</div>)}
                        </Box>
                        <Footer/>
                    </>
                )}
        </Container>
    );
};

const Container = styled.div<{ loading: string }>`
  overflow-x: hidden;
  width: 100%;
  font-size: 3rem;

  .__title {
    display: flex;
    position: fixed;
    left: 50%;
    z-index: 3;
    width: 100%;
    max-width: 144rem;
    font-weight: 300;
    color: ${({theme}) => theme.color.white};
    transform: translateX(-50%);
    background-color: inherit;

    .__text {
      width: 100%;
      padding-bottom: 1.6rem;
      margin-top: 13.6rem;
      margin-left: 10rem;
      margin-right: 10rem;
      border: 0 solid ${({theme}) => theme.color.gray[700]};
      border-bottom-width: 1px;

      @media ${device.tablet} {
        margin-left: 5.7rem;
        margin-right: 5.7rem;
      }

      @media ${device.mobile} {
        margin-top: 10.6rem;
        margin-right: 3rem;
        margin-left: 3rem;
      }
    }
  }
`;

const Box = styled.div`
  max-width: 144rem;
  margin: 0 auto;
  padding: 0 10rem 5rem;
  box-sizing: border-box;

  .__loading {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;

    &__text {
      margin-top: 2rem;
      color: ${({theme}) => theme.color.gray[400]};
      font-size: 1.7rem;
      font-family: Noto Sans;
    }
  }

  @media ${device.tablet} {
    padding: 0 5.7rem 5rem;
  }

  @media ${device.mobile} {
    overflow-x: auto;
    padding: 0 3rem 5rem;
  }
`;

export default ReleaseNote;
