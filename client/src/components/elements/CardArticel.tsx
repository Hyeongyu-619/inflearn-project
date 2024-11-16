'use client';

import styled from 'styled-components';

export default function CardArticel() {
  return (
    <CardWrap>
      <div className="article-photo"></div>
      <div className='article-text-wrap'>
        <div className="article-user-wrap">
          <div className="article-user-photo"></div>
          <div className="article-user-id">닉네임</div>
        </div>
        <div className="article-movie-title">아티클 제목</div>
        <div className="article-movie-desc">아티클 정보</div>
      </div>
    </CardWrap>
  );
}

const CardWrap = styled.div`
  max-width:430px;
  max-height:324px;
  width:100%;
  padding-bottom:14px;

  .article-photo{
    width:100%;
    height:240px;
    background-color:#fff;
  }

  
  .article-text-wrap{
    padding:12px 0 0;

    .article-user-wrap{
      display:flex;
      gap:4px;
      margin-bottom:12px;
      .article-user-photo{
        width:18px;
        height:18px;
        border-radius:9px;
        background-color:#fff;
      }
      .article-user-id{
        font-size:13px;
        line-height:18px;
        color:#747474;
      }
    }
    .article-movie-title {
      font-size:20px;
      font-weight:500;
      line-height:20px;
      margin-bottom:4px;
      color:#141414;
    }
    .article-movie-desc' {
      font-size:14px;
      font-weight:400;
      line-height:20px;
      color:#5E5E64;
    }
  }
`;