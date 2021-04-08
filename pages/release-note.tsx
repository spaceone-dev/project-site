import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import gfm from 'remark-gfm';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import { Header, Footer, Dropdown } from '../components';
import { device } from '../styles/theme';
import { LoadingV2 } from '../public/assets';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const ReleaseNote = () => {
    // api
    const { data, error } = useSWR('api/release-note', fetcher);
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
            progressiveLoad: true,
        },
        useSubFrames: false,
    };

    return (
        <Container className="release-note" loading={loading.toString()}>
            <Head>
                <title>SpaceONE - Release Note</title>
                <meta
                    name="description"
                    content="SpaceONE Release notes provide information on new features, improvements, bug fixes, and plugin compatibility list in each release."
                />
                <meta name="author" content="Team CloudONE Crews" />
                <meta name="keyword" content="Release Notes, spaceone plugin list" />
            </Head>
            <Header />
            {loading ? (
                <Box>
                    <div className="__loading">
                        <div className="__loading__lotties"><Lottie options={optionsLoading} /></div>
                        <p className="__loading__text">Loading</p>
                    </div>
                </Box>
            )
                : isError ? (
                    <div>error occurred</div>
                ) : (
                    <>
                        <div className="__release__header">
                            <h2 className="__title">SpaceONE Release Note</h2>
                            <Dropdown list={noteList} selected={noteVersion} getNoteData={getNoteData} />
                        </div>
                        <Box>
                            {
                                noteData ? (
                                    <ReactMarkdown
                                        className="markdown"
                                        plugins={[gfm]}
                                        allowDangerousHtml
                                    >{noteData}
                                    </ReactMarkdown>
                                ) : (
                                    <div>No Data</div>
                                )
                            }
                        </Box>
                        <Footer />
                    </>
                )}
        </Container>
    );
};

const Container = styled.div<{ loading: string }>`
  overflow-x: hidden;
  width: 100%;
  font-size: 3rem;

  .__release__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 50%;
    z-index: 3;
    width: 100%;
    max-width: 144rem;
    height: 12rem;
    padding: 6rem 3rem 0;
    background-color: inherit;
    transform: translateX(-50%);
    box-sizing: border-box;
    border-bottom: 1px solid ${({ theme }) => theme.color.gray[700]};

    .__title {
      font-weight: 300;
      line-height: 1;
      color: ${({ theme }) => theme.color.white};
    }
  }

  @media ${device.tablet} {
    .__release__header {
      flex-direction: column;
      align-items: flex-start;
      height: auto;
      padding: 8rem 3rem 2rem;

      .__title {
        margin-bottom: 2.5rem;
      }
    }
  }

  @media ${device.mobile} {
    .__release__header {
      flex-direction: column;
      align-items: flex-start;
      height: auto;
      padding: 8rem 3rem 2rem;

      .__title {
        margin-bottom: 2.5rem;
        font-size: 2.4rem;
      }
    }
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 106rem;
  min-height: 100vh;
  margin: 0 auto;
  box-sizing: border-box;

  .__loading {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 14rem;
    margin: 0 auto;

    &__lotties {
      width: 14rem;
      height: 14rem;
    }

    &__text {
      margin-top: 2rem;
      color: ${({ theme }) => theme.color.gray[400]};
      font-size: 1.7rem;
      font-family: Noto Sans;
    }
  }

  .markdown {
    width: 100%;
    padding-top: 15rem;
    padding-bottom: 14rem;
  }

  @media ${device.tablet} {
    padding: 0 5.7rem 5rem;

    .markdown {
      padding-top: 25rem;
    }
  }

  @media ${device.mobile} {
    overflow-x: auto;
    padding: 0 3rem 5rem;

    .markdown {
      padding-top: 25rem;
    }
  }
`;

export default ReleaseNote;
