import { FC } from 'react'
// import { Header } from '../components/Header'
// import { Aside } from '../components/Aside'
// import { Footer } from '../components/Footer'

export const config = { amp: true }

const Index: FC = () => {
  return (
    <>
      <div className='container flex flex-col'>
        <header>
          Ixanary
        </header>
        <main>
          <aside>
            aside
          </aside>
          <div className='contents'>
            contents
          </div>
        </main>
        <footer>
          footer
          <p>記載されている会社名・製品名・システム名などは、各社の商標、または登録商標です。</p>
          <p>Copyright © 2010-2020 SQUARE ENIX CO., LTD. All Rights Reserved.</p>
        </footer>
      </div>
      <style jsx>{`
        .container {
          border: 2px solid green;

          color: #FFF;
        }
        header {
          border: 2px solid yellow;
        }

        main {
          border: 2px solid blue;

          
          display: flex;
          flex-direction: row;
        }
        main aside {
          border: 2px solid orange;

          width: 200px;
        }
        main .contents {
          border: 2px solid black;

          flex-grow: 1;
        }

        footer {
          border: 2px solid red;

          height: 200px;
        }
      `}</style>
    </>
    
  );
}

export default Index
