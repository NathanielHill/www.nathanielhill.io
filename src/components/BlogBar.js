import React from 'react'

export default () => (
  <div>
    <style jsx>{`
      div:before {
        content: 'BLOG';
      }
      div:hover:before {
        content: 'COMING SOON';

      }
      div {
        background-color: rgb(187, 151, 190);
        background-image: linear-gradient(-25deg, rgb(187, 151, 190),rgb(218, 188, 221));
        border-radius: 10vh;
        padding: 2vh;
        margin: 0 30vh;
        display: flex;
        width: 16rem;
        justify-content: space-around;
        box-shadow: 0 0 0 0;
        transition: box-shadow .3s;
        font-size: 1.8em;
        color: inherit;
        text-decoration: none;
        outline: 0;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        line-height: 0.8em;
        font-weight: bold;
      }
      div:hover {
        box-shadow: .1em .2em .2em .1em rgba(0, 0, 0, 0.3);
      }
    `}</style>
  </div>
)